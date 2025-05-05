import React, { useState } from "react";
import axios from "axios";
import "./FormNew.css";

const Feedback: React.FC = () => {
  const [Values, setValue] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValue({ ...Values, [name]: value });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, number, email, message } = Values;

    if (!name || !number || !email || !message) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await axios.post(
        "https://appzglobaltech.com/api/form/contact",
        Values
      );
      alert(res.data.message);

      // Reset the form after successful submission
      setValue({
        name: "",
        number: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gray-200 flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col-reverse lg:flex-row shadow-orange-300">
        <form
          onSubmit={submit}
          className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col gap-4"
        >
          <h3 className="text-orange-500 text-2xl font-semibold">
            Get in touch
          </h3>
          <h1 className="text-3xl sm:text-3xl font-bold text-gray-800">
            Let’s see how we can help you!
          </h1>

          <input
            type="text"
            placeholder="Name"
            name="name"
            value={Values.name}
            onChange={change}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-5 text-xl"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="number"
            value={Values.number}
            onChange={change}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-5 text-xl"
            required
          />
          <input
            type="email"
            placeholder="Email ID"
            name="email"
            value={Values.email}
            onChange={change}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-5 text-xl"
            required
          />
          <textarea
            placeholder="Your Message Here"
            name="message"
            value={Values.message}
            onChange={change}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-5 text-xl"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-orange-400 text-white font-semibold px-6 py-2 rounded-xl hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>

        {/* Optional image section — you can enable this if needed */}

        <div className=" w-full lg:w-1/2 h-[300px] lg:h-auto flex items-center justify-center bg-orange-50">
          <div className="image w-full h-full object-contain p-8"></div>
          {/* <img
            src={img1}
            alt="Contact illustration"
            className="w-full h-full object-contain p-8"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
