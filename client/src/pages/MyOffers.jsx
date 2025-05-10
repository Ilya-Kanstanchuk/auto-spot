import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import OfferCard from "../components/OfferCard";
import SmallOfferCard from "../components/SmallOfferCard";
function MyOffers() {
  const navigate = useNavigate();
  const [myOffers, setMyOffers] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  async function userDelete(offer) {
    const id = offer._id;
    try {
      const response = await axios.delete(`${API_URL}/offer/delete/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(response);
      if (response.data.success) {
        fetchMyOffers();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchMyOffers() {
    try {
      const responce = await axios.get(`${API_URL}/offer/my`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(responce);
      if (responce.data.success) {
        setMyOffers(responce.data.offers);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMyOffers();
  }, []);
  return (
    <div>
      <Header />
      <div className="mt-20 ml-7 flex gap-80">
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
        <div>
          <h2 className="text-5xl font-bold mb-6 text-center">Your Offers</h2>
          <div>
            {myOffers.map((offer) => (
              <Link to={`/offer/${offer._id}`} className="cursor-pointer">
                <SmallOfferCard offer={offer} userDelete={userDelete} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOffers;
