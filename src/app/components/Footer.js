"use client";
import React from "react";
import { RxModulzLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiAccountPinBoxFill } from "react-icons/ri";

const Footer = () => {

  const routeLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/in/avinash-dubey-125b66207`;
    window.open(linkedInUrl, "_blank");
  };

  const routeGithub = () => {
    const githubUrl = `https://github.com/avinash-dubey07/Ecom-App.git`;
    window.open(githubUrl, "_blank");
  };

  const routePortfolio = () => {
    const portfolioUrl = ` https://my-portfolio-bab16.web.app`;
    window.open(portfolioUrl, "_blank");
  };

  return (
    <>
      <div className="mt-[150px]">
        <hr />
        <div className="flex mt-[100px] ml-[150px]">
          <div className="items-center cursor-pointer">
            <div className="flex space-x-2">
              <RxModulzLogo className="w-8 h-8" />
              <strong className="text-2xl">MicEco</strong>
            </div>
            <div className="flex space-x-2 mt-5">
              <FaLinkedin className="w-6 h-6 bg-white text-blue-500" />
              <button onClick={routeLinkedIn} className="font-normal text-gray-700">LinkedIn</button>
            </div>
            <div className="flex space-x-2 mt-2">
              <FaGithub className="w-6 h-6" />
              <button onClick={routeGithub} className="font-normal text-gray-700">Github</button>
            </div>
            <div className="flex space-x-2 mt-2">
              <RiAccountPinBoxFill className="w-6 h-6 text-green-600" />
              <button onClick={routePortfolio} className="font-normal text-gray-700">My Portfolio</button>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <strong className="font-medium ml-[200px] ">
                Getting started
              </strong>
              <button className="ml-[200px] mt-7 text-gray-700">Release Notes</button>
              <button className="ml-[200px] mt-2 text-gray-700">Upgrade Guide</button>
              <button className="ml-[200px] mt-2 text-gray-700">Browser Support</button>
            </div>
            <div>
              <strong className="font-medium ml-[200px]">Explore</strong>
              <button className="ml-[200px] mt-7 text-gray-700">Prototyping</button>
              <button className="ml-[200px] mt-2 text-gray-700">Design Systems</button>
              <button className="ml-[200px] mt-2 text-gray-700">Pricing</button>
            </div>
            <div>
              <strong className="font-medium ml-[200px]">Resources</strong>
              <button className="ml-[200px] mt-7 text-gray-700">Developer</button>
              <button className="ml-[200px] mt-2 text-gray-700">Learn Design</button>
              <button className="ml-[200px] mt-2 text-gray-700">Best Practise</button>
            </div>
            <div>
              <strong className="font-medium ml-[200px]">Community</strong>
              <button className="ml-[200px] mt-7 text-gray-700">API Reference</button>
              <button className="ml-[200px] mt-2 text-gray-700">Contributing</button>
              <button className="ml-[200px] mt-2 text-gray-700">Code of Conduct</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
