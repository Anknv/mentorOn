import axios from "axios"
import { useEffect, useState } from "react"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles.css'

export const Goals = function(props) {

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    loadGoals();
  }, [props.monthId])

  function loadGoals() {
    axios.get('/api/dashboard/mentee-goals', {
      params: {
        month_id: props.monthId,
        user_id: props.userId,
      }
    })
    .then((response) => {
      console.log('goals', {response});
      setGoals(response.data);
    })
  }

  function markGoalDone(goalId, isDone) {
    axios.post('/api/dashboard/mentee-goal-done', {
      goal_id: goalId,
      is_done: isDone,
      month_id: props.monthId
    }).then(() => {
      loadGoals();
    })
  }

  function addNewGoal(description) {
    axios.post('/api/dashboard/create-mentee-goal', {
      description: description,
      month_id: props.monthId,
      user_id: props.userId,
    }).then(() => {
      loadGoals();
    })
  }

  const percentage = Math.round(goals.reduce((prev, current) => {
    if (current.is_done) {
      return prev + 1
    }
    return prev

  }, 0) / goals.length * 100) || 0;

  return (
  <div className="goals">
    <div className="goals--list-container">
      <h3 className="goals--title-header">Goals</h3>
      <ul className="goals--list">
        {goals.map(goal => (
          <li className="goals--list-item" key={goal.id}>
            {props.userId ? '' : <input type='checkbox' onChange={(event) => markGoalDone(goal.id, event.target.checked)} checked={goal.is_done} />}
            {goal.description}
          </li>
        ))}
      </ul>
      {goals.length < 5 && props.userId ? <input
        className="goals--new-goal"
        type='text'
        onKeyDown={event => {
          if (event.key === 'Enter') {
            addNewGoal(event.target.value);
            event.target.value = '';
          }
        }}
        placeholder="Type a new goal..."
      /> : ''}
    </div>
    <div className='goals--progress-circle'>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  </div>
  )
}
