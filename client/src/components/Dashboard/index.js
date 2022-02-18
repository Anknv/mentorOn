import axios from "axios"
import { useEffect, useState } from "react"
import { MenteeDashboard } from "./MenteeDashboard";
import { MentorDashboard } from "./MentorDashboard";

export function Dashboard(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    loadUser();
  }, [props.monthId])

  function loadUser() {
    axios.get('/api/dashboard/user')
    .then((response) => {
      console.log({response})
      setUser(response.data);
    })
  }

  if (user && user.mentor_id) {
    return <MentorDashboard />
  } else if (user && !user.mentor_id) {
    return <MenteeDashboard />
  } else {
    return 'loading...';
  }
}
