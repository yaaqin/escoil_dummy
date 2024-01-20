import React from "react";
import Navbar from "./Component/General/Navbar";
import HeadProfile from "./Component/Page_Home/HeadProfile";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [MenuStatus, setMenuStatus] = useState(true);

  const upComingTriger = () => {
    alert('Feature Upcoming')
  }

  const menuTriger = () => {
    if (MenuStatus == true) {
      setMenuStatus(false);
    } else if (MenuStatus == false) {
      setMenuStatus(true);
    }
  };
  return (
    <>
      <Navbar />
      <section
        id="profileBody"
        className="flex gap-[30px] pt-[100px] px-[30px]"
      >
        <img
          onClick={menuTriger}
          src="./assets/svg-icon/menu.svg"
          className={
            MenuStatus ? "w-[50px] h-[50px] hover:scale-[1.1]" : "hidden"
          }
        ></img>
        <div
          className={
            MenuStatus ? "hidden" : "flex flex-col gap-[20px] w-[300px]"
          }
        >
          <div className="flex justify-end">
            <img
              onClick={menuTriger}
              src="./assets/svg-icon/close.svg"
              className="h-[50px] hover:scale-[0.9]"
            ></img>
          </div>
          <button onClick={upComingTriger} className="hover:bg-[grey] hover:text-[white] rounded-full text-[30px]">
            About
          </button>
          <button onClick={upComingTriger} className="hover:bg-[grey] hover:text-[white] rounded-full text-[30px]">
            Guru
          </button>
          <button onClick={upComingTriger} className="hover:bg-[grey] hover:text-[white] rounded-full text-[30px]">
            Siswa
          </button>
          <Link to={"/"}>
            <img
              src="./assets/svg-icon/home.svg"
              className="mx-auto w-full hover:bg-[grey] rounded-full h-[50px] py-[5px]"
            ></img>
          </Link>
        </div>
        <HeadProfile />
        {/* <div className="border-[2px] w-full border-[black] h-[100vh]"></div> */}
        <div
          className={
            MenuStatus
              ? "border-[2px] border-[black] w-[350px] rounded-[30px] p-[20px]"
              : "hidden"
          }
        >
          <h1>other information</h1>
        </div>
      </section>
    </>
  );
}
