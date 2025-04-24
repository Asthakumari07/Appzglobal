import { useEffect, useState } from "react";
import axios from "axios";

const FeedbackData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/users")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Feedback</h2>
      <div className="grid gap-4">
        {data.map((feedback, index) => (
          <div key={index} className="bg-white shadow p-4 rounded-lg">
            <p>
              <strong>Name:</strong> {feedback.name}
            </p>
            <p>
              <strong>email:</strong> {feedback.email}
            </p>

            <p>
              <strong>number:</strong> {feedback.number}
            </p>
            <p>
              <strong>Website:</strong> {feedback.website}
            </p>
            <p>
              <strong>Message:</strong> {feedback.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackData;
