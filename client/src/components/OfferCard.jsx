import React from "react";

function OfferCard({ offer, role, adminDelete }) {
  function handleDelete(e) {
    e.preventDefault();
    adminDelete(offer);
  }
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
          {role === "admin" ? (
            <>
              <button
                onClick={handleDelete}
                className="mt-10 font-semibold text-[16px] py-2 px-5 bg-red-500/40 rounded-xl cursor-pointer"
              >
                Delete
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
