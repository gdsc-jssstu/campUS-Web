import React, { useState } from 'react'
import emailSvg from "../assets/email.svg"
import lockSvg from "../assets/lock.svg"
import write from "../assets/WrittingPen.svg"
import phone from "../assets/phone.svg"
import SmallRightArrow from "../assets/SmallRightArrow.svg"
import backArrow from "../assets/BackwardArrow.svg"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase/firebase'
import toast from 'react-hot-toast';

//Validating for inputs if true then Next button will move the form to step 2 else will show a toast with an error
function validateDetails(name, usn, email, mobile) {
  if (name.trim() === '' || usn.trim() === '') {
    toast.error("Name or USN can't be empty");
    return false; // Show a toast if name or usn is empty
  }
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  if (!emailRegex.test(email)) {
    toast.error("Please enter Valid Email");
    return false; // Show a toast if the email format is incorrect
  }
  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobile)) {
    toast.error("Mobile number must be of 10 digits");
    return false; // Show a toast if the mobile number format is incorrect
  }
  return true;
}

//Validating password and confirm password if true then Signup function will call else will show a toast with an error
function validatePassword(password, confirmPassword) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;

  if (!passwordRegex.test(password)) {
    toast.error("Password error: Length must be 8 with 1 uppercase 1 lowercase and 1 special character");
    return false; // Password doesn't meet the criteria.
  }

  if (password !== confirmPassword) {
    toast.error("Password and Confirm Password do not match");
    return false; // Passwords do not match.
  }

  return true; // Password is valid.
}



const Signup = () => {
  
  const navigate = useNavigate();
  const { signup, addUserToFirestore } = useAuth();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    usn: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext= (e) =>{
      e.preventDefault()
      const {name, usn, email, mobile} = formData;
      if(validateDetails(name, usn, email, mobile)){
        setStep(2);
      }
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    const{email, password, name, usn, mobile, confirmPassword} = formData;
    if(validatePassword(password, confirmPassword)){

      // Call the SignUp function if all validations pass
    try {
      // Step 1: Sign up the user using Firebase Authentication
      await signup(email, password);

      // Step 2: Redirect the user to the desired page (e.g., dashboard) after successful signup
      navigate('/profile');
    
      // Step 3: Add the user to firebase database
      const userData = { name, usn, mobile, email };
      await addUserToFirestore(auth.currentUser.uid, userData);
    
    } catch (error) {
      // Handle any errors that occur during signup
      console.error('Signup Error:', error);
    }
  }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3 text-san-marino'>
        {step === 1 && (
          <Step1 formData={formData} handleChange={handleChange} setStep={setStep} navigate={navigate} />
        )}
        {step === 2 && (
          <Step2 formData={formData} handleChange={handleChange} setStep={setStep} navigate={navigate}/>
        )}
         {step === 2 ? (
          <div id="buttonAndLinks" className='flex flex-col items-center justify-center gap-3 pt-8'>
          <button type='submit' className='w-28 h-10 rounded-full bg-lime-green hover:border-dashed hover:border-2 hover:border-green-300'>Sign Up</button>
          <button className='underline' onClick={() => navigate("/login")}>Already have an account? Login</button>
          </div>
        ) : (
          
          <div id="buttonAndLinks" className='w-4/5 sm:w-1/4 flex flex-col items-center justify-center pl-12 pr-12 pt-6'>
            <div className='grid justify-items-end w-full'>
              <button className='flex flex-row text-base pl-8 pt-2 pb-2 gap-2 w-24 h-10 rounded-full bg-lime-green hover:border-dashed hover:border-2 hover:border-green-300 ' onClick={handleNext}>Next <img src={SmallRightArrow} alt="" className='h-6'/> </button>
             
            </div>
            <div className='grid justify-items-start w-full'>
            <button className='underline' onClick={() => navigate("/login")}>Already have an account? Login</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

      
function Step1({ formData, handleChange, setStep, navigate }) {
  return (
    
    <div id="formWrapper" className='h-9/12 font-playfair-display text-san-marino pt-11'>
    <div id="formContainer" className='h-4/5 flex flex-col items-center justify-center gap-14'>
        <div id="formTitleContainer" className=' text font-extrabold text-2xl'>
            <h3>Sign Up</h3>
        </div>

        <div id="inputContainer" className='h-1/4 w-full flex flex-col items-center justify-center gap-9'>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <img src={write} alt="" />
            </div>
            <input type="text" class=" text-sm text-black rounded-full w-full pl-10 pr-20 p-2 bg-yellow-tick border border-san-marino 
            placeholder-san-marino hover:border-1 hover:border-dotted" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required/>
          </div>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <img src={write} alt="" />
            </div>
            <input type="text"  class="text-sm text-black rounded-full w-full pl-10 pr-20 p-2 bg-yellow-tick border border-san-marino
            placeholder-san-marino hover:border-1 hover:border-dotted" placeholder="USN" name="usn" value={formData.usn} onChange={handleChange} required/>
          </div>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <img src={emailSvg} alt="" />
            </div>
            <input type="email"  class="text-sm text-black rounded-full w-full pl-10 pr-20 p-2 bg-yellow-tick border border-san-marino
            placeholder-san-marino hover:border-1 hover:border-dotted" placeholder="Email ID" name="email" value={formData.email} onChange={handleChange} required/>
          </div>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <img src={phone} alt="" />
            </div>
            <input type="number"  class="text-sm text-black rounded-full w-full pl-10 pr-20 p-2 bg-yellow-tick border border-san-marino
            placeholder-san-marino hover:border-1 hover:border-dotted [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="Phone Number" name="mobile" value={formData.mobile} onChange={handleChange} required/>
          </div>
        </div>
    </div>
  </div>
    
  );
}

function Step2({ formData, handleChange, setStep, navigate }) {
  return (
    <div id="formWrapper" className='h-9/12 font-playfair-display text-san-marino pt-12'>
    <div id="formContainer" className='h-4/5 flex flex-col items-center justify-center gap-16'>
      <div id="formTitleContainer" className='w-11/12 flex flex-row text font-extrabold text-2xl sm:gap-0'>
          <buttons className='pt-1 cursor-pointer' onClick={() => setStep(1)}>    
            <img src={backArrow} alt="" />
          </buttons>
          <div className='w-11/12 grid justify-center'>
            <h3>Sign Up</h3>             
          </div>
      </div>
      <div id="inputContainer" className='h-1/4 w-full flex flex-col items-center justify-center gap-9'>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <img src={lockSvg} alt="" />
          </div>
          <input type="password" class=" text-sm text-black rounded-full w-full pl-10 pr-20 p-2 bg-yellow-tick border border-san-marino 
          placeholder-san-marino hover:border-1 hover:border-dotted" placeholder="Password" name="password" value={formData.password} onChange={handleChange}  required/>
        </div>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <img src={lockSvg} alt="" />
          </div>
          <input type="password"  class="text-sm text-black rounded-full w-full pl-10 pr-20 p-2 bg-yellow-tick border border-san-marino
          placeholder-san-marino hover:border-1 hover:border-dotted" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}  required/>
        </div>
      </div> 
  </div>
</div>

  );
}

export default Signup