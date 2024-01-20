import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const profileNavigate = () => {
      navigate("/profile");
    };
  return (
    <>
       <section
        id="navbar"
        className="shadow-lg bg-[white] shadow-slate-700 py-[20px] px-[] px-[10px] fixed w-full flex items-center justify-between"
      >
        <h1 className="font-bold text-[30px]">ESCOIL</h1>

        <img
          onClick={profileNavigate}
          src="./assets/svg-icon/profile.svg"
          className="w-[40px]"
        ></img>

        {/* <div className='bg-[black] rounded-full h-[30px] w-[30px]'></div> */}
      </section>
    </>
  )
}
