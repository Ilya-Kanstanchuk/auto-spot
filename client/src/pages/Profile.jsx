import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/contextProvider";
function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  async function handleLogout() {
    await logout();
    navigate("/");
  }
  return (
    <div>
      <Header />
      <div className="mt-20 ml-7 flex gap-60">
        <div className="flex flex-col">
          <button
            onClick={() => navigate("/profile")}
            className="py-4 px-15 text-2xl font-light bg-lightblue/30 rounded cursor-pointer"
          >
            Information
          </button>
          <button
            onClick={() => navigate("/profile/myoffers")}
            className="py-4 px-15 text-2xl font-light rounded cursor-pointer"
          >
            Offers
          </button>
        </div>
        <div>
          <div className="w-full px-10 py-15 bg-white rounded-lg shadow-md">
            <h2 className="text-5xl font-bold mb-6 text-center">
              Profile Information
            </h2>

            <div className="flex flex-col mb-10">
              <div className="mb-4">
                <label className="block text-xl font-medium text-gray-700 mb-1">
                  Name
                </label>
                <div className="w-60 text-xl text-center px-4 py-3 bg-gray-100 rounded-md text-gray-800">
                  {user.name}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xl font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="w-60 text-xl text-center px-4 py-3 bg-gray-100 rounded-md text-gray-800">
                  {user.email}
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="cursor-pointer py-3 px-10 text-xl font-bold text-white bg-red-600/60 w-60 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
