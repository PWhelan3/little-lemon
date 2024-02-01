import React, { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setNumberOfGuests(parseInt(e.target.value, 10));
  };

  const handleOccasionChange = (e) => {
    setSelectedOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({
      date: selectedDate,
      time: selectedTime,
      guests: numberOfGuests,
      occasion: selectedOccasion,
    });
  };

  useEffect(() => {
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  }, [selectedDate, dispatch]);

  const isFormValid = () => {
    return selectedDate && selectedTime && numberOfGuests >= 1 && selectedOccasion;
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={selectedTime} onChange={handleTimeChange} required>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={handleGuestsChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={selectedOccasion} onChange={handleOccasionChange} required>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isFormValid()}
        aria-label="Make Your reservation"
      />
    </form>
  );
};

export default BookingForm;