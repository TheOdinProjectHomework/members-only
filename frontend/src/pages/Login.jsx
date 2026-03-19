const Login = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="text-center py-4 bg-base-300">
        <h1 className="text-2xl font-bold">Members-Only</h1>
        <p>Sign in to your account</p>
      </div>

      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mx-auto">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </div>
  );
}

export default Login