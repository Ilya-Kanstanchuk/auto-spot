import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
function MyOffers() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="mt-20 ml-7 flex">
        <div className="flex flex-col">
          <button
            onClick={() => navigate("/profile")}
            className="py-4 px-15 text-2xl font-light rounded cursor-pointer"
          >
            Information
          </button>
          <button
            onClick={() => navigate("/profile/myoffers")}
            className="py-4 px-15 text-2xl font-light bg-lightblue/30 rounded cursor-pointer"
          >
            Offers
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyOffers;
