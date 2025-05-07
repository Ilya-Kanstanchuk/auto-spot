import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const responce = await axios.post(`${API_URL}/auth/registration`, {
        name,
        email,
        password,
      });
      console.log(responce.data);
      if (responce.data.success) {
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen bg-loginbg flex justify-center items-center">
      <div className="bg-white rounded py-8 px-8">
        <h2 className="block text-center text-3xl font-semibold mb-8">
          Sign up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="ml-2" htmlFor="username">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-lightgray rounded"
              type="text"
              required
            />
          </div>
          <div className="mb-2">
            <label className="ml-2" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-lightgray rounded"
              type="email"
              required
            />
          </div>
          <div className="mb-2">
            <label className="ml-2" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-lightgray rounded"
              type="password"
              required
            />
          </div>
          {errorMessage && (
            <div className="text-red-600 text-[17px] text-center">
              {errorMessage}
            </div>
          )}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="mt-6 mb-6 py-3 px-20 text-white font-bold text-[15px] bg-mainblue rounded cursor-pointer"
            >
              Continue
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Already have an account?</p>
            <Link to="/login" className="text-blue-600 font-bold">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
