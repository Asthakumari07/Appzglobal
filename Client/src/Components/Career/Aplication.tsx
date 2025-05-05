import React, { useState } from "react";
import axios from "axios";

const Application = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    apply: "",
    linkedin: "",
    resume: null as File | null,
    message: "",
    agree: false,
  });

  // Handle changes in form fields
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;

    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "file") {
      setFormValues({
        ...formValues,
        [name]: target.files ? target.files[0] : null,
      });
    } else if (
      target instanceof HTMLInputElement &&
      target.type === "checkbox"
    ) {
      setFormValues({
        ...formValues,
        [name]: target.checked,
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the user agrees to terms and privacy policy
    if (!formValues.agree) {
      alert("You must agree to the terms and privacy policy.");
      return;
    }

    // Create FormData object to handle file upload and form fields
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("apply", formValues.apply);
    formData.append("linkedin", formValues.linkedin);
    formData.append("message", formValues.message);
    if (formValues.resume) {
      formData.append("resume", formValues.resume); // Append the resume file
    }

    try {
      // Send form data to backend (example URL)
      const response = await axios.post(
        "https://appzglobaltech.com/api/application", // Ensure this matches the backend route
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Proper content type for form data
          },
        }
      );
      alert("Application submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-2xl border border-gray-100 mt-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Join Our Creative Team
      </h2>
      <form
        className="space-y-5"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="apply"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Applying For
          </label>
          <select
            name="apply"
            id="apply"
            value={formValues.apply}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a position</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="designer">UI/UX Designer</option>
            <option value="pm">Project Manager</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="linkedin"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            LinkedIn Profile
          </label>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            value={formValues.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/yourname"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="resume"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Upload Resume
          </label>
          <input
            type="file"
            name="resume"
            id="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Cover Letter / Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formValues.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={formValues.agree}
            onChange={handleChange}
            required
            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="agree" className="text-sm text-gray-700">
            I agree to the{" "}
            <a href="/terms" className="text-blue-600 underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Application;
