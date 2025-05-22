import React, { useState, useEffect } from "react";
import axios from "axios";

interface FormValues {
  name: string;
  email: string;
  apply: string;
  experience: string;
  linkedin: string;
  resume: File | null;
  message: string;
  agree: boolean;
}

const Application = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    apply: "",
    experience: "",
    linkedin: "",
    resume: null,
    message: "",
    agree: false,
  });

  const [positions, setPositions] = useState<string[]>([]);
  const [experienceLevels, setExperienceLevels] = useState<string[]>([]);

  // Fetch options on mount
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const res = await axios.get(
          "https://appzglobaltech.com/api/form-settings"
        );
        setPositions(res.data.positions || []);
        setExperienceLevels(res.data.experience || []);
      } catch (error) {
        console.error("Error fetching options", error);
      }
    };
    fetchOptions();
  }, []);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValues.agree) {
      alert("You must agree to the terms and privacy policy.");
      return;
    }

    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("apply", formValues.apply);
    formData.append("experience", formValues.experience);
    formData.append("linkedin", formValues.linkedin);
    formData.append("message", formValues.message);
    if (formValues.resume) {
      formData.append("resume", formValues.resume);
    }

    try {
      await axios.post("https://appzglobaltech.com/api/application", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Application submitted successfully!");
      // Optionally clear form
      setFormValues({
        name: "",
        email: "",
        apply: "",
        experience: "",
        linkedin: "",
        resume: null,
        message: "",
        agree: false,
      });
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
            {positions.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="experience"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Experience Level
          </label>
          <select
            name="experience"
            id="experience"
            value={formValues.experience}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select experience</option>
            {experienceLevels.map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
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
