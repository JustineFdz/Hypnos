import { Routes, Route} from 'react-router-dom';
import "./scss/index.scss";
// import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Booking } from './components/Booking'
import { Chabichou } from "./components/Chabichou";
import Contact from './components/Contact';
// import Test from './components/Test';
// import CreatePost from './components/CreatePost';
// import Post from './components/Post';
import Login from './components/Login';
import Registration from './components/Registration';
import Hotels from './components/Hotels';
import Users from './components/Users';
import { Admin } from './components/Admin';
import Establishements from './components/Establishements';
import Hotel from './components/Hotel';
// import RoomsDashboard from './components/RoomsDashboard';

function App() {
  return (
    <>
    <div className='app'>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/hotel/:id' element={<Hotel/>} />
        <Route path='/hotels' element={<Hotels/>} />
        <Route path='reservation' element={<Booking/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='chabichou' element={<Chabichou/>} />
        {/* <Route path='test' element={<Test/>} /> */}
        {/* <Route path='createpost' element={<CreatePost/>} /> */}
        {/* <Route path='/post/:id' element={<Post/>} /> */}
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/owners' element={<Admin/>} />
        <Route path='/establishments' element={<Establishements/>} />
        <Route path='/messages' element={<Admin/>} />
        <Route path='/dashboard' element={<Admin/>} />
        {/* <Route path='/roomsDashboard' element={<RoomsDashboard/>} /> */}
        <Route path='/hotels' element={<Hotels/>} />

      </Routes>
    </div>
    </>
  );
}

export default App;
