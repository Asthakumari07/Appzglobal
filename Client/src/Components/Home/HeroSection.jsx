import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/assets/heroSection.jpg')" }}
    >
      <div className="absolute"></div> {/* Overlay */}
      <div className="relative container mx-auto px-6 lg:px-20 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            DRIVING{" "}
            <span className="text-orange-300">DIGITAL TRANSFORMATION</span> WITH
            <br /> INNOVATIVE{" "}
            <span className="text-orange-300">AGT SOLUTIONS</span>
          </h1>
          <p className="text-lg text-gray-200">
            Transform your business landscape with innovative AGT solutions that
            enhance operational efficiency and foster growth in the digital age.
          </p>

          <ul className="list-disc list-inside text-lg font-medium text-gray-100 space-y-2">
            <li>Certified Expertise</li>
            <li>Agile Process</li>
            <li>Methodologies End-to-end Process Management</li>
          </ul>

          <div className="flex gap-4 pt-4">
            <button className="border border-orange-300 text-orange-300 px-6 py-3 rounded-md font-semibold hover:bg-orange-500 hover:text-white transition">
              Get a quote →
            </button>
            <button className="bg-orange-300 px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
              Schedule a call →
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/3 mt-10 lg:mt-0">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Get in touch
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-orange-300 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-orange-300 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-orange-300 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Project Details
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your project requirements"
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-orange-300 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-300 hover:bg-orange-600 text-white py-3 rounded-md font-semibold transition"
              >
                Get Your Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
