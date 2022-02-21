import axios from "axios"
import { useEffect, useState } from "react"
import { Goals } from "../../Goals";
import './styles.css'

export const StudentCards = function(props) {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    loadCards();
  }, [props.monthId])

  function loadCards() {
    axios.get('/api/dashboard/student-cards', {
      params: {
        month_id: props.monthId
      }
    })
    .then((response) => {
      console.log('sc', {response});
      setCards(response.data);
    })
  }

  return <div className="student-cards">
    {cards.map(card => <div className="student-card">
        <div className="student-image">
          <img className="student-card--student-image" src={card.image_url} />
          <span className="student-name">Mentee Name: {card.name}</span>
        </div>
        <div className="student-card-row">
        <Goals monthId={props.monthId} userId={card.id} />
        </div>
      </div>)}
  </div>
}
