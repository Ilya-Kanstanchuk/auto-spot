import React from "react";

function SmallOfferCardAdmin({ offer, adminAccept, adminDecline }) {
  async function acceptHandler(e) {
    e.preventDefault();
    await adminAccept(offer);
  }
  async function declineHandler(e) {
    e.preventDefault();
    await adminDecline(offer);
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
            <div>
              {offer.approved ? (
                <>
                  <p>
                    Status:{" "}
                    <span className="py-1 px-2 bg-green-300/50 rounded-3xl">
                      approved
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Status:{" "}
                    <span className="py-1 px-2 bg-red-300/50 rounded-3xl">
                      waiting for approvement
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="ml-40 mt-1">
          <button onClick={acceptHandler} className="cursor-pointer mr-6">
            <img className="w-8 h-8" src="/accept.png" alt="" />
          </button>
          <button onClick={declineHandler} className="cursor-pointer">
            <img className="w-8 h-8" src="/delete.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmallOfferCardAdmin;
