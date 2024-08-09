import { Button, TextInput } from "flowbite-react";
import React from "react";
import { AiFillProfile, AiTwotoneMail, AiTwotoneProfile } from "react-icons/ai";
import { CiUser } from 'react-icons/ci'
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

function ProfileSection() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className=" max-w-lg mx-auto p-3 w-full rounded-3xl ">
      <h1 className="my-7 font-semibold text-3xl text-center">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            className="rounded-full w-full h-full border-8 border-gray-200"
            alt="Profile "
          />
        </div>
        <TextInput type="text" icon={FaUser} id='username' defaultValue={currentUser.username}></TextInput>
        <TextInput type="email" icon={AiTwotoneMail} id='username' defaultValue={currentUser.email}></TextInput>
        <TextInput type="password" icon={AiTwotoneProfile} id='username' defaultValue='***********'></TextInput>
        <Button gradientDuoTone="purpleToBlue" type="submit" outline>Update</Button>
      </form>
      <div className="text-red-500  font-semibold flex justify-between mt-5" >
        <div className=" cursor-pointer hover:text-red-600">Delete Account</div>
        <div className=" cursor-pointer hover:text-red-600">Singout</div>
      </div>
          
    </div>
  );
}

export default ProfileSection;
