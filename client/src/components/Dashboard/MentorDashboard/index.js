import axios from "axios"
import { useEffect, useState } from "react"
import { Agenda } from "./Agenda";
import { StudentCards } from "./StudentCards";

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

  return <div>
    <div className="dashboard-month-picker">
      {months.map(month => (
        <div onClick={() => setSelectedMonth(month)} className={`month ${selectedMonth.id === month.id ? 'selected' : ''}`}>
          {month.month} {month.year}
        </div>
      ))}
    </div>
    <Agenda monthId={selectedMonth.id} />
    {selectedMonth ? <div>
      <StudentCards monthId={selectedMonth.id} />
    </div> : ''}
  </div>;
}
