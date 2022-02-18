import axios from "axios"
import { useEffect, useState } from "react"
import { Calendar } from "./Calendar"
import { Goals } from "./Goals"
import { MentorCard } from "./MentorCard"
import './styles.css'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const Dashboard = function(props) {

  const [months, setMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState({});

  useEffect(() => {
    loadMonths();
  }, [])

  function loadMonths() {
    axios.get('/api/dashboard/months')
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
    {selectedMonth ? <div>
      <div className="dashboard-top-row">
        <MentorCard monthId={selectedMonth.id} />
        <Calendar key={selectedMonth.id} month={monthNames.indexOf(selectedMonth.month)} year={selectedMonth.year} monthId={selectedMonth.id} />
      </div>
      <Goals monthId={selectedMonth.id} />
    </div> : ''}
  </div>
}
