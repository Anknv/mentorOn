import axios from "axios"
import { useEffect, useState } from "react"
import './styles.css'

export const MentorCard = function(props) {

  const [card, setCard] = useState({});

useEffect(() => {
  loadCard();
}, [props.monthId])

function loadCard() {
  axios.get('/api/dashboard/mentor-card', {
    params: {
      month_id: props.monthId
    }
  })
  .then((response) => {
    setCard(response.data);
  })
}

  return <div className="mentor-card">
    <div className="mentor-image">
      <img className="mentor-card--mentor-image" src={card.image_url} />
      <span className="mentor-name">{card.name}</span>
    </div>
    <div className="mentor-speciality">{card.speciality}</div>

    <div className="mentor-card-row">
      <i class="fas fa-map-pin"></i>
      <div className="mentor-location">{card.location}</div>
      <i class="fas fa-globe"></i>
      <div className="mentor-language">{card.language}</div>
    </div>
  </div>
}
