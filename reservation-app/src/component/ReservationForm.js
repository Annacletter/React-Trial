import React, { useState } from 'react';
import axios from 'axios';

function ReservationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = { name, email, date, time, people };

    axios.post('https://jsonplaceholder.typicode.com/posts', reservation)
      .then(response => {
        console.log(response.data);
        alert('Reservation successful!');
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setPeople('');
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Time</label>
        <input type="time" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Number of People</label>
        <input type="number" className="form-control" value={people} onChange={(e) => setPeople(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ReservationForm;
