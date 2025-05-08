import React from "react";

function OfferCard({ offer }) {
  return (
    <div>
      <div className="grid grid-cols-[2fr_1fr] mt-3 shadow p-4 rounded">
        <div className="flex">
          <div>
            <img className="w-60 h-40 " src={offer.imageURL} alt="" />
          </div>
          <div className="flex flex-col ml-3">
            <p className="text-3xl font-light tracking-wide">
              {offer.brand} {offer.model}
            </p>
            <p className="font-light">
              {offer.year} - {offer.mileage} km
            </p>
          </div>
        </div>
        <div className="ml-45 mt-1">
          <p className="text-2xl font-semibold">{offer.price} $</p>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
