import { useEffect, useState } from "react";
import axios from "axios";

const ApplicationData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://appzglobaltech.com/api/admin/applications")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

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

            <p>
              <strong>Position:</strong> {app.apply || "N/A"}{" "}
              {/* Ensure 'position' is correct */}
            </p>
            <p>
              <strong>LinkedIn:</strong> {app.linkedin || "N/A"}{" "}
              {/* Ensure 'linkedin' is correct */}
            </p>
            <p>
              <strong>Message:</strong> {app.message || "No message"}{" "}
              {/* Ensure 'message' is correct */}
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
