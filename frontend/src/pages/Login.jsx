import { useState } from "react";
import { useNavigate, Link } from "react-router";
import useLogin from "../hooks/login";
import { useUser } from "../context/UserContext";
import toast from "react-hot-toast";

const Login = () => {
  const { setUser } = useUser();
  const { login } = useLogin();
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const handleLogIn = async (e) => {
        e.preventDefault();

        try {
            const data = await login(username, password);
            
            if(data?.success) {
              setUser(data.user);
              navigate("/posts");
              setUsername("");
              setPassword("");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="text-center py-4 bg-base-300">
        <h1 className="text-2xl font-bold">Members-Only</h1>
        <p>Sign in to your account</p>
      </div>
    
    <form onSubmit={handleLogIn}>
      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mx-auto">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Username</label>
        <input type="text" className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mx-auto flex justify-between items-center">
        <p>Don't have an account?</p>
        <Link to="/signup">
          <p className="btn">Create account</p>
        </Link>
      </fieldset>
    </form>
    </div>
  );
}

export default Login