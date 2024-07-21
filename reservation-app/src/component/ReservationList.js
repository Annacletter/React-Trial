import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReservationList() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setReservations(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Reservations</h2>
      <ul className="list-group">
        {reservations.map(reservation => (
          <li key={reservation.id} className="list-group-item">
            <h5>{reservation.title}</h5>
            <p>{reservation.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;
