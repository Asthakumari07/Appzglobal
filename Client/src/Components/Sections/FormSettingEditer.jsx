import { useEffect, useState } from "react";
import axios from "axios";

const FormSettingsEditor = () => {
  const [positions, setPositions] = useState([]);
  const [experience, setExperience] = useState("");
  const [newPosition, setNewPosition] = useState("");

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await axios.get("/api/form-settings");
      setPositions(res.data.positions || []);
      setExperience(res.data.experience || "");
    } catch (err) {
      console.error("Failed to fetch form settings");
    }
  };

  const handleSave = async () => {
    try {
      await axios.put("/api/form-settings", {
        positions,
        experience,
      });
      alert("Form settings updated");
    } catch (err) {
      console.error("Failed to update form settings");
    }
  };

  const handleAddPosition = () => {
    if (newPosition && !positions.includes(newPosition)) {
      setPositions([...positions, newPosition]);
      setNewPosition("");
    }
  };

  const handleDeletePosition = (pos) => {
    setPositions(positions.filter((p) => p !== pos));
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mt-10">
      <h2 className="text-xl font-bold mb-4">Update Form Settings</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Experience (in years):</label>
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="e.g. 2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Positions:</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newPosition}
            onChange={(e) => setNewPosition(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Add new position"
          />
          <button
            onClick={handleAddPosition}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        <ul className="list-disc ml-5">
          {positions.map((pos, idx) => (
            <li key={idx} className="flex justify-between items-center">
              {pos}
              <button
                onClick={() => handleDeletePosition(pos)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Save Settings
      </button>
    </div>
  );
};

export default FormSettingsEditor;
