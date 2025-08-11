import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "react-spring";

const HomeHero = () => {
  const navigate = useNavigate();
  const [btnHover, setBtnHover] = useState(false);

  const { ref: bodyRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(100px)",
    config: { duration: 500 },
  });

  return (
    <div
      ref={bodyRef}
      id="id-home-hero"
      className="flex flex-col-reverse lg:flex-row items-center justify-between bg-no-repeat bg-cover bg-center px-4 sm:px-6 lg:px-20 py-12 gap-10"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      {/* Left Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start max-w-2xl">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight leading-snug mb-4">
          <span id="homepage-heading-gradient">Connecting Users </span>
          with Legal Experts
        </h1>
        <p className="text-sm sm:text-base text-gray-700 mb-6">
          Welcome to LegalUp, your premier destination for seamless legal matchmaking. We understand that finding the right lawyer for your unique case can be a daunting task. That's why we've created a platform designed to simplify the process.
        </p>

        <div
          className="relative cursor-pointer mt-4"
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          onClick={() => navigate("/lawyer")}
        >
          <div
            className={`relative z-20 px-6 py-2 font-semibold flex items-center transition-colors duration-300 ${btnHover ? "text-white" : "text-black"}`}
          >
            Find Your Lawyer
            <svg
              width="29"
              height="17"
              viewBox="0 0 29 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M24.6788 9.57516C..."
                fill={btnHover ? "#ffffff" : "#335e9e"}
              />
            </svg>
          </div>

          <div
            className={`absolute top-0 left-0 h-full transition-all duration-700 rounded-md ${btnHover
              ? "w-full bg-accent px-6 py-2"
              : "w-1/2 border-[#335e9e] border-2 border-r-0 px-6 py-2"
              }`}
          ></div>
        </div>
      </div>

      {/* Right Image Content */}
      <animated.div style={props} className="w-full max-w-md sm:max-w-lg lg:w-1/2">
        <img
          src="/images/consult-1.webp"
          alt="A group of People"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </animated.div>
    </div>
  );
};

export default HomeHero;
