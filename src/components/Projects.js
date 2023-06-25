import React, { useState } from "react";
import "./Projects.css";
import { ChangeTitle } from "./Home.js";
import Bloggy from "./images/bloggy.png";
import Chattr from "./images/chattr.png";
import Cer0 from "./images/c0.png";
import Cer1 from "./images/c1.png";
import Cer2 from "./images/c2.png";
import Cer3 from "./images/c3.png";
import Cer4 from "./images/c4.png";
import Cer5 from "./images/c5.png";
import Cer6 from "./images/c6.png";
import Cer7 from "./images/c7.png";
import Cer8 from "./images/c8.png";
import Cer9 from "./images/c9.png";
import {
  BloggyModal,
  ChattrModal,
} from "./Modal";

function Projects() {
  ChangeTitle();

  // Bloggy hooks
  const [showBloggy, setShowBloggy] = useState(false);
  const closeBloggy = () => setShowBloggy(false);
  const [showChattr, setShowChattr] = useState(false);
  const closeChattr = () => setShowChattr(false);

  return (
    <div className="font-sans antialiased bg-white">
      {showBloggy ||
        showChattr ? (
        <div
          onClick={() =>
            setShowBloggy(false) ||
            setShowChattr(false)
          }
          className="backdrop"
        ></div>
      ) : null}
      <div className="">
        {/* <div className="flex flex-col justify-center items-center pt-36 pb-24 lg:px-16 px-6"> */}
          {/* <p className="projects-header md:text-3xl text-2xl mb-4 font-medium">
            Projects
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1"> */}
            {/* <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowBloggy(true)}
            >
              <p className="text-xl text-center font-light mb-2">Bloggy</p>
              <img src={Bloggy} alt="Bloggy" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
              <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Criteria</p>
                </div>
              </div>
            </div>
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
              onClick={() => setShowChattr(true)}
            >
              <p className="text-xl text-center font-light mb-2">Chattr</p>
              <img src={Chattr} alt="Chattr" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
                <div className="tool p-1 rounded-lg m-0.5">
                  <p className="font-light text-center">Criteria</p>
                </div>
              </div>
            </div> */}
          {/* </div> */}
          
        {/* </div> */}


        <div className="flex flex-col justify-center items-center pt-36 pb-24 lg:px-16 px-6">
          <p className="projects-header md:text-3xl text-2xl mb-4 font-medium">
            Certificate
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1">

          <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
            >
              <p className="text-xl text-center font-light mb-2">Google IT Support - Google Certified</p>
              <img src={Cer0} alt="Bloggy" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
              </div>
            </div>

            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
            >
              <p className="text-xl text-center font-light mb-2">System Administration and Infrastructure</p>
              <img src={Cer1} alt="Bloggy" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
              </div>
            </div>

            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
            >
              <p className="text-xl text-center font-light mb-2">Operation Systems and You: Becoming a Power User</p>
              <img src={Cer2} alt="Chattr" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
              </div>
            </div>

            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
            >
              <p className="text-xl text-center font-light mb-2">The Bits and Bytes Computer Networking</p>
              <img src={Cer3} alt="Chattr" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
              </div>
            </div>

            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
            >
              <p className="text-xl text-center font-light mb-2">IT Security: Defense against the digital dark arts</p>
              <img src={Cer4} alt="Chattr" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
              </div>
            </div>

            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
            >
              <p className="text-xl text-center font-light mb-2">Technical Support Fundamentals</p>
              <img src={Cer5} alt="Chattr" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
              </div>
            </div>
            
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
            >
              <p className="text-xl text-center font-light mb-2">Belajar Dasar Pemrograman Web</p>
              <img src={Cer8} alt="Chattr" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
              </div>
            </div>


            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
            >
              <p className="text-xl text-center font-light mb-2">Belajar Dasar Pemrograman Javascript</p>
              <img src={Cer9} alt="Chattr" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
              </div>
            </div>
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
            >
              <p className="text-xl text-center font-light mb-2">Belajar Membuat Aplikasi Backend untuk Pemula</p>
              <img src={Cer6} alt="Chattr" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
              </div>
            </div>
            <div
              className="project md:py-7 md:px-6 py-5 px-4 flex flex-col items-center mx-3 my-3"
            >
              <p className="text-xl text-center font-light mb-2">Menjadi Cloud Engineer</p>
              <img src={Cer7} alt="Chattr" />
              <div className="tools flex flex-wrap justify-evenly items-center mt-1.5">
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <BloggyModal showModal={showBloggy} closeModal={closeBloggy} />
      <ChattrModal showModal={showChattr} closeModal={closeChattr} />
    </div>
  );
}

export default Projects;
