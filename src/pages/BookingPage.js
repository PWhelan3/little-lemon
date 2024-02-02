import Header from "../components/Header";
 import Footer from "../components/Footer";
 import BookingForm from "../components/BookingForm";

 const BookingPage = ({
   bookingData,
   setBookingData,
   availableTimes,
   setAvailableTimes,
   submitForm,
 }) => {
   return (
     <>
       <Header />
       <main>
         <div className="booking-form">
           <BookingForm
             bookingData={bookingData}
             setBookingData={setBookingData}
             availableTimes={availableTimes}
             setAvailableTimes={setAvailableTimes}
             submitForm={submitForm}
           />
         </div>
       </main>
       <Footer />
     </>
   );
 };

 export default BookingPage;