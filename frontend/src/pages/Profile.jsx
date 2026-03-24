import React, { useEffect, useState } from 'react'
import { UserContext, useUser } from '../context/UserContext';
import { useNavigate } from 'react-router';
import { useMessage } from '../context/MessageContext';
import PostCard from '../components/PostCard';

const Profile = () => {
  const { user, setUser } = useUser();
  const { getMyMsgs, loading, myData } = useMessage();
  // const [myData, setMyData] = useState([]);
  let navigate = useNavigate();
  // console.log(user);
  const { firstName, lastName, username, email } = user;

  useEffect(() => {
    getMyMsgs(user._id);
  }, []);

  useEffect(() => {
    console.log("myData: ", myData);
  }, [myData]);

  const handleLogout = async () => {
    const res = await fetch(`http://localhost:3001/logout`, {
      credentials: "include",
    });
    const data = await res.json();

    if (data.success) {
      setUser(null);
      navigate("/");
      console.log("loggedout", user);
      console.log(data);
    } else {
      console.log("Logout failed", data);
    }
  }
  
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="py-4 bg-base-300 flex">
        <div className="flex-1 pl-4">
          <h1 className="text-2xl font-bold">
            {firstName} {lastName}
          </h1>
          <p>
            {username} | {email}
          </p>
        </div>
        <div className="flex-none pr-4">
          <div className="btn ml-1">Edit Profile</div>
          <div className="btn ml-1" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
      <div className='m-4'>
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          myData.map((msg) => <PostCard key={msg._id} msg={msg} />)
        )}
      </div>
    </div>
  );
}

export default Profile