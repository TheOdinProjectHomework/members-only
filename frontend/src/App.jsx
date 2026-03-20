import './App.css'
import { Routes, Route, Navigate } from 'react-router';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Posts from './pages/Posts';
import Profile from './pages/Profile';
import { useUser } from './context/UserContext';

function App() {
  const { user } = useUser();

  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/posts" /> : <Login />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/posts"
        element={user ? <Posts /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App
