import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SmallOfferCardAdmin from "../components/SmallOfferCardAdmin";
function AdminPanelOffers() {
  const navigate = useNavigate();
  const [offersToApprove, setOffersToApprove] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  async function adminDecline(offer) {
    const id = offer._id;
    try {
      const response = await axios.delete(
        `${API_URL}/admin/delete/offer/${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(response);
      if (response.data.success) {
        fetchOffersToApprove();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function adminAccept(offer) {
    const id = offer._id;
    try {
      const response = await axios.put(
        `${API_URL}/admin/accept/offer/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(response);
      if (response.data.success) {
        fetchOffersToApprove();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchOffersToApprove() {
    try {
      const responce = await axios.get(`${API_URL}/admin/offers`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(responce);
      if (responce.data.success) {
        setOffersToApprove(responce.data.offers);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchOffersToApprove();
  }, []);
  return (
    <div>
      <Header />
      <div className="mt-20 ml-7 flex gap-80">
        <div className="flex flex-col">
          <button
            onClick={() => navigate("/adminpanel")}
            className="py-4 px-15 text-2xl font-light rounded cursor-pointer"
          >
            Users
          </button>
          <button
            onClick={() => navigate("/adminpanel/offers")}
            className="py-4 px-15 text-2xl font-light bg-lightblue/30 rounded cursor-pointer"
          >
            Offers
          </button>
        </div>
        <div>
          <h2 className="text-5xl font-bold mb-6 text-center">
            Waiting for approvement
          </h2>
          <div>
            {offersToApprove.map((offer) => (
              <Link to={`/offer/${offer._id}`} className="cursor-pointer">
                <SmallOfferCardAdmin
                  offer={offer}
                  adminAccept={adminAccept}
                  adminDecline={adminDecline}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanelOffers;
