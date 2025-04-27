import React from "react";

const data = [
  {
    icon: "/assets/3 patti.png",
    name: "3 Patti Game",
    link: "https://3pattigame.example.com",
    para: "A thrilling multiplayer card game with real-time interactions and immersive gameplay.",
  },
  {
    icon: "/assets/agt.png",
    name: "AGT Logistics",
    link: "https://agtplatform.example.com",
    para: "Fleet and logistics management system with real-time tracking and intelligent analytics.",
  },
  {
    icon: "/assets/igniculuss-logo-1.png",
    name: "Igniculus",
    link: "https://igniculus.io",
    para: "A blockchain-based asset management platform with seamless digital contract integration.",
  },
  {
    icon: "/assets/ludo online.jpg",
    name: "Ludo Online",
    link: "https://ludoonline.example.com",
    para: "An interactive online Ludo game with real-time matchmaking and exciting animations.",
  },
  {
    icon: "/assets/need to assis.png",
    name: "Need to Assist",
    link: "https://needtoassist.example.com",
    para: "A volunteer help platform connecting individuals in need with helpers in their area.",
  },
  {
    icon: "/assets/nestor.png",
    name: "Nestor Pharmaceuticals",
    link: "https://nestorpharma.com",
    para: "Corporate website and mobile platform for one of the leading pharma companies globally.",
  },
  {
    icon: "/assets/next-ias.webp",
    name: "Next IAS",
    link: "https://nextias.example.com",
    para: "An online learning platform with live classes, test series, and detailed performance tracking.",
  },
  {
    icon: "/assets/NM Gems & Jewels.png",
    name: "NM Gems & Jewels",
    link: "https://nmgems.example.com",
    para: "E-commerce platform for premium gems and handcrafted jewelry with AR try-on features.",
  },
  {
    icon: "/assets/Raj Care Innovation.png",
    name: "Raj Care Innovation",
    link: "https://rcinfovision.com",
    para: "Healthcare startup platform for wellness programs and medical appointment integration.",
  },
  {
    icon: "/assets/rummy Xl.avif",
    name: "Rummy XL",
    link: "https://rummyxl.example.com",
    para: "An engaging and secure online rummy platform with leaderboard and reward systems.",
  },
  {
    icon: "/assets/Raj Care Innovation.png",
    name: "Synergy Innovation",
    link: "https://synergyinnovation.example.com",
    para: "Innovation consultancy platform for industry collaborations and digital product launches.",
  },
  {
    icon: "/assets/thikedaar.png",
    name: "Thikedaar",
    link: "https://thikedaar.com",
    para: "Construction project management and contractor hiring system for residential and commercial spaces.",
  },
  {
    icon: "/assets/university-network-logo.png-12.png",
    name: "University Network",
    link: "https://universitynetwork.com",
    para: "Student community and collaboration platform connecting top universities and talent.",
  },
  {
    icon: "/assets/XL!!.avif",
    name: "XL Games",
    link: "https://xlgames.example.com",
    para: "Online gaming platform offering casino-style games with global tournaments and prizes.",
  },
];

const ClientCard = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((client, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={client.icon}
            alt={client.name}
            className="w-full h-40 object-contain p-4 bg-gray-50"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">{client.name}</h2>
            <p className="text-sm text-gray-600 my-2">{client.para}</p>
            <a
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:underline text-sm"
            >
              Visit Website
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientCard;
