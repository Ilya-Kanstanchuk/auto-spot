import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ buttonStatus }) {
  const navigate = useNavigate();
  return (
    <div className="bg-mainblue flex items-center justify-between text-white">
      <Link to={"/"}>
        <div className="flex items-center pl-5 py-7">
          <h1 className="text-5xl font-bold leading-none">AutoSpot</h1>
          <img
            className="w-[60px] h-[60px] translate-y-[2px]"
            src="/car.png"
            alt="Car"
          />
        </div>
      </Link>
      <div className="flex">
        <button
          onClick={() => navigate("/")}
          className={`text-xl font-semibold px-8 py-3 rounded cursor-pointer ${
            buttonStatus === "About" ? "bg-btnheader" : ""
          }`}
        >
          About
        </button>
        <button
          onClick={() => navigate("/catalog")}
          className={`text-xl font-semibold px-8 py-3 rounded cursor-pointer ${
            buttonStatus === "Catalog" ? "bg-btnheader" : ""
          }`}
        >
          Catalog
        </button>
      </div>
      <Link to={"/profile"}>
        <div className="pr-10 py-7 flex items-center">
          <img className="w-[40px] h-[38px]" src="/profile.png" alt="" />
          <p className="font-bold text-xl">Your Profile</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
