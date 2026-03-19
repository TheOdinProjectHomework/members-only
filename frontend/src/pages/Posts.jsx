import React from 'react'
import PostCard from '../components/PostCard';

const Posts = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="text-left py-4 pl-6 bg-base-300">
        <h1 className="text-2xl font-bold">Latest Posts</h1>
        <p>Stay updated with the latest insights from our community.</p>
      </div>
      <div className='m-4'>
        {/* CARDS */}
        <PostCard />
      </div>
    </div>
  );
}

export default Posts