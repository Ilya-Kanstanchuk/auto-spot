import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import OfferCard from "../components/OfferCard";
import Filters from "../components/Filters";
import { useAuth } from "../context/contextProvider";
function Catalog() {
  const { user } = useAuth();
  const API_URL = import.meta.env.VITE_API_URL;
  const [allOffers, setAllOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("1000000");
  const [minYear, setMinYear] = useState("1980");
  const [maxYear, setMaxYear] = useState("2025");
  const navigate = useNavigate();
  async function adminDelete(offer) {
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
        fetchOffers();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchOffers() {
    try {
      const response = await axios.get(`${API_URL}/offer/`);
      console.log(response.data);
      if (response.data.success) {
        setAllOffers(response.data.offers);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchOffers();
  }, []);
  useEffect(() => {
    setFilteredOffers(
      allOffers.filter(
        (offer) =>
          offer.brand.toLowerCase().includes(brand.toLowerCase()) &&
          offer.type.toLowerCase().includes(type.toLowerCase()) &&
          Number(offer.year) >= Number(minYear) &&
          Number(offer.year) <= Number(maxYear) &&
          Number(offer.price) >= Number(minPrice) &&
          Number(offer.price) <= Number(maxPrice)
      )
    );
    console.log(filteredOffers);
  }, [allOffers, brand, type, minPrice, maxPrice, minYear, maxYear]);
  return (
    <div>
      <Header buttonStatus={"Catalog"} />
      <div className="flex m-10">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-5">
            {filteredOffers.length} offers were found
          </h1>
          <div className="grid grid-cols-[3fr_1fr] gap-20">
            <div>
              {filteredOffers.map((offer) => (
                <Link to={`/offer/${offer._id}`} className="cursor-pointer">
                  <OfferCard
                    offer={offer}
                    role={user ? user.role : ""}
                    adminDelete={adminDelete}
                  />
                </Link>
              ))}
            </div>
            <div className="mt-3 flex items-center flex-col">
              <Filters
                setBrand={setBrand}
                setType={setType}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                setMinYear={setMinYear}
                setMaxYear={setMaxYear}
              />
              <button
                onClick={() => navigate("/create")}
                className="text-white mt-7 text-xl font-bold py-3 px-11 bg-addbtn rounded cursor-pointer"
              >
                Add your offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
