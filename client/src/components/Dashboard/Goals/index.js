import axios from "axios"
import { useEffect, useState } from "react"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles.css'

export const Goals = function(props) {

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    loadGoals();
  }, [])

  function loadGoals() {
    axios.get('/api/dashboard/mentee-goals', {
      params: {
        month_id: 1
      }
    })
    .then((response) => {
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

  const percentage = Math.round(goals.reduce((prev, current) => {
    if (current.is_done) {
      return prev + 1
    }
    return prev

  }, 0) / goals.length * 100) || 0;

  return <div>
    goals...
    <ul>
      {goals.map(goal => (
        <li key={goal.id}>
          <input type='checkbox' onChange={(event) => markGoalDone(goal.id, event.target.checked)} checked={goal.is_done} /> {goal.description}
        </li>
      ))}
    </ul>
    <div className='goals--progress-circle'>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
    </div>
  </div>
}
