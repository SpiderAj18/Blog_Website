import { TextInput,Button, Label } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";

function Signin() {
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(null);
  const [success,setSuccess] = useState(null);
  const handleChange = ()=>{};
  const handleSubmit =() =>{};
  return (
    <>
    <div className='min-h-screen mt-32' >
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
            <Button 
              
              gradientDuoTone='purpleToPink'
              outline
            ><AiFillGoogleCircle className="mt-.6 mx-2 text-lg"/>Sign up with google</Button>
           
          </form>

          {error && <p className="text-red-600 mt-2">{error}</p>}
            {success && <p className="text-green-600 mt-2">Signup successful!</p>}

          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/signup' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
         
        </div>
      </div>
    </div>
           
            
    </>
  )
}

export default Signin