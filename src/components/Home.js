import React, { useState, useEffect } from "react";
import homeImg from "./images/home-image.gif";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { useLocation } from "react-router-dom";

export function ChangeTitle() {
  const location = useLocation();

  if (location.hash === "#about") {
    document.title = "Slvally - About";
  } else if (location.pathname === "/projects") {
    document.title = "Slvally - Projects";
  } else if (location.pathname === "/contact") {
    document.title = "Slvally - Contact";
  } else {
    document.title = "Slvally Shidiqs";
  }
}

function Home() {
  ChangeTitle();
  const [age, setAge] = useState(0)
  const [copyright, setCopyright] = useState('')

  useEffect(() => {
    const miliseconds = new Date() - new Date('10/28/2002')
    setAge(Math.floor(miliseconds / 1000 / 60 / 60 / 24 / 365))

    const year = new Date().getFullYear()
    setCopyright(year)
  }, [])

  // Strings for typewriter effect
  const strings = [
    "software development.",
    "music.",
    "anime.",
    "game.",
  ];

  return (
    <div className="font-sans antialiased relative bg-white">
      <section id="home">
        <div className="flex lg:flex-row flex-col justify-evenly items-center lg:px-32 px-8 pt-40">
          <div className="intro-header lg:text-left text-center">
            <p className="lg:text-3xl md:text-2xl text-xl font-medium">
              Hi! I am
            </p>
            <p className="lg:text-4xl md:text-3xl text-2xl font-bold tracking-wide">
              Muhammad Rafi Shidiq
            </p>
            <p className="lg:text-xl md:text-lg text-base mt-2 font-light">
              I'm a programmer with a passion for{" "}
              <Typewriter
                options={{ strings: strings, autoStart: true, loop: true }}
              />
            </p>
          </div>
          <div className="gif">
            <img src={homeImg} alt="programmer-gif" width="500" />
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex md:flex-row flex-col justify-between lg:px-16 px-6 pt-36 md:pb-24 sm:pb-28 pb-36">
          <div className="p-4 md:w-1/2 w-1/1 md:mx-4 md:mb-0 mb-6">
            <p className="about-header md:text-3xl text-2xl mb-4 font-medium">
              About Me
            </p>
            <p className="about-info md:text-lg text-base tracking-wider leading-relaxed">
            My name is Rafi. I'm a {age}-year-old introverted Computer Science student at the University of Education Indonesia. I also studied at Bangkit Academy 2023 led by Google, GoTo, and Traveloka
            </p>
            <br></br>
            <p className="about-info md:text-lg text-base tracking-wider leading-relaxed">
            I have a deep passion for technology and I always enjoy keeping up with the latest advancements. 
            When I'm not coding, you can find me indulging in my love for video games, anime, and writing. I am also interested in exploring the worlds of Art and Design, and Philosophy.
            </p>
            <br></br>
            <p className="about-info md:text-lg text-base tracking-wider leading-relaxed">
              I'm always looking forward to learning new technologies and improving
              my work in any way possible. If you want to contact me regarding any of my products, any ideas, or just want to chat,
              you're welcome to email me at{" "}
              <a href="mailto:muhammadrafishidiq@upi.edu" target="__blank">
              muhammadrafishidiq@upi.edu
              </a>
              .
            </p>
          </div>
          <div className="p-4 md:w-1/2 w-1/1 md:mx-4">
            <p className="about-header md:text-3xl text-2xl mb-4 font-medium">
              Skills
            </p>
            <div className="lang-and-fw flex flex-col flex-wrap">
              {/* LANGUAGES */}
              <div className="languages mb-4">
                <p className="text-xl mb-2">Languages</p>
                {/* PROFICIENT ROW */}
                <div className="proficient-row flex flex-wrap mb-1">
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">JavaScript</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Flutter Dart</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">PHP</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Java</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Python</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">C/C++</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">HTML/CSS</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">R</p>
                  </div>
                </div>

                {/* INTERMEDIATE ROW */}
                <div className="intermediate-row flex flex-wrap mb-1">

                </div>
              </div>

              {/* FRAMEWORKS/LIBRARIES */}
              <div className="frameworks mb-4">
                <p className="text-xl mb-2">Frameworks/Libraries</p>
                {/* PROFICIENT ROW */}
                <div className="proficient-row flex flex-wrap mb-1">
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">React</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Flask</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Node</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Tailwind</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Laravel</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Code Igniter</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Bootsrap</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">MUI</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Express</p>
                  </div>
                </div>

                {/* INTERMEDIATE ROW */}
                <div className="intermediate-row flex flex-wrap mb-1">
                  
                </div>

                {/* BEGINNER ROW */}
                <div className="beginner-row flex flex-wrap">
                </div>
              </div>

              {/* Tools */}
              <div className="tools mb-4">
                <p className="text-xl mb-2">Tools</p>
                {/* PROFICIENT ROW */}
                <div className="proficient-row flex flex-wrap mb-1">
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Visual Studio Code</p>
                  </div>
                  <div className="p-1 proficient rounded-lg rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Github</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Canva</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">MongoDB</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Figma</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">MySQL</p>
                  </div>
                  <div className="p-1 proficient rounded-lg m-1 flex items-center h-8">
                    <p className="text-base">Firebase</p>
                  </div>
                </div>

                {/* INTERMEDIATE ROW */}
                <div className="intermediate-row flex flex-wrap mb-1">
                  
                </div>

                {/* BEGINNER ROW */}
                <div className="beginner-row flex flex-wrap">

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ending-msg font-light text-center absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center">
        <p>Created with by Slvally with React and Tailwind.</p>
        {/* <p>© {copyright} M Rafi S. All rights reserved.</p> */}
      </div>
    </div>
  );
}

export default Home;
