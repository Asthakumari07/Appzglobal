import React from "react";

const Para = () => {
  return (
    <div className="py-5 px-4 lg:px-10 lg:w-[90%] mx-auto gap-5">
      <h1 className="text-2xl font-bold mb-4">
        Building Trust Across the Globe
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="text-gray-800 text-base lg:text-xl lg:max-w-[50%]">
          <p>
            At Appz Global Tech, our clients are at the heart of everything we
            do. From innovative startups to global enterprises, we’ve had the
            privilege of working with forward-thinking organizations across
            industries and geographies. Our partnerships are built on trust,
            transparency, and results. Whether we’re developing a mobile app,
            modernizing a legacy system, or designing a seamless user experience
            — we approach every project with the same commitment: to deliver
            excellence.
          </p>
        </div>
        <div className="w-full lg:w-[50%]">
          <img
            src="/assets/Frame-1116606747-2.jpg"
            alt="Clients trust visual"
            className="w-full h-auto object-contain rounded-none shadow-none border-none cursor-default rounded-tl-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Para;
