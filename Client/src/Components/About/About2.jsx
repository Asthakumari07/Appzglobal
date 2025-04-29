import React from "react";

const About2 = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-10">
      <div className="flex flex-col md:flex-row items-center md:space-x-8 w-full bg-gray-100 p-6 rounded-lg shadow-md">
        <img
          src="/assets/Frame-1116606747.jpg"
          alt="Appz In Brief"
          className="w-[60%] md:w-[30%] rounded-lg shadow-md"
        />

        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Appz Global Tech – In Brief
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Appz Global Tech Pvt. Ltd. is a fast-emerging IT solutions company
              based in Noida, India. We empower businesses with innovative
              mobile and web applications, advanced AI solutions, digital
              transformation strategies, and full-spectrum IT services. Our goal
              is to bridge the gap between ideas and execution through reliable,
              future-ready technology.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  📍 Headquartered In
                </h3>
                <p className="text-gray-500">Sector 63, Noida, India</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  🛠️ Core Services
                </h3>
                <p className="text-gray-500">
                  App & Web Development, ERP/CRM, AI/ML, IoT, Blockchain, Cloud,
                  Digital Marketing
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  💼 Industries Served
                </h3>
                <p className="text-gray-500">
                  FinTech, EdTech, Healthcare, E-Commerce, Food & Delivery,
                  On-Demand Services
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  👨‍💻 Team Strength
                </h3>
                <p className="text-gray-500">40+ skilled professionals</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  🌐 Client Base
                </h3>
                <p className="text-gray-500">
                  India, UAE, UK, USA & globally expanding
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  📦 Projects Delivered
                </h3>
                <p className="text-gray-500">
                  500+ apps, websites & digital platforms
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 w-full bg-orange-300 p-6 rounded-lg shadow-md gap-20">
        <img
          src="/assets/Frame-1116606747-2.jpg"
          alt="Our Vision"
          className="w-[60%] md:w-[30%] rounded-lg shadow-md"
        />

        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At{" "}
              <span className="text-indigo-600 font-semibold">
                Appz Global Tech
              </span>
              , we envision a world where technology transforms businesses,
              empowers innovation, and creates limitless opportunities for
              growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-6 max-w-3xl mx-auto">
              Our mission is to lead this transformation by delivering
              intelligent, scalable, and future-focused digital solutions. We
              aim to be the trusted technology partner that helps organizations
              adapt, evolve, and succeed in an ever-changing digital landscape.
            </p>
            <p className="text-xl text-gray-800 font-medium mt-8 italic">
              We’re not just building software —{" "}
              <br className="hidden md:block" />
              <span className="text-indigo-600 font-bold">
                we’re building the future of business.
              </span>
            </p>
          </div>
        </section>
      </div>

      <div className="flex flex-col md:flex-row items-center md:space-x-8 w-full bg-gray-100 p-6 rounded-lg shadow-md gap-20">
        <img
          src="/assets/Frame-1116606747-3.jpg"
          alt="Our Mission"
          className="w-[60%] md:w-[30%] rounded-lg shadow-md"
        />
        <div className="w-full md:w-[60%] text-left mt-4 md:mt-0">
          <h1 className="text-3xl font-bold ">Our Mission</h1>
          <h3 className="text-lg text-gray-700 mt-2">
            Driving digital transformation with smart solutions.
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            With over <strong>7+ years of hands-on experience</strong>, we
            specialize in custom software development, responsive web and mobile
            app design, AI & ML integration, and end-to-end digital strategy.
            Our purpose is to help clients drive growth, improve efficiency, and
            stay competitive in an ever-evolving digital world.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Every project we take on is an opportunity to innovate, collaborate,
            and deliver measurable value to our clients across industries.
          </p>
          <p className="text-md text-gray-600 mt-4">
            📧{" "}
            <a
              href="mailto:support@appzglobaltech.com"
              className="underline text-orange-500"
            >
              support@appzglobaltech.com
            </a>{" "}
            <br />
            📞{" "}
            <a href="tel:+918459974712" className="underline text-orange-500">
              +91-8459974712
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
