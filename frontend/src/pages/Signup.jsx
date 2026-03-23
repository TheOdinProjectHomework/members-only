import { useState } from "react";
import useSignUp from "../hooks/useSignUp";
import { useNavigate } from "react-router";


const Signup = () => {
  let navigate = useNavigate();
  const { signUp } = useSignUp();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmP, setConfirmP] = useState("");

  const checkFields = () => {
    return (
      firstName?.trim() && lastName?.trim() && userName.trim() && email?.trim() && password?.trim() && confirmP?.trim()
    );
  }

  const matchingPassword = () => {
    return password === confirmP;
  }

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmP("");
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    if(!checkFields()) {
      console.log("All fields required!");
      return;
    }; 

    if(!matchingPassword()) {
      console.log("Password does not match!");
      return;
    }

    const newUser = {
      firstName, lastName, userName, email, password
    };

    console.log(newUser);
    try {
      const data = await signUp(newUser);

      if(data?.success) {
        clearFields();
        navigate("/");
        console.log("signup");
      } else {
        console.log("Sign up failed", data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="text-center py-4 bg-base-300">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p>Join thousands of users and start your journey today.</p>
      </div>

      <form onSubmit={handleSignUp}>
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mx-auto">
          <legend className="fieldset-legend">Sign Up</legend>

          <label className="label">First Name</label>
          <input
            type="text"
            className="input"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className="label">Last Name</label>
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className="label">Username</label>
          <input
            type="text"
            className="input"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="label">Confirm Password</label>
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
            value={confirmP}
            onChange={(e) => setConfirmP(e.target.value)}
          />

          <button className="btn btn-neutral mt-4">Create Account</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup