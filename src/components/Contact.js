import React from "react";
import { ChangeTitle } from "./Home.js";
import {
  AiFillMail,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import "./Contact.css";
import Tooltip from "@material-ui/core/Tooltip";

function Contact() {
  ChangeTitle();

  return (
    <div className="font-sans antialiased bg-white">
      <div className="projects">
        <div className="flex flex-col justify-center items-center pt-36 pb-24 lg:px-16 px-6">
          <p className="contact-header md:text-3xl text-2xl mb-4 font-medium">
            Contact Me
          </p>
          <div className="contact-links flex flex-row text-center">
            <Tooltip title="Email">
              <div className="contact-item email my-2 mx-2 text-3xl">
                <a href="mailto:muhammadrafishidiq@upi.edu" target="__blank">
                  <AiFillMail />
                </a>
              </div>
            </Tooltip>

            <Tooltip title="GitHub">
              <div className="contact-item github my-2 mx-2 text-3xl">
                <a href="https://github.com/slvally" target="__blank">
                  <AiFillGithub />
                </a>
              </div>
            </Tooltip>

            <Tooltip title="Linkedin">
              <div className="contact-item linkedin my-2 mx-2 text-3xl">
                <a href="https://www.linkedin.com/in/muhammad-rafi-shidiq-b67122272/" target="__blank">
                  <AiFillLinkedin />
                </a>
              </div>
            </Tooltip>


            
            <Tooltip title="Twitter">
              <div className="contact-item twitter my-2 mx-2 text-3xl " disabled>
              <div className="opacity-50 pointer-events-none cursor-not-allowed">
                <a href="https://twitter.com/arpanneup" target="__blank">
                  <AiFillTwitterCircle />
                </a>
                </div>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
