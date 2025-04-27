import React from "react";

const DesignPara = () => {
  return (
    <div className="py-5 px-4 lg:px-10 lg:w-[90%] mx-auto gap-5">
      <h1 className="text-3xl font-bold mb-4 mb-5">
        Design Methodology for Business Success
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="text-gray-800 text-base lg:text-xl lg:max-w-[50%]">
          <p>
            At Appz Global Tech, we believe design isn’t just about how
            something looks — it’s about how it works, how it solves real
            problems, and how it drives your business forward. Our design
            methodology is rooted in empathy, guided by research, and aligned
            with your business goals. Whether you're building an MVP or scaling
            a product, we combine creativity with strategy to deliver intuitive,
            delightful, and conversion-optimized experiences.
          </p>
        </div>
        <div className="w-full lg:w-[50%]">
          <img
            src="/assets/112233.png"
            alt="Clients trust visual"
            className="w-full h-auto object-contain rounded-none shadow-none border-none cursor-default rounded-tl-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignPara;
