import React from "react";

function SmallOfferCard({ offer, userDelete }) {
  function modificationHandler(e) {
    e.preventDefault();
  }
  async function deleteHandler(e) {
    e.preventDefault();
    await userDelete(offer);
  }
  return (
    <div>
      <div className="grid grid-cols-[2fr_1fr] mt-3 shadow p-4 rounded">
        <div className="flex">
          <div>
            <img className="w-40 h-25 " src={offer.imageURL} alt="" />
          </div>
          <div className="flex flex-col ml-3">
            <p className="text-xl font-semibold tracking-wide">
              {offer.brand} {offer.model}
            </p>
            <p className="font-semibold">{offer.price} $</p>
          </div>
        </div>
        <div className="ml-40 mt-1">
          <button onClick={modificationHandler} className="cursor-pointer mr-6">
            <img className="w-8 h-8" src="/create.png" alt="" />
          </button>
          <button onClick={deleteHandler} className="cursor-pointer">
            <img className="w-8 h-8" src="/delete.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmallOfferCard;
