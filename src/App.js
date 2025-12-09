import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import MyBookings from './pages/MyBookings';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/search' element={<Search/>} />
            <Route path='my-bookings' element={<MyBookings/>} />
    </Routes>
   
  );
}

export default App;
