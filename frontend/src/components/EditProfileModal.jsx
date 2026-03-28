const EditProfileModal = ({ handleEdit, username, setUsername }) => {
    // const [username, setUsername] = useState("");
    // let userId = 1234;

    // const handleEdit = (e) => {
    //     e.preventDefault();
    //     editUsername(username, userId);
    // }

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
          <form>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 mx-auto">
              <legend>Become a member</legend>

              <label className="label">Secret Word:</label>
              <input
                type="text"
                className="input"
                placeholder="Do you know it?"
              />

              <button className="btn btn-neutral mt-4">Send</button>
            </fieldset>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default EditProfileModal