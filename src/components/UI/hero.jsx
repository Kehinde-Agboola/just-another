import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
export const Hero = () => {
  return (
    <div className="pt-[10rem] px-10 md:px-0 text-white flex justify-end items-center flex-col">
      <div className="md:text-[40px] text-[30px]  md:max-w-[50%] text-center">
        <h1>
          It doesn’t matter what
          <span className="text-[#FFFF00]"> JS Framework</span> you work with.
        </h1>
      </div>
      <p className="pb-3">
        Our boilerplates works with it
        <span className="text-[#91D2F7]"> out-of-the-box</span>.
      </p>
      <div className="flex  justify-center gap-[4rem]">
        <button className="flex items-center  gap-2 bg-[#FFFF00]  px-10  py-2 rounded-md">
          Get started
          <span className="inline-block items-center bg-[#FFFF00] ">
            <MdArrowRightAlt />
          </span>
        </button>
        <button className="flex items-center gap-2 border-solid border-2 px-10  py-2 rounded-md text-[#FFFF00] border-[#FFFF00] ">
          See repo
          <span className="inline-block">
            <FaGithub color="yellow" />
          </span>
        </button>
      </div>
    </div>
  );
};
