import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/contextProvider";
function Header({ buttonStatus }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <div className="bg-mainblue flex items-center justify-between text-white relative ">
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
      <div className="flex absolute left-1/2 transform -translate-x-1/2">
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
      {user ? (
        <>
          {user.role === "user" ? (
            <>
              <Link to={"/profile"}>
                <div className="pr-10 py-7 flex items-center">
                  <img
                    className="w-[40px] h-[38px]"
                    src="/profile.png"
                    alt=""
                  />
                  <p className="font-bold text-xl">Your Profile</p>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/adminpanel"}>
                <div className="pr-10 py-7 flex items-center">
                  <img
                    className="w-[40px] h-[38px]"
                    src="/profile.png"
                    alt=""
                  />
                  <p className="font-bold text-xl">Admin Panel</p>
                </div>
              </Link>
            </>
          )}
        </>
      ) : (
        <>
          <Link to={"/login"}>
            <div className="pr-10 py-7 flex items-center">
              <p className=" text-xl">Login</p>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}

export default Header;
