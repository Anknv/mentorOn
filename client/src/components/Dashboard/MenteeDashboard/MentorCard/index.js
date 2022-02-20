import axios from "axios"
import { useEffect, useState } from "react"
import './styles.css'
import { FaRegIdBadge } from 'react-icons/fa';
import { MdOutlineLocationOn , MdOutlineLanguage } from 'react-icons/md';

export const MentorCard = function (props) {

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

  return (
    <div className="mentor-card">
      <div className="mentor-image">
        <img className="mentor-card--mentor-image" src={card.image_url} />
      </div>
      <div className="mentor-card-row">
        <span className="mentor-name">Mentor name: {card.name}</span>
        <div className="mentor-speciality">
          <FaRegIdBadge />
          Speciality: {card.speciality}
        </div>
        <div className="mentor-location">
          <MdOutlineLocationOn />
          Location: {card.location}
        </div>
        <div className="mentor-language">
          <MdOutlineLanguage />
          Language: {card.language}
        </div>
      </div>
    </div>
  )
}
