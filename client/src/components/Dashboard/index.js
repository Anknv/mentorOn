import { Calendar } from "./Calendar"
import { Goals } from "./Goals"
import { MentorCard } from "./MentorCard"
import './styles.css'

export const Dashboard = function(props) {
  return <div>
    <div className="dashboard-month-picker">February 2022</div>
    <div className="dashboard-top-row">
      <MentorCard monthId='1' />
      <Calendar month={1} year={2022} monthId='1'/>
    </div>
    <Goals monthId='1' />
  </div>
}
