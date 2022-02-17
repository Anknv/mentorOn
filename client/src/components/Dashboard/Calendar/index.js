import './styles.css';

export const Calendar = function(props) {

  const weeks = [];

  // Jan is 0, Dec is 11
  const firstDay = new Date(props.year, props.month, 1);
  const dayOfWeek = firstDay.getDay();
  const lastDay = new Date(props.year, props.month + 1, 0);
  const daysInMonth = lastDay.getDate();

  const buildWeek = function(startDay, currentDate, maxDate) {
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
    {weeks.map(week => <div className="calendar-week">
      {week.map(day => <div className={`calendar-day ${day === '' ? 'empty' : ''}`}>{day}</div>)}
    </div>)}
  </div>
}
