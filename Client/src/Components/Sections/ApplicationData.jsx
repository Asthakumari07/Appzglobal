import { useEffect, useState } from "react";
import axios from "axios";

const ApplicationData = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedFields, setEditedFields] = useState({});

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = () => {
    axios
      .get("https://appzglobaltech.com/api/admin/applications")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  const handleEdit = (app) => {
    setEditingId(app._id);
    setEditedFields({
      position: app.apply || "",
      experience: app.experience || "",
    });
  };

  const handleInputChange = (e) => {
    setEditedFields({ ...editedFields, [e.target.name]: e.target.value });
  };

  const handleSave = async (id) => {
    try {
      await axios.put(
        `https://appzglobaltech.com/api/admin/applications/${id}`,
        {
          apply: editedFields.position,
          experience: editedFields.experience,
        }
      );
      setEditingId(null);
      fetchApplications(); // Refresh data
    } catch (err) {
      console.error("Error updating:", err);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedFields({});
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Applications</h2>
      <div className="grid gap-4">
        {data.map((app, index) => (
          <div key={index} className="bg-white shadow p-4 rounded-lg">
            <p>
              <strong>Name:</strong> {app.name || "N/A"}
            </p>
            <p>
              <strong>Email:</strong> {app.email || "N/A"}
            </p>

            {editingId === app._id ? (
              <>
                <div className="flex flex-col gap-2 mb-2">
                  <input
                    type="text"
                    name="position"
                    value={editedFields.position}
                    onChange={handleInputChange}
                    placeholder="Edit Position"
                    className="border p-2 rounded"
                  />
                  <input
                    type="text"
                    name="experience"
                    value={editedFields.experience}
                    onChange={handleInputChange}
                    placeholder="Edit Experience"
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSave(app._id)}
                    className="bg-green-600 text-white px-4 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-400 text-white px-4 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>
                  <strong>Position:</strong> {app.apply || "N/A"}
                </p>
                <p>
                  <strong>Experience:</strong> {app.experience || "N/A"}
                </p>
                <button
                  onClick={() => handleEdit(app)}
                  className="bg-blue-600 text-white px-4 py-1 mt-2 rounded"
                >
                  Edit
                </button>
              </>
            )}

            <p>
              <strong>LinkedIn:</strong> {app.linkedin || "N/A"}
            </p>
            <p>
              <strong>Message:</strong> {app.message || "No message"}
            </p>
            <p>
              <strong>Resume:</strong>{" "}
              {app.resume ? (
                <a
                  href={`http://13.203.214.159:5000/uploads/${app.resume}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              ) : (
                "No resume uploaded"
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationData;
