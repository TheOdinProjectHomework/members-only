import { useUser } from "../context/UserContext";

  const PostCard = ({ msg }) => {
    const {title, text, author} = msg;
    const { firstName, lastName } = author;
    const { user } = useUser();
    const memberStatus = user.memberStatus;

    const formatDate = (isoString) => {
      const date = new Date(isoString);
      return date.toISOString().split("T")[0];
    }

    let date;

    if(!memberStatus) {
      date = formatDate(msg.createdAt);
    }


    return (
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{text}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              {memberStatus ? `${firstName} ${lastName}` : `${date}`}
            </div>
          </div>
        </div>
      </div>
    );
}

export default PostCard