import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  return (
    <Navbar fluid className="bg-zinc-800 text-white border-b-2">
      <Link to="/" className="logo self-center whitespace-nowrap font-semibold">
        <span className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-700 rounded-md px-2 py-1">
          Spider's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          name="search"
          placeholder="search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-9 lg:hidden " color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2 items-center">
        <Button
          className="w-12 h-9 hidden sm:inline "
          outline
          gradientDuoTone="purpleToBlue"
          pill
        >
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button className=" " outline gradientDuoTone="purpleToBlue" pill>
            Sign in
          </Button>
        </Link>
            <Navbar.Toggle/>
      </div>
        <Navbar.Collapse className=" text-white">
            <Navbar.Link active href="/">Home</Navbar.Link>
            <Navbar.Link active href="/Dashboard">Dashboard</Navbar.Link>
            <Navbar.Link active href="/About">Aboutt</Navbar.Link>
            <Navbar.Link active href="/Projects">Projects</Navbar.Link>
                
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
