import React from "react";

const ParaInfrastructure = () => {
  return (
    <>
      <div className="py-5 px-4 lg:px-20 mx-auto gap-5 bg-lime-100">
        <h1 className="text-3xl font-bold mb-4 mb-5 ">Our Infrastructure</h1>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="text-gray-800 text-base lg:text-xl lg:max-w-[50%]">
            <p className="mb-4">
              Infrastructure is the spine of Appz Global Tech We have had the
              option to accomplish these achievements due to the unrestricted
              trust and time contributed with and by our customers. We are glad
              to say our Squad has a tasty culture code with an expert workplace
              that works with expanded usefulness levels. Appz Global Tech has
              been based on solid grounds after steady sifting, devotion,
              difficult work and cleaning. The organization includes over 100+
              experts, with augmentation abilities to meet the prerequisites of
              enormous scope projects that might require expanded labour.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Defined cost & timeline</li>
              <li>Minimal supervision needed</li>
              <li>Ideal for MVPs, prototypes, and small-scale development</li>
            </ul>
          </div>

          <div className="w-full lg:w-[50%]">
            <img
              src="/assets/our-infrastructure.jpg"
              alt="Clients trust visual"
              className="w-full h-auto object-contain rounded-none shadow-none border-none cursor-default rounded-tl-[100px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParaInfrastructure;
