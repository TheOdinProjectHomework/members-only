import './App.css'
import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from 'react-router';
import NavBar from './components/NavBar';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Posts from './pages/Posts';
import Profile from './pages/Profile';
import { useUser } from './context/UserContext';

function App() {
  const { user } = useUser();

  return (
    <>
      <NavBar user={user} />
      <Toaster toastOptions={{
        style: {
          background: '#333', color: '#fff'
        }
      }}/>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/posts" /> : <Intro />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/posts" /> : <Login />}
        />
        <Route path="/signup" element={user ? <Posts /> : <Signup />} />
        <Route
          path="/posts"
          element={user ? <Posts /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App
