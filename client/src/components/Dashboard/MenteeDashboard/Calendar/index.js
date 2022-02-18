import axios from "axios"
import { useEffect, useState } from "react"
import './styles.css';

export const Calendar = function(props) {

  const [calls, setCalls] = useState([]);

  useEffect(() => {
    loadCalls();
  }, [props.monthId])

  function loadCalls() {
    axios.get('/api/dashboard/mentee-calls', {
      params: {
        month_id: props.monthId
      }
    })
    .then((response) => {
      console.log(response)
      setCalls(response.data);
    })
  }

  function selectCall(day, call) {
    if (!call) {
      axios.post('/api/dashboard/mentee-call', {
        month_id: props.monthId,
        day_of_month: day,
      }).then(() => {
        loadCalls();
      })
    } else {
      axios.post('/api/dashboard/delete-mentee-call', {
        call_id: call.id
      }).then(() => {
        loadCalls();
      })
    }
  }


  const weeks = [];

  // Jan is 0, Dec is 11
  const firstDay = new Date(props.year, props.month, 1);
  const dayOfWeek = firstDay.getDay();
  const lastDay = new Date(props.year, props.month + 1, 0);
  const daysInMonth = lastDay.getDate();

  console.log({firstDay,dayOfWeek,lastDay,daysInMonth})
  const buildWeek = function(startDay, currentDate, maxDate) {
    console.log({startDay, currentDate, maxDate});
    // Sun is 0, Sat is 6
    const week = [];
    for (let i = 0; i < startDay; i++) {
      week.push('');
    }
    for (let i = startDay; i < 7 && currentDate < maxDate; i++) {
      currentDate = currentDate + 1;
      week.push(currentDate)
    }
    return {week: week, currentDate: currentDate}
  }


  let currentDate = 0;
  let startDay = dayOfWeek;

  while (currentDate < daysInMonth) {
    const newWeek = buildWeek(startDay, currentDate, daysInMonth);
    console.log({newWeek})
    weeks.push(newWeek.week);
    currentDate = newWeek.currentDate;
    startDay = 0;
  }

  return <div className='calendar'>
    <div className="calendar-week header">
      <div className="calendar-day">SUN</div>
      <div className="calendar-day">MON</div>
      <div className="calendar-day">TUE</div>
      <div className="calendar-day">WED</div>
      <div className="calendar-day">THU</div>
      <div className="calendar-day">FRI</div>
      <div className="calendar-day">SAT</div>
    </div>
    {weeks.map((week, i) => <div key={i} className="calendar-week">
      {week.map(day => {
        const call = calls.find(call => call.day_of_month === day)
        return <div
          key={day}
          onClick={() => selectCall(day, call)}
          className={`calendar-day ${day === '' ? 'empty' : ''} ${call ? 'has-call' : ''}`}
        >
          {day}
        </div>;
      })}
    </div>)}
    <div className='calendar-legend'><span></span> Scheduled calls with mentor</div>
  </div>
}
