import { Goals } from "./Goals"
import { MentorCard } from "./MentorCard"

export const Dashboard = function(props) {
  return <div>
    <MentorCard/>
    <Goals monthId='1' />
  </div>
}
