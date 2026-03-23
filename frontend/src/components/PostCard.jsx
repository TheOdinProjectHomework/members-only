const PostCard = ({ msg }) => {
  const {title, text} = msg;

  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {text}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Author Name</div>
        </div>
      </div>
    </div>
  );
}

export default PostCard