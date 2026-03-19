import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className="py-4 bg-base-300 flex">
        <div className='flex-1 pl-4'>
          <h1 className="text-2xl font-bold">Full Name</h1>
          <p>Username | Email</p>
        </div>
        <div className='flex-none pr-4'>
          <div className="btn ml-1">Edit Profile</div>
        </div>
      </div>
    </div>
  );
}

export default Profile