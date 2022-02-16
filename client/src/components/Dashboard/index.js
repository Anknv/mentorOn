import { Goals } from "./Goals"
import { MentorCard } from "./MentorCard"
import './styles.css'

export const Dashboard = function(props) {
  return <div>
    <div className="dashboard-top-row">
      <MentorCard monthId='1' />
      <div>Calendar...</div>
    </div>
    <Goals monthId='1' />
  </div>
}
