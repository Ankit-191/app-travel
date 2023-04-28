import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from './components/Hero';
import Travelsheet from './components/Travelsheet';
import Ourfeatures from './components/Ourfeatures';
import Letsfly from './components/Letsfly';
import FlightTickets from './components/FlightTickets';
import Besttravelars from './components/Besttravelars';
import Feedbacktravelars from './components/Feedbacktravelars';
import Memories from './components/Memories';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <>
      
      <Hero/>
      <Travelsheet/>
      <Ourfeatures/>
      <Letsfly/>
      <FlightTickets/>
      <Besttravelars/>
      <Feedbacktravelars/>
      <Memories/>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;
