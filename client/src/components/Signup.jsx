import { TextInput, Button, Label, Alert } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import OAuth from "./OAuth";

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(false) 
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim()});
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!formData.username ||!formData.email||!formData.password){
        return setError("all fields are required")
      }
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Server response:", data);
      setSuccess(true);
      setError(null);
    } catch (error) {
      console.error("Error during signup", error);
      setError(error.message);
      setSuccess(false);
    }
  };

  return (
    <>
     <div className='min-h-screen mt-20 ' >
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Spider's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
              
            <OAuth/>
          </form>

          {error && <p className="text-red-600 mt-2">{error}</p>}
            {success && <p className="text-green-600 mt-2">Signup successful!</p>}

          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/signin' className='text-blue-500'>
              Sign In
            </Link>
          </div>
         
        </div>
      </div>
    </div>
           
            
    </>
  );
}

export default Signup;
