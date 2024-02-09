import React from "react";
import { Support } from "../data";

export const Supported = () => {
  return (
    <div className="pt-[10rem] text-center text-white px-10 md:max-w-[60%] mx-auto">
      <p className="mb-6">Supported and backed by:</p>
      <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-5 ">
        {Support.map((items, index) => (
          <ul key={index} className=" ">
            <li className="bg-[#D9D9D9] py-5 px-8 text-black text-[32px]">
              {items.title}
            </li>
          </ul>
        ))}
      </div>
      <div className="mt-7">
        <h1 className="text-[32px]">Less code. More product.</h1>
        <p>
          By using our UI Kit, we make sure you only get to
          <span className="text-[#FFFF00]"> focus more </span>
          on
          <br />
          the other things that matter.
        </p>
      </div>
    </div>
  );
};
