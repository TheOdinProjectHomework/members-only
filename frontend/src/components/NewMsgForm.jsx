const newMsgForm = ({ handlePost, title, text, setTitle, setText }) => {
    return (
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
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
    );
};

export default newMsgForm;