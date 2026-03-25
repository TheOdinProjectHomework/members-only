import React, { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router';
import { useMessage } from '../context/MessageContext';
import PostCard from '../components/PostCard';

const Profile = () => {
  const { user, setUser } = useUser();
  const { getMyMsgs, loading, myData, postMessage } = useMessage();
  let navigate = useNavigate();
  const { firstName, lastName, username, email } = user;
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const checkFields = () => {
    return (title?.trim() && text?.trim());
  };

  const handlePost = async (e) => {
    e.preventDefault();

    if(!checkFields()) {
      console.log("All fields required!");
      return;
    }

    try {
      const newMsg = { title, text, author: user._id };

      const data = await postMessage(newMsg);
      if (data?.success) {
        navigate("/posts");
        setTitle("");
        setText("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMyMsgs(user._id);
  }, []);

  // useEffect(() => {
  //   console.log("myData: ", myData);
  // }, [myData]);

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
          <div
            className="btn ml-1"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Create Message
          </div>
          <div className="btn ml-1">Edit Profile</div>
          <div className="btn btn-warning ml-1" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
      <div className="m-4 flex gap-2 flex-wrap justify-center">
        {loading ? (
          <span className="loading loading-bars loading-xl"></span>
        ) : (
          myData.map((msg) => <PostCard key={msg._id} msg={msg} />)
        )}
      </div>
      

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          {/* <h3 className="font-bold text-lg">New Message!</h3> */}
          <form onSubmit={handlePost}>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mx-auto">
              <legend className="fieldset-legend">Message</legend>

              <label className="label">Title</label>
              <input
                type="text"
                className="input"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label className="label">Content</label>
              <input
                type="text"
                className="input"
                placeholder="Content"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <button className="btn btn-neutral mt-4">Create</button>
            </fieldset>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

    </div>
  );
}

export default Profile