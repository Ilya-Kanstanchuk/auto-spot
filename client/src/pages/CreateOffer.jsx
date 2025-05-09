import React, { useState } from "react";
import Header from "../components/Header";
import { useAuth } from "../context/contextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateOffer() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { user } = useAuth();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const userId = user.id;
  const userEmail = user.email;
  async function handleSubmit(e) {
    e.preventDefault();
    if (!image) return alert("Choose an image");
    const formData = new FormData();
    formData.append("brand", brand);
    formData.append("model", model);
    formData.append("price", price);
    formData.append("year", year);
    formData.append("mileage", mileage);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("userId", userId);
    formData.append("userEmail", userEmail);
    try {
      const responce = await axios.post(`${API_URL}/offer/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(responce.data);
      if (responce.data.success) {
        navigate("/catalog");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Header buttonStatus={"Catalog"} />
      <div className="flex flex-col items-center mt-13">
        <h1 className="text-5xl font-bold">Add new offer</h1>
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
          <div className="mb-2 flex flex-col items-center">
            <label className="ml-2 text-xl" htmlFor="Type">
              Image
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              accept="image/*"
              className="file:px-4 file:py-2 file:bg-blue-500 file:text-white file:rounded"
            />
          </div>
          <button
            type="submit"
            className="text-white px-15 py-5 bg-lazure my-15 rounded font-bold cursor-pointer"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateOffer;
