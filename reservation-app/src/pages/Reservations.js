import React from 'react';

function Reservations() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Hotel Booking</h2>
          <form id="hotelBookingForm">
            <div className="mb-3">
              <label for="hotelName" className="form-label">Name</label>
              <input type="text" className="form-control" id="hotelName" required />
            </div>
            <div className="mb-3">
              <label for="hotelEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="hotelEmail" required />
            </div>
            <div className="mb-3">
              <label for="checkInDate" className="form-label">Check-In Date</label>
              <input type="date" className="form-control" id="checkInDate" required />
            </div>
            <div className="mb-3">
              <label for="checkOutDate" className="form-label">Check-Out Date</label>
              <input type="date" className="form-control" id="checkOutDate" required />
            </div>
            <button type="submit" className="btn btn-primary">Book Now</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Restaurant Reservation</h2>
          <form id="restaurantReservationForm">
            <div className="mb-3">
              <label for="restaurantName" className="form-label">Name</label>
              <input type="text" className="form-control" id="restaurantName" required />
            </div>
            <div className="mb-3">
              <label for="restaurantEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="restaurantEmail" required />
            </div>
            <div className="mb-3">
              <label for="reservationDate" className="form-label">Reservation Date</label>
              <input type="date" className="form-control" id="reservationDate" required />
            </div>
            <div className="mb-3">
              <label for="reservationTime" className="form-label">Reservation Time</label>
              <input type="time" className="form-control" id="reservationTime" required />
            </div>
            <button type="submit" className="btn btn-primary">Reserve Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservations;

