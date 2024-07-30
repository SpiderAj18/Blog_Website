import { TextInput,Button, Label } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";

function Signup() {
  return (
    <>
      <div className="mt-20 max-h-screen ">
        <div className="max-w-[55vw] p-3 mx-auto flex gap-5 sm:flex-col md:flex-row md:justify-center md:items-center">
          {/* right side */}
          <div className=" flex-1">
            <Link to="/" className="text-4xl mb-5 dark:text-white font-bold">
              <span className="px-2 py-1 bg-gradient-to-r text-white from-indigo-500 via-purple-500 to-pink-700 rounded-lg ">
                Spider's
              </span>
              Blog
            </Link>
            <p className="text-sm mt-5">
              This is demo project you can Sign up with your email and password
              or with google
            </p>
          </div>
       
        {/* left side  */}
        <div className="w-[30vw] flex-1">
          <form >
            <div className="mt-4">
                <Label className="text-md" value="Your username"/>
                <TextInput type="text" className="" placeholder="username"/>
            </div>
            <div className="mt-4">
                <Label className="text-md" value="Your email"/>
                <TextInput type="text" className=""  placeholder="user@gmail.com"/>
            </div>
            <div className="mt-4">
                <Label className="text-md" value="Your password"/>
                <TextInput type="text" className="" />
            </div>
            
            {/* <Button>Sign Up</Button> */}
          <Button className="h-10 my-3 w-full" gradientDuoTone="purpleToPink" color="gray">
            Signup
          </Button>
            <Button className="h-10 mb-1 w-full " outline gradientDuoTone="purpleToPink"><AiFillGoogleCircle className="mr-2 text-lg"/> Continue with Google</Button>
          </form>

          <p className="mt-2">have an account? <a className="text-blue-600" href="/signin">Sign In</a></p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
