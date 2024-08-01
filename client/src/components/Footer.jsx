import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "flowbite-react";

function FooterCom() {
  return (
    <Footer
      container
      className="bg-zinc-800 border-t-8 border-teal-500 text-white w-full"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1 gap-80">
          <div className="mt-5 ">
            <Link to="/" className="font-bold dark:text-white text-xl">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Spider's
              </span>
              Blog
            </Link>
          </div>
        <div className="w-full grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
          <Footer.Title title="Follow me" />
          <Footer.LinkGroup col>
            <Footer.Link
              href="https://github.com/SpiderAj18"
              target="_blank"
              rel="noopener noreferrer"
              >
              Github
            </Footer.Link>
            <Footer.Link href="https://x.com/Guptaji__ajay">
              X/Twitter
            </Footer.Link>
            <Footer.Link href="https://www.instagram.com/ajay_gupta18/">
              Instagram
            </Footer.Link>
          </Footer.LinkGroup>
          </div>
          <div>
          <Footer.Title title="Follow me" />
          <Footer.LinkGroup col>
            <Footer.Link
              href="https://github.com/SpiderAj18"
              target="_blank"
              rel="noopener noreferrer"
              >
              Github
            </Footer.Link>
            <Footer.Link href="https://x.com/Guptaji__ajay">
              X/Twitter
            </Footer.Link>
            <Footer.Link href="https://www.instagram.com/ajay_gupta18/">
              Instagram
            </Footer.Link>
          </Footer.LinkGroup>
          </div>
        </div>
      </div>
          <Footer.Divider />
      </div>
    </Footer>
  );
}

export default FooterCom;
