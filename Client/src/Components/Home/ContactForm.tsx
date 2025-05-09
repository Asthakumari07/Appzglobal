import React, { useState } from "react";
import axios from "axios";
import "./form.css";

const ContactForm: React.FC = () => {
  const [Values, setValue] = useState({
    name: "",
    email: "",
    number: "",
    website: "",
    feedback: "",
  });

  // Handle input change
  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValue({ ...Values, [name]: value });
  };

  // Handle form submit
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, number, website, feedback } = Values;

    // Check if all fields are filled
    if (!name || !email || !number || !website || !feedback) {
      alert("All fields are required");
      return;
    }

    try {
      // Send POST request to backend
      const response = await axios.post(
        "http://appzglobaltech.com:5000/api/auth/register",
        Values
      );

      // Handle successful response
      alert(response.data.message); // Should show "User registered successfully!"
    } catch (error: any) {
      // Handle errors
      console.error(error);
      alert(error.response?.data?.msg || "Something went wrong!");
    }

    // Clear the form after submission
    setValue({
      name: "",
      email: "",
      number: "",
      website: "",
      feedback: "",
    });
  };

  return (
    <div
      className="h-auto flex flex-col justify-center items-center py-10"
      id="image"
    >
      <form
        onSubmit={submit}
        className="w-[70%] md:w-[60%] p-8 flex flex-col backdrop-blur rounded shadow border border-white bg-transparent"
      >
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-6 text-white">
          Request For Free Consultation
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={Values.name}
            onChange={change}
            className="p-3 border-b-2 border-white placeholder-white text-white bg-transparent font-bold"
          />
          <input
            type="email"
            placeholder="Email ID"
            name="email"
            value={Values.email}
            onChange={change}
            className="p-3 border-b-2 border-white placeholder-white text-white bg-transparent font-bold"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="number"
            value={Values.number}
            onChange={change}
            className="p-3 border-b-2 border-white placeholder-white text-white bg-transparent font-bold"
          />
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={Values.website}
            onChange={change}
            className="p-3 border-b-2 border-white placeholder-white text-white bg-transparent font-bold"
          />
        </div>

        <textarea
          placeholder="Your Message Here"
          name="feedback"
          value={Values.feedback}
          onChange={change}
          className="p-3 border-b-2 border-white mt-4 text-white placeholder-white bg-transparent font-bold"
        ></textarea>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 py-3 px-6 text-white rounded-xl hover:bg-blue-700 transition-all bg-orange-400 shadow shadow-orange-400 font-bold"
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
