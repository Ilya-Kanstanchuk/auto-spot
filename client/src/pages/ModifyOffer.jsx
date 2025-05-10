import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ModifyOffer() {
  const [loading, setLoading] = useState(true);
  const [currentOffer, setCurrentOffer] = useState(null);
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [image, setImage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.put(`${API_URL}/offer/update/${id}`, {
        brand,
        model,
        price,
        year,
        mileage,
        type,
        description,
      });
      console.log(response.data);
      if (response.data.success) {
        navigate("/profile/myoffers");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchingData() {
    try {
      const response = await axios.get(`${API_URL}/offer/find/${id}`);
      console.log(response);
      if (response.data.success) {
        const offer = response.data.offer;
        setCurrentOffer(offer);
        setBrand(offer.brand);
        setModel(offer.model);
        setPrice(offer.price);
        setYear(offer.year);
        setMileage(offer.mileage);
        setType(offer.type);
        setDescription(offer.description);
        setImage(offer.imageURL);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function updateImage() {
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
      const response = await axios.put(
        `${API_URL}/offer/update/image/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response);
      if (response.data.success) {
        fetchingData();
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchingData();
  }, []);
  useEffect(() => {
    if (imageFile) {
      updateImage();
    }
  }, [imageFile]);
  if (loading) return <div>Loading secure session...</div>;
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-13">
        <h1 className="text-5xl font-bold">Modify an offer</h1>
        <div className="mt-10 flex gap-5">
          <img className="w-60 h-40" src={image} alt="" />
          <div className="flex flex-col gap-3">
            <label className="ml-2 text-xl" htmlFor="Type">
              Choose new image
            </label>
            <input
              onChange={(e) => setImageFile(e.target.files[0])}
              type="file"
              accept="image/*"
              className="file:px-4 file:py-2 file:bg-blue-500 file:text-white file:rounded"
            />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-15 flex flex-col items-center"
          action=""
        >
          <div className="mb-2 flex flex-col items-center">
            <label className="ml-2 text-xl" htmlFor="brand">
              Brand
            </label>
            <input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-[400px] px-4 py-3 bg-lightgray rounded"
              type="text"
              required
            />
          </div>
          <div className="mb-2 flex flex-col items-center">
            <label className="ml-2 text-xl" htmlFor="model">
              Model
            </label>
            <input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-[400px] px-4 py-3 bg-lightgray rounded"
              type="text"
              required
            />
          </div>
          <div className="mb-2 flex flex-col items-center">
            <label className="ml-2 text-xl" htmlFor="price">
              Price($)
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-[400px] px-4 py-3 bg-lightgray rounded"
              type="text"
              required
            />
          </div>
          <div className="mb-2 flex flex-col items-center">
            <label className="ml-2 text-xl" htmlFor="year">
              Year
            </label>
            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-[400px] px-4 py-3 bg-lightgray rounded"
              type="text"
              required
            />
          </div>
          <div className="mb-2 flex flex-col items-center">
            <label className="ml-2 text-xl" htmlFor="mileage">
              Mileage(km)
            </label>
            <input
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              className="w-[400px] px-4 py-3 bg-lightgray rounded"
              type="text"
              required
            />
          </div>
          <div className="mb-2 flex flex-col items-center">
            <label className="ml-2 text-xl" htmlFor="Type">
              Type
            </label>
            <input
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-[400px] px-4 py-3 bg-lightgray rounded"
              type="text"
              required
            />
          </div>
          <div className="mb-2 flex flex-col items-center">
            <label className="ml-2 text-xl" htmlFor="description">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-lightgray w-[400px] py-2 px-8 rounded text-xl focus:outline-none"
              name=""
              id="message"
              rows={6}
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white px-15 py-5 bg-lazure my-15 rounded font-bold cursor-pointer"
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModifyOffer;
