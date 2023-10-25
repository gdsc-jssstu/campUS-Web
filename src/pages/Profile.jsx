import React, { useEffect, useState } from 'react';
import ProfileImage from '../assets/profile.svg';
import EditImage from '../assets/edit.svg';
import { auth } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { getUserData } = useAuth();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUserData(auth.currentUser.uid)
      .then((data) => {
        if (data) {
          setUserData(data);
        }
      })
  }, [])

  const goToMyRequests = () => {
    navigate('/myrequests');
  };

  const goToEditProfile = () => {
    navigate('/edit-profile');
  };

  return (
    <div className="min-h-screen flex justify-left pt-10 pl-12">
      {userData ? (<div className="">
        <div className="text-2xl mb-4">My Profile</div>
        <div className="flex space-x-4 mt-5">
          <div className="w-36 h-36 bg-gray-300 rounded-full"><img src={ProfileImage} alt="Feature" /></div>
          <div className="flex-1">
            <div className="text-2xl mb-2 text-light-purple">{userData.name}</div>
            <button
              className="flex"
              onClick={goToEditProfile}
            >
              <img src={EditImage} alt="Feature" className='mr-2' />
              Edit Profile
            </button>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-2xl mb-2">My Details</div>
          <div className="space-y-4 ml-12 items-center">
            <div className="flex">
              <div className="w-32 ">USN</div>
              <div className="flex-1 w-48 border-2 border-light-purple rounded-xl flex items-center justify-center">{userData.usn}</div>
            </div>
            <div className="flex">
              <div className="w-32 ">Email</div>
              <div className="flex-1 w-48 border-2 border-light-purple rounded-xl flex items-center justify-center">{userData.email}</div>
            </div>
            <div className="flex">
              <div className="w-32 ">Phone number</div>
              <div className="flex-1 w-48 border-2 border-light-purple rounded-xl flex items-center justify-center">{userData.mobile}</div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <button
            className="bg-lime-green hover:bg-blue-700 text-light-purple font-bold py-2 px-4 rounded w-full"
            onClick={goToMyRequests}
          >
            View My Requests
          </button>
        </div>
      </div>) : null}
    </div>
  );
}

export default Profile;
