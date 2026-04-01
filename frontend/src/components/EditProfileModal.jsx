import whoPokemon from '../assets/who_pokemon.0.jpg';

const EditProfileModal = ({ handleEdit, username, setUsername,  handleStatusChange, secret, setSecret, status }) => {
  console.log(status);
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div>
          <form onSubmit={handleEdit}>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mx-auto">
              <legend>Edit Your Info</legend>

              <label className="label">Username:</label>
              <input type="text" className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

              <button className="btn btn-neutral mt-4">Update profile</button>
            </fieldset>
          </form>
        </div>
        <div>
          <form onSubmit={handleStatusChange}>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mx-auto">
              <legend>Become a member</legend>

              <label className="label">Secret Word:</label>
              <img src={whoPokemon} alt='who is this pokemon picture' className='rounded-2xl' />
              <input
                type="text"
                className="input"
                placeholder="Do you know it?"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
              />
              {
                status ? 
                  <button className="btn btn-neutral mt-4" disabled>You are a member already</button> :
                  <button className="btn btn-neutral mt-4">Send</button>
              }
            </fieldset>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default EditProfileModal