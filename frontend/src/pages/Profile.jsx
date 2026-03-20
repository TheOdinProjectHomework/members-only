import React from 'react'
import { UserContext, useUser } from '../context/UserContext';
import { useNavigate } from 'react-router';

const Profile = () => {
  const { user, setUser } = useUser();
  let navigate = useNavigate();
  // console.log(user);
  const { firstName, lastName, username, email } = user;

  const handleLogout = async () => {
    const res = await fetch(`http://localhost:3001/logout`, {
      credentials: "include",
    });
    const data = await res.json();

    if (data.success) {
      setUser(null);
      navigate("/login");
      console.log("loggedout", user);
      console.log(data);
    } else {
      console.log("Logout failed", data);
    }
  }
  
  return (
    <div>
      <div className="py-4 bg-base-300 flex">
        <div className='flex-1 pl-4'>
          <h1 className="text-2xl font-bold">{firstName} {lastName}</h1>
          <p>{username} | {email}</p>
        </div>
        <div className='flex-none pr-4'>
          <div className="btn ml-1">Edit Profile</div>
          <div className='btn ml-1' onClick={handleLogout}>Logout</div>
        </div>

      </div>
    </div>
  );
}

export default Profile