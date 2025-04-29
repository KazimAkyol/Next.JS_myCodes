"use client";

import React from "react";

const CardContainer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
      <div className="w-44 h-44 rounded-md border-2 border-transparent group-hover:border-white overflow-hidden">
        <div>
          <img src="./images/default-red.png" alt="profile" />
        </div>
        <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white ">
          {currentUser?.displayName}
        </div>
        <div>
          <img src="./images/default-blue.png" alt="profile" />
        </div>
        <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white ">
          Guest-1
        </div>
        <div>
          <img src="./images/default-green.png" alt="profile" />
        </div>
        <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white ">
          Guest-2
        </div>
        <div>
          <img src="./images/default-slate.png" alt="profile" />
        </div>
        <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white ">
          Guest-3
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
