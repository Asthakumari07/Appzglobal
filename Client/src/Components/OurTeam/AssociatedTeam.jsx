import React from "react";

const data = [
  {
    image: "/assets/LokeshSir.jpg",
    name: "Lokesh Kumar",
    position: "Managing Director",
  },
  {
    image: "/assets/aditifinal-01.jpg",
    name: "Aditi Chaudhary",
    position: "Director",
  },

  {
    image: "/assets/Gitansh2.jpg",
    name: "Gitansh",
    position: "Chief Technology Officer",
  },
  {
    image: "/assets/AaqibNew.jpg",
    name: "MD Aaqib",
    position: "Chief Revenue Officer",
  },
  {
    image: "/assets/Shekhar.jpg",
    name: "C Shekher",
    position: "Vice President, Sales & Marketing",
  },

  {
    image: "/assets/SaloniNew1.jpg",
    name: "Saloni Jha",
    position: "General Manager",
  },
  {
    image: "/assets/NarendraNew2.jpg",
    name: "Narendra Kumar",
    position: "Floor Manager",
  },
  {
    image: "/assets/Astha.jpg",
    name: "Astha Kumari",
    position: "Tech Analyst",
  },
];

const AssociateTeam = () => {
  const topRow = data.slice(0, 5); // first 5 members
  const bottomRow = data.slice(5); // remaining 3 members

  const Card = ({ item }) => (
    <div className="flex flex-col items-center w-48 bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-32 h-32 rounded-full object-cover shadow-md transform hover:scale-105 transition duration-300"
        />
        {/* optional small gradient border */}
        <div className="absolute inset-0 rounded-full ring-2 ring-transparent hover:ring-blue-400 transition" />
      </div>
      <h2 className="text-lg font-semibold text-gray-800 mt-4">{item.name}</h2>
      <p className="text-sm text-gray-500">{item.position}</p>
    </div>
  );

  return (
    <div className="py-12 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Meet the Team
      </h1>

      {/* Top Row - 5 cards */}
      <div className="flex justify-center flex-wrap gap-10 mb-12">
        {topRow.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      {/* Bottom Row - 3 cards */}
      <div className="flex justify-center flex-wrap gap-10">
        {bottomRow.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AssociateTeam;
