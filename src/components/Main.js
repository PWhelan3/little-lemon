import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.times;
    default:
      return state;
  }
};

const initializeTimes = async () => {

  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const Main = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  const submitForm = async (formData) => {
    try {

      const isBookingSuccessful = await submitAPI(formData);
      
      if (isBookingSuccessful) {
        navigate('/confirmed'); 
      } else {

      }
    } catch (error) {
      console.error('Error submitting form:', error);

    }
  };

  return (
    <div>
      <h1>Little Lemon Reserve-a-Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
};

export default Main;