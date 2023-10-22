import React, { useState } from 'react'
import emailSvg from "../assets/email.svg"
import lockSvg from "../assets/lock.svg"
import Loading from "../assets/Loading.svg"
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';


const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Logging in...");

  const {login} = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Use 'name' and 'value' here
    setFormData({ ...formData, [name]: value }); // Use 'name' to dynamically update the state
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      setLoading(true); // Set loading state to true
      setLoadingMessage("Logging in...");
      // Step 1: Sign in the user using Firebase Authentication
      await login(email, password)
      .then(() => {
        // Step 2: Redirect the user to the desired page (e.g., dashboard) after successful signup
        navigate('/requests');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-login-credentials':
            toast.error('Invalid login Credentials. Please check the entered email or password.');
            break;

          case 'auth/invalid-email':
            toast.error('Invalid email format. Please enter a valid email address.');
            break;
  
          case 'auth/user-disabled':
            toast.error('Your account has been disabled. Please contact support for assistance.');
            break;
  
          case 'auth/user-not-found':
            toast.error('No user with this email exists. Please sign up or check your email.');
            navigate('/signup');
            break;
  
          case 'auth/wrong-password':
            toast.error('Incorrect password. Please check your password and try again.');
            break;
  
          case 'auth/too-many-requests':
            toast.error('Too many failed sign-in attempts. Please try again later.');
            break;
  
          case 'auth/network-request-failed':
            toast.error('A network error occurred. Please check your internet connection.');
            break;
  
          case 'auth/operation-not-allowed':
            toast.error('Sign-in with email and password is not allowed. Please contact support.');
            break;
  
          default:
            const message=error.message;
            toast.error(message);
            break;
        }
      });
    } catch (error) {
        toast.error(error);
    }finally {
      setLoading(false); // Set loading state to false when login is complete
    }
  };
  

  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <div id="formWrapper" className='h-89vh font-playfair-display text-san-marino pt-12'>
        <div id="formContainer" className='h-4/5 flex flex-col items-center justify-center gap-12'>
            <div id="formTitleContainer" className='  text font-extrabold text-2xl'>           
                <h3>Login</h3>             
            </div>

            <div id="inputContainer" className='h-1/4 w-full flex flex-col items-center justify-center gap-9'>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <img src={emailSvg} alt="" />
                </div>
                <input type="email" class=" text-sm text-black rounded-full w-full pl-10 pr-20 p-2 bg-yellow-tick border border-san-marino 
                placeholder-san-marino hover:border-1 hover:border-dotted" placeholder="Enter Your USN/Email" name="email" value={formData.email} onChange={handleChange} required/>
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <img src={lockSvg} alt="" />
                </div>
                <input type="password"  class="text-sm text-black rounded-full w-full pl-10 pr-20 p-2 bg-yellow-tick border border-san-marino
                placeholder-san-marino hover:border-1 hover:border-dotted" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required/>
              </div>
            </div> 
            {loading ? (
            // Display the loading SVG and message while loading is true
            <div className="text-center">
              <img src={Loading} alt="Loading" />
              <p>{loadingMessage}</p>
            </div>
          ) : (
            <div id="buttonAndLinks" className='flex flex-col items-center justify-center gap-5 '>       
                <button className=' w-24 h-10 rounded-full bg-lime-green hover:border-2 hover:border-dashed hover:border-green-300'>Login</button>
                <button className='underline' onClick={() => navigate("/signup")}>New to CampUS? Sign Up instead</button>
            </div>
        )}
        </div>
      </div>
      </form>
    </>
  )
}

export default Login
