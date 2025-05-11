import React, { useState } from "react";
function Filters({
  setBrand,
  setType,
  setMinPrice,
  setMaxPrice,
  setMinYear,
  setMaxYear,
}) {
  const [brandInput, setBrandInput] = useState("");
  const [typeInput, setTypeInput] = useState("");
  const [minPriceInput, setMinPriceInput] = useState("0");
  const [maxPriceInput, setMaxPriceInput] = useState("1000000");
  const [minYearInput, setMinYearInput] = useState("1980");
  const [maxYearInput, setMaxYearInput] = useState("2025");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Apply filters only on submit
    setBrand(brandInput);
    setType(typeInput);
    setMinPrice(minPriceInput);
    setMaxPrice(maxPriceInput);
    setMinYear(minYearInput);
    setMaxYear(maxYearInput);
  };
  const carBrands = [
    "Toyota",
    "Volkswagen",
    "Ford",
    "Honda",
    "Chevrolet",
    "BMW",
    "Mustang",
    "Opel",
    "Mercedes-Benz",
    "Hyundai",
    "Nissan",
    "Kia",
    "Citroen",
    "Audi",
    "Lexus",
    "Mazda",
    "Subaru",
    "Mitsubishi",
    "Jeep",
    "Tesla",
    "Volvo",
    "Porsche",
    "Peugeot",
    "Renault",
  ];
  const carTypes = [
    "Sedan",
    "Hatchback",
    "SUV",
    "Coupe",
    "Convertible",
    "Wagon",
    "Pickup Truck",
    "Van",
    "Minivan",
    "Crossover",
    "Sport Car",
    "Luxury Car",
    "Electric",
    "Hybrid",
    "Diesel",
    "Compact",
    "Subcompact",
    "Roadster",
    "Off-road",
    "Limousine",
  ];
  return (
    <div className="bg-lightgray flex flex-col items-center py-4 px-8 rounded-xl">
      <h1 className="text-3xl font-light">Filters</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col items-center"
      >
        <select
          onChange={(e) => setBrandInput(e.target.value)}
          value={brandInput}
          className="w-full border py-3 px-7 rounded text-center text-xl font-extralight bg-white mb-4"
        >
          <option value="">--choose a brand--</option>
          {carBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setTypeInput(e.target.value)}
          value={typeInput}
          className="w-full border py-3 px-7 rounded text-center text-xl font-extralight bg-white mb-4"
        >
          <option value="">--choose a type--</option>
          {carTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <label className="text-xl font-light">Price</label>
        <div className="flex gap-2 mb-4">
          <input
            onChange={(e) => setMinPriceInput(e.target.value)}
            value={minPriceInput}
            type="text"
            className="border h-8 w-22 rounded text-center font-extralight bg-white"
          />
          -
          <input
            onChange={(e) => setMaxPriceInput(e.target.value)}
            value={maxPriceInput}
            type="text"
            className="border h-8 w-22 rounded text-center font-extralight bg-white"
          />
        </div>

        <label className="text-xl font-light">Year</label>
        <div className="flex gap-2 mb-4">
          <input
            onChange={(e) => setMinYearInput(e.target.value)}
            value={minYearInput}
            type="text"
            className="border h-8 w-22 rounded text-center font-extralight bg-white"
          />
          -
          <input
            onChange={(e) => setMaxYearInput(e.target.value)}
            value={maxYearInput}
            type="text"
            className="border h-8 w-22 rounded text-center font-extralight bg-white"
          />
        </div>

        <button
          type="submit"
          className="text-xl font-bold py-2 px-14 text-white bg-lazure rounded-xl cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Filters;
