import React from "react";

const StaffPara = () => {
  return (
    <div className="py-5 px-4 lg:px-10 lg:w-[90%] mx-auto gap-5">
      <h1 className="text-2xl lg:text-4xl font-bold mb-10 flex justify-center">
        IT Staff <span className="text-orange-500 mx-2">Augmentation</span>
        Services
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="text-gray-800 text-base lg:text-xl lg:max-w-[50%]">
          <p>
            Are you looking for a software developer with specific skills to
            fill a talent gap? Our IT staff company can help you strike the
            perfect balance between project progress and cost efficiency. Easily
            build and destroy your team based on current development needs. We
            help you avoid costly and lengthy recruitment processes and
            paperwork when recruiting locally. Appz Global Tech is a leading IT
            staffing agency based in Noida, India with multiple on-demand
            staffing solutions. Our clients get the right staff support without
            overpaying for the recruitment stage. Remote developers join the
            internal development process, help your staff develop desktop,
            mobile, or web products, and give you the support and assistance you
            need now.
          </p>
        </div>
        <div className="w-full lg:w-[50%]">
          <img
            src="/assets/ITStaffAugmentationServices.jpg"
            alt="Clients trust visual"
            className="w-full h-auto object-contain rounded-none shadow-none border-none cursor-default rounded-tl-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default StaffPara;
