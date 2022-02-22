import axios from "axios"
import { useEffect, useState } from "react"
import { Agenda } from "./Agenda";
import { StudentCards } from "./StudentCards";
import './styles.css'

export function MentorDashboard(props) {

  const [months, setMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState({});

  useEffect(() => {
    loadMonths();
  }, [])

  function loadMonths() {
    axios.get('/api/dashboard/mentor-months')
    .then((response) => {
      console.log(1,{response})
      setMonths(response.data);
      setSelectedMonth(response.data[0]);
    })
  }

  return <div className="mentor-dashboard-container">
    {!months.length ? <h3 className="mentor-dashboard--no-sessions">You have no sessions.</h3> : ''}
    <div className="dashboard-month-picker">
      {months.map(month => (
        <div onClick={() => setSelectedMonth(month)} className={`month ${selectedMonth.id === month.id ? 'selected' : ''}`}>
          {month.month} {month.year}
        </div>
      ))}
    </div>
    {selectedMonth ? <div>
      <Agenda monthId={selectedMonth.id} />
      <StudentCards monthId={selectedMonth.id} />
    </div> : ''}
  </div>;
}
