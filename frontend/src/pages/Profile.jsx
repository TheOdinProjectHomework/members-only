import React, { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router';
import { useMessage } from '../context/MessageContext';
import { editUsername } from '../api/editProfile';
import toast from "react-hot-toast";
import PostCard from '../components/PostCard';
import NewMsgForm from '../components/NewMsgForm';
import EditProfileModal from '../components/EditProfileModal';
import { logout } from '../api/auth.api';
import { solvePuzzle } from '../api/memberStatus.api';

const Profile = () => {
  const { user, setUser } = useUser();
  // console.log(user);
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
      toast.error("All fields required!");
      return;
    }

    try {
      const newMsg = { title, text, author: user._id };

      const data = await postMessage(newMsg);
      if (data?.success) {
        navigate("/posts");
        setTitle("");
        setText("");
        toast.success("New Message created!");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getMyMsgs(user._id);
  }, []);

  const handleLogout = async () => {
    const res = await logout();
    if (res?.success) {
      setUser(null);
      navigate("/");
    } else {
      console.log("Logout failed");
    }
  }

    const [newUsername, setNewUsername] = useState("");

    const handleEdit = async (e) => {
        e.preventDefault();
        const req = await editUsername(newUsername, user._id);
        if(req?.success) {
          setNewUsername("");
          toast.success("Username updated!");
          navigate("/posts");
        } else {
          toast.error("Error updating Username");
        }
    }

    const [secret, setSecret] = useState("");

    const handleStatusChange = async (e) => {
      e.preventDefault();
      const req = await solvePuzzle(user._id, secret);
      if(req?.success) {
        setSecret("");
        // console.log(req.message);
        toast.success(req.message);
        navigate("/profile");
      }
    }
  
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="py-4 bg-base-300 flex justify-between">
        <div className="flex-1 pl-4">
          <h1 className="text-2xl font-bold">
            {firstName} {lastName}
          </h1>
          <p>
            {username} | {email}
          </p>
        </div>
        <div className="flex flex-wrap justify-end gap-0.5 pr-4">
          <div
            className="btn ml-1"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Create Message
          </div>
          <div
            className="btn ml-1"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Edit Profile
          </div>
          <div className="btn btn-warning ml-1" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
      <div className="m-4 flex gap-2 flex-wrap justify-center ">
        {loading ? (
          <span className="loading loading-bars loading-xl"></span>
        ) : (
          myData.map((msg) => <PostCard key={msg._id} msg={msg} />)
        )}
      </div>

      {/* Modal */}
      <NewMsgForm
        handlePost={handlePost}
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
      />

      <EditProfileModal handleEdit={handleEdit} username={newUsername} setUsername={setNewUsername} handleStatusChange={handleStatusChange} secret={secret} setSecret={setSecret} status={user.memberStatus} />
    </div>
  );
}

export default Profile