import { Routes, Route} from 'react-router-dom';
import "./scss/index.scss";
import { Home } from './components/Home';
import { Booking } from './components/Booking'
import { RoomBooking } from './components/RoomBooking';
import Contact from './components/Contact';
import Login from './components/Login';
import Registration from './components/Registration';
import Hotels from './components/Hotels';
import Users from './components/Users';
import { Admin } from './components/Admin';
import Establishements from './components/Establishements';
import Hotel from './components/Hotel';
import Room from './components/Room';
import Footer from './components/Footer';
// import RoomsDashboard from './components/RoomsDashboard';

function App() {
  return (
    <>
    <div className='app'>  
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/hotel/:id' element={<Hotel/>} />
        <Route path='/room/hotel/:hotelId/room/:roomId' element={<Room/>} />
        <Route path='/hotels' element={<Hotels/>} />
        <Route path='reservation' element={<Booking/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/owners' element={<Admin/>} />
        <Route path='/establishments' element={<Establishements/>} />
        <Route path='/dashboard' element={<Admin/>} />
        <Route path='/book-room/:id' element={<RoomBooking/>} />
        {/* <Route path='/roomsDashboard' element={<RoomsDashboard/>} /> */}

      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
