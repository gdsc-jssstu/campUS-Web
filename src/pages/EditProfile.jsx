import React, { useEffect, useState } from 'react'
import EditProfileImage from "../assets/editprofile.svg";
import EditIcon from "../assets/edit.svg";
import BackIcon from "../assets/BackwardArrow.svg";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import toast, { Toaster } from 'react-hot-toast';

function EditProfile() {

  const navigate = useNavigate();
  const { getUserData, updateUserData } = useAuth();
  const [ userData, setUserData ] = useState(null);
  const [ isNameEditing, setIsNameEditing ] = useState(false);
  const [ isMobileEditing, setIsMobileEditing] = useState(false);

  useEffect(() => {
    getUserData(auth.currentUser.uid)
      .then((data) => {
        if (data) {
          setUserData(data);
        }
      })
  }, [])

  const handleNameChange = (name) => {
    const updatedUser = {...userData};
    updatedUser.name = name;
    setUserData(updatedUser);
  }

  const handleMobileChange = (mobile) => {
    const updatedUser = {...userData};
    updatedUser.mobile = mobile;
    setUserData(updatedUser);
  }

  const handleProfileUpdate = async() => {
    try {
      updateUserData(auth.currentUser.uid, userData)  
        .then(() => {
          toast.success("Updated Successfully!");
          goToProfile();
        })
    } catch(error) {
      toast.error("Profile Updation Unsuccessful");
      console.log('Error in editing profile : ', error);
    }
  }

  const goToProfile = () => {
    navigate("/profile")
  }

  return (
    <div className="min-h-screen flex-column justify-left pt-10 px-10">
      {userData ? (
        <div>
          <div className='flex mb-5'>
            <button className='mr-5'><img onClick={goToProfile} src={BackIcon} alt='Back Icon'></img></button>
            <p className="text-2xl m-0">Edit Profile</p>
          </div>
          <div className='flex items-center'>
            <img src={EditProfileImage} alt='edit-profile-icon'></img>
            <p className='text-2xl mr-12 mb-20 text-light-purple'>{userData?.name}</p>
          </div>
          <div className='flex-column w-full sm:w-full md:w-max'>
            <p className='text-2xl mb-5'>My Details:</p>
            <div className="space-y-4">
              <div className="flex-column sm:flex-column md:flex">
                <div className="w-32 text-light-purple">Name</div>
                <div className='flex'>
                  {isNameEditing ? 
                    <input className="flex-1 w-48 border-2 border-light-purple rounded-xl flex items-center px-3" value={userData?.name} onChange={(e) => {handleNameChange(e.target.value)}} />
                    : <div className="flex-1 w-48 border-2 border-light-purple rounded-xl flex items-center px-3">{userData?.name}</div>}
                  <button onClick={() => {setIsNameEditing(true)}} className='ml-5'><img src={EditIcon} alt="Edit Icon" /></button>
                </div>
              </div>
              <div className="flex-column sm:flex-column md:flex">
                <div className="w-32 text-light-purple">Phone number</div>
                <div className='flex'>
                  { isMobileEditing ? 
                    <input className="flex-1 w-48 border-2 border-light-purple rounded-xl flex items-center px-3" value={userData?.mobile} onChange={(e) => {handleMobileChange(e.target.value)}}/>
                    : <div className="flex-1 w-48 border-2 border-light-purple rounded-xl flex items-center px-3">{userData?.mobile}</div>}
                  <button onClick={() => {setIsMobileEditing(true)}} className='ml-5'><img src={EditIcon} alt="Edit Icon" /></button>
                </div>
              </div>
              <div className="flex justify-center">
                <button onClick={handleProfileUpdate} className="mt-5 bg-lime-green hover:bg-blue-700 text-light-purple font-bold py-2 px-4 rounded w-28">
                  Save
                </button>
              </div>
            </div>
          </div>
          <Toaster
            position="top-center"
          />
        </div>
      ): null}
    </div>
  )
}

export default EditProfile
