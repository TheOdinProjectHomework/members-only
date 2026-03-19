import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Posts from './pages/Posts';
import Profile from './pages/Profile';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default App
