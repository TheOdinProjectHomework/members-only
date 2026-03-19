const Signup = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="text-center py-4 bg-base-300">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p>Join thousands of users and start your journey today.</p>
      </div>

      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mx-auto">
        <legend className="fieldset-legend">Sign Up</legend>

        <label className="label">First Name</label>
        <input type="text" className="input" placeholder="First Name" />

        <label className="label">Last Name</label>
        <input type="text" className="input" placeholder="Last Name" />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <label className="label">Confirm Password</label>
        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
        />

        <button className="btn btn-neutral mt-4">Create Account</button>
      </fieldset>
    </div>
  );
}

export default Signup