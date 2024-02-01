import { render, screen } from "@testing-library/react";
import { BookingForm } from './components/BookingForm.js';
import { initializeTimes, updateTimes } from './components/Main';
import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import userEvent from '@testing-library/user-event';
import Main from './components/Main';



jest.mock('./path-to-api', () => ({
  fetchAPI: jest.fn().mockResolvedValue(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
}));



test('Updates available times when the date is selected', async () => {
  render(<Main />);
  await screen.findByText('Little Lemon Reserve-a-Table');

  const dateInput = screen.getByLabelText('Choose date');
  userEvent.type(dateInput, '2022-02-01');

  expect(screen.getByText('17:00')).toBeInTheDocument();
  expect(screen.getByText('18:00')).toBeInTheDocument();
});



test('initializeTimes returns the correct initial times array', () => {
  const initialTimes = initializeTimes();

  expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});



test('Renders the Main component and fetches available times on initialization', async () => {
  render(<Main />);
  await screen.findByText('Little Lemon Reserve-a-Table');

  expect(screen.getByText('17:00')).toBeInTheDocument();
  expect(screen.getByText('18:00')).toBeInTheDocument();
});



test('updateTimes returns the same value provided in the action', () => {
  const state = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', times: ['19:00', '20:00'] };

  const updatedTimes = updateTimes(state, action);

  expect(updatedTimes).toEqual(['19:00', '20:00']);
});



test('Renders the BookingForm label for date', () => {
  render(<BookingForm />);

  const dateLabel = screen.getByText("Choose date");
  expect(dateLabel).toBeInTheDocument();
});



test('HTML5 validation attributes are applied to form input fields', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);

  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText('Occasion');
  const submitButton = screen.getByText('Make Your reservation');

  expect(dateInput).toHaveAttribute('required');
  expect(timeSelect).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('required');
  expect(occasionSelect).toHaveAttribute('required');
  expect(submitButton).toBeEnabled();
});


test('JavaScript validation functions work for valid input', () => {
  const mockSubmitForm = jest.fn();

  render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={mockSubmitForm} />);

  fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2022-02-14' } });
  fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '5' } });
  fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

  fireEvent.click(screen.getByText('Make Your reservation'));

  expect(mockSubmitForm).toHaveBeenCalled();
});

test('JavaScript validation functions work for invalid input', () => {
  const mockSubmitForm = jest.fn();

  render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={mockSubmitForm} />);

  fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '0' } });
  fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: '' } });

  fireEvent.click(screen.getByText('Make Your reservation'));

  expect(mockSubmitForm).not.toHaveBeenCalled();
});
