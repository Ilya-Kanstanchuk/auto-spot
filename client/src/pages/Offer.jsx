import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function Offer() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [loadingPage, setLoadingPage] = useState(true);
  const [offer, setOffer] = useState();
  const { id } = useParams();
  async function fetchOfferById() {
    try {
      const response = await axios.get(`${API_URL}/offer/find/${id}`);
      console.log(response);
      if (response.data.success) {
        setOffer(response.data.offer);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingPage(false);
    }
  }
  useEffect(() => {
    fetchOfferById();
  }, []);
  if (loadingPage) return <div>Loading...</div>;
  console.log("Offer state:", offer);
  return (
    <div>
      <Header buttonStatus="Catalog" />
      <div className="my-20 mx-10 grid grid-cols-[1fr_1fr] gap-10">
        <div className="flex flex-col gap-30">
          <div>
            <img className="w-160 h-105 mb-7" src={offer.imageURL} alt="" />
            <p className="my-2 text-3xl font-semibold">Description</p>
            <p className="w-140 text-xl font-light">{offer.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-light">Contacts</h2>
            <p className="font-light">
              <span>Email: </span>
              <span>{offer.userEmail}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-5xl font-semibold tracking-wide">
            {offer.brand} {offer.model}
          </p>
          <p className="text-2xl font-semibold">{offer.price} $</p>
          <p className="text-xl font-light">
            <span>Year: </span>
            <span>{offer.year}</span>
          </p>
          <p className="text-xl font-light">
            <span>Mileage: </span>
            <span>{offer.mileage} km</span>
          </p>
          <p className="text-xl font-light">
            <span>Type: </span>
            <span>{offer.type}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offer;
