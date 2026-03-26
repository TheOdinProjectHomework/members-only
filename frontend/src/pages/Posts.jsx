import PostCard from '../components/PostCard';
import { useMessage } from '../context/MessageContext';
import { useEffect } from 'react';

const Posts = () => {
  const { getAllMsgs, msgs, loading } = useMessage();

  useEffect(() => {
    getAllMsgs();
  }, []);

  // console.log(msgs);

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="text-left py-4 pl-6 bg-base-300">
        <h1 className="text-2xl font-bold">Latest Posts</h1>
        <p>Stay updated with the latest insights from our community.</p>
      </div>
      <div className="m-4 flex flex-col items-center gap-2">
        {loading ? (
          <span className="loading loading-bars loading-xl"></span>
        ) : (
          msgs.map((msg) => <PostCard key={msg._id} msg={msg} />)
        )}
      </div>
    </div>
  );
}

export default Posts