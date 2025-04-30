import { useEffect, useState } from "react";
import axios from "axios";

const ContactData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://13.203.214.159:5000/api/admin/contacts")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
      <div className="grid gap-4">
        {data.map((contact, index) => (
          <div key={index} className="bg-white shadow p-4 rounded-lg">
            <p>
              <strong>Name:</strong> {contact.name}
            </p>
            <p>
              <strong>Number:</strong> {contact.number}
            </p>
            <p>
              <strong>Email:</strong> {contact.email}
            </p>
            <p>
              <strong>Message:</strong> {contact.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactData;
