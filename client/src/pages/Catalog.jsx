import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Catalog() {
  const navigate = useNavigate();
  return (
    <div>
      <Header buttonStatus={"Catalog"} />
      <button
        onClick={() => navigate("/create")}
        className="text-white text-xl font-bold py-3 px-11 bg-addbtn rounded cursor-pointer"
      >
        Add your offer
      </button>
    </div>
  );
}

export default Catalog;
