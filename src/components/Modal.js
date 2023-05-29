import React from "react";
import "./Modal.css";

export function BloggyModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">Bloggy</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
            Bloggy is a blog-posting platform created using{" "}
            <a href="https://python.org" target="__blank">
              Python
            </a>{" "}
            &{" "}
            <a
              href=""
              target="__blank"
            >
              Flask
            </a>{" "}
            for the backend and HTML/CSS for the frontend along with{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="__blank"
            >
              JavaScript
            </a>
            . It also uses{" "}
            <a href="https://www.postgresql.org/" target="__blank">
              PostgreSQL
            </a>{" "}
            to store data. It also has its own API for users to display their
            data on other apps.
            <br></br>
            <br></br>
            Users can login/register, make posts, update posts, delete posts,
            comment, like posts, search for users, follow users, and message
            users using{" "}
            <a href="https://socket.io" target="__blank">
              Socket.io
            </a>
            ! Check out the git repository{" "}
            <a
              href=""
              target="__blank"
            >
              here
            </a>{" "}
            and the app{" "}
            <a href="https://bloggyweb.herokuapp.com" target="__blank">
              here
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}

export function ChattrModal({ showModal, closeModal }) {
  return (
    <div
      className="modal bg-white lg:w-1/3 md:w-3/5 w-5/6 p-4 m-8 rounded-lg fixed top-1/4"
      style={{
        visibility: showModal ? "visible" : "hidden",
        opacity: showModal ? 1 : 0,
      }}
    >
      <div className="modal-info flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <h4 className="text-left text-lg font-medium">Chattr</h4>
          <p onClick={closeModal} className="cursor-pointer">
            &times;
          </p>
        </div>
        <div className="project-info">
          <p className="font-light text-sm tracking-wide">
            Chattr is a team communication platform. It was created using{" "}
            <a href="https://python.org" target="__blank">
              Python
            </a>{" "}
            &{" "}
            <a
              href="https://flask.palletsprojects.com/en/2.0.x/"
              target="__blank"
            >
              Flask
            </a>{" "}
            for the backend and{" "}
            <a href="https://getuikit.com" target="__blank">
              UIkit
            </a>{" "}
            for the frontend. It also uses{" "}
            <a href="https://www.postgresql.org" target="__blank">
              PostgreSQL
            </a>{" "}
            to store data.
            <br></br>
            <br></br>
            Users can login/register, create teams, invite others, and
            communicate with each other! Check out the git repository{" "}
            <a href="https://github.com/arpanneupane19/Chattr" target="__blank">
              here
            </a>{" "}
            and the app{" "}
            <a href="https://chattrweb.herokuapp.com" target="__blank">
              here
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}
