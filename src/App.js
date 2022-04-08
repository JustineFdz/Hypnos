import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Booking } from './components/Booking'
import { Chabichou } from "./components/Chabichou";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Contact from './components/Contact';

//import { theme } from './components/theme';
import "./scss/index.scss";


function App() {
  return (
    <div className='app'>
    <>
    {/* <ThemeProvider theme={theme}> */}
      <Navbar />
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='hotel' element={<Home/>} />
        <Route path='reservation' element={<Booking/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='signin' element={<SignIn/>} />
        <Route path='chabichou' element={<Chabichou/>} />
        {/* <Route path='sidebar' element={<DashSidebar/>} />
        <Route path='dashboard' element={<Dashboard/>} /> */}
      </Routes>
      {/* </ThemeProvider> */}
    </>
    </div>
  );
}

export default App;
