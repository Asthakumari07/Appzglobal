import React from "react";

const ModelPara = () => {
  return (
    <>
      <div
        className="auto flex flex-col justify-center items-center p-20 bg-cover bg-center"
        style={{ backgroundImage: `url("/assets/back-image.png")` }}
      >
        <h1 className="text-3xl mb-5 lg:max-w-[60%] text-center font-bold">
          Flexible, Transparent & Scalable Engagement – Built Around You
        </h1>

        <p className="text-center lg:max-w-[90%] text-xl">
          At Appz Global Tech, we understand that every project is unique.
          That’s why we offer a range of business engagement models tailored to
          fit your specific goals, budget, and timeline. Whether you're a
          startup looking for a fast MVP rollout or an enterprise with a
          long-term vision, our engagement models provide the flexibility and
          transparency you need for success.
        </p>
      </div>
    </>
  );
};

export default ModelPara;
