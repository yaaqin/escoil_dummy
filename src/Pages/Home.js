import React from "react";
import { useState } from "react";
import Navbar from "./Component/General/Navbar";

export default function Home() {

  return (
    <>

     <Navbar/>
      <section
        id="body"
        className="grid grid-cols-3 gap-[50px] px-[20px] pt-[100px] pb-[30px]"
      >
        <section id="body1" className="flex gap-[20px] flex-col rounded-[20px]">
          <div className="flex gap-[20px] items-center hover:bg-[grey] p-[10px] rounded-[40px]">
            <img src="./assets/svg-icon/home.svg" className="w-[50px]"></img>
            <p className="text-[30px] font-bold">Home</p>
          </div>
          <div className="flex gap-[20px] items-center hover:bg-[grey] p-[10px] rounded-[40px]">
            <img src="./assets/svg-icon/plus.svg" className="w-[50px]"></img>
            <p className="text-[30px] font-bold">Plus</p>
          </div>
          <div className="flex gap-[20px] items-center hover:bg-[grey] p-[10px] rounded-[40px]">
            <img src="./assets/svg-icon/message.svg" className="w-[50px]"></img>
            <p className="text-[30px] font-bold">Message</p>
          </div>
          <div className="flex gap-[20px] items-center hover:bg-[grey] p-[10px] rounded-[40px]">
            <img
              src="./assets/svg-icon/bookmark.svg"
              className="w-[50px]"
            ></img>
            <p className="text-[30px] font-bold">Save</p>
          </div>
          <div className="flex gap-[20px] items-center hover:bg-[grey] p-[10px] rounded-[40px]">
            <img src="./assets/svg-icon/bell.svg" className="w-[50px]"></img>
            <p className="text-[30px] font-bold">Notification</p>
          </div>
          <div className="flex gap-[20px] items-center hover:bg-[grey] p-[10px] rounded-[40px]">
            <img src="./assets/svg-icon/setting.svg" className="w-[50px]"></img>
            <p className="text-[30px] font-bold">Setting</p>
          </div>
        </section>
        <section
          id="body2"
          className="border-[3px] border-[black] px-[10px] py-[15px] rounded-[20px] h-[82vh]"
        >
          <div className="flex gap-[20px]">
            <div className="w-[50px] h-[50px] rounded-full bg-[black]"></div>
            <input
              placeholder="Search"
              className="border-[2px] w-[80%]  px-[15px] rounded-full border-[black]"
            ></input>
          </div>
          <div className="grid grid-cols-4 gap-[20px] mt-[10px]">
            <div className="col-span-1 border-[2px] py-[3px]">
              <h3 className="text-center border-[black] border-[2px] rounded-full">
                Jurusan
              </h3>
            </div>
            <div className="col-span-1 border-[2px] py-[3px]">
              <h3 className="text-center border-[black] border-[2px] rounded-full">
                Jurusan
              </h3>
            </div>
            <div className="col-span-1 border-[2px] py-[3px]">
              <h3 className="text-center border-[black] border-[2px] rounded-full">
                Jurusan
              </h3>
            </div>
            <div className="col-span-1 border-[2px] py-[3px]">
              <h3 className="text-center border-[black] border-[2px] rounded-full">
                Jurusan
              </h3>
            </div>
          </div>
        </section>
        <section id="body3" className="flex flex-col gap-[20px]">
          <div className="border-[black] border-[2px] p-[20px] rounded-[40px] h-[30%]">
            <h1>Ur Profile</h1>
          </div>
          <div className="border-[black] border-[2px] p-[20px] rounded-[40px] h-[30%]">
            <h1>Rekomendation to follow</h1>
          </div>
        </section>
      </section>
    </>
  );
}
