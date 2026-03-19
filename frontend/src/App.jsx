import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import Intro from './pages/Intro';
import Login from './pages/Login';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App
