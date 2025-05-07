import React from "react";
import Header from "../components/Header";
function About() {
  return (
    <div>
      <Header buttonStatus={"About"} />
      <div className="mt-10">
        <h1 className="text-6xl font-bold text-center">About Us</h1>
        <p className=" text-2xl  px-50 py-8 ">
          At AutoSpot, you're just one click away from your dream ride! Whether
          you're buying your first car or upgrading to something new, we make
          the entire process smooth, secure, and stress-free. Our mission is to
          simplify the way people buy and sell cars, offering a trusted platform
          where every listing is verified and every user can move forward with
          confidence. We bring buyers and sellers together through an intuitive
          interface, transparent vehicle information, and helpful tools that
          make decision-making easier. With AutoSpot, you don’t need to be an
          expert to find the right vehicle — we’ve built a platform that does
          the heavy lifting for you. From everyday commuters to luxury vehicles,
          our growing catalog has something for everyone. We also offer helpful
          resources, such as buying guides and tips for selling your car, to
          support you at every step of the journey. Looking for your next car?
          Explore our listings today and see why AutoSpot is the smart, simple,
          and secure choice for car lovers everywhere.
        </p>
      </div>
    </div>
  );
}

export default About;
