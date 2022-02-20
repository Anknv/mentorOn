import axios from "axios"
import { useEffect, useState } from "react"
import './styles.css'

export function Agenda(props) {

  const [calls, setCalls] = useState([]);

  useEffect(() => {
    loadCalls();
  }, [props.monthId])

  function loadCalls() {
    axios.get('/api/dashboard/mentor-calls', {
      params: {
        month_id: props.monthId
      }
    })
    .then((response) => {
      console.log(response)
      setCalls(response.data);
    })
  }

  return <div className="agenda">
      <div className="agenda-table-container">
        <h3>Scheduled Calls</h3>
        <table className="agenda-table">
          <tr><th>Day of month</th><th>Mentee</th></tr>
        {calls.map(call => <tr key={call.id}>
          <td>{call.day_of_month}</td>
          <td>{call.user_name}</td>
        </tr>)}
      </table>
    </div>
  </div>;
}
