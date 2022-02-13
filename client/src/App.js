import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {

  const [users,setUsers] = useState([]);

  useEffect(() => {

    axios({
      method: 'GET',
      url: '/api/users'
    })
    .then (result => {
        console.log(result.data);
        setUsers(result.data.users);

    })
    .catch (err => console.log("Error: Error Message",err));

  },[]);
  console.log("typeof",typeof users);
   const userList = users && users.map(user => <li key={user.id}>{user.name} {user.email} </li>);
  return (
    <div className="App">
      <ul>
        {userList}
      </ul>
    </div>
  );
}

export default App;
