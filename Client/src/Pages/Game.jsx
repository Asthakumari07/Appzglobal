import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="px-6 py-12 md:px-20 bg-white text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-700">
          Game Development Services by Appz Global Tech
        </h1>
        <p className="text-center text-xl mb-10 text-gray-600">
          🚀 Create Engaging and Immersive Experiences with Our Game Development
          Services
        </p>

        <p className="mb-6 text-lg">
          At{" "}
          <span className="font-semibold text-blue-700">Appz Global Tech</span>,
          we specialize in creating innovative and captivating games that
          captivate players and deliver exceptional experiences. Whether you're
          looking to develop a mobile game, console game, or VR/AR experience,
          our team of expert developers is dedicated to bringing your vision to
          life. From game design to development and post-launch support, we
          provide end-to-end game development services that ensure your game is
          a success.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          📈 Our Game Development Services
        </h2>

        <p className="mb-4 text-lg">
          We offer a wide range of game development services, tailored to meet
          your unique needs and platform requirements:
        </p>

        <h3 className="text-xl font-bold mt-6 text-blue-700">
          🎮 Mobile Game Development
        </h3>
        <p className="text-lg mt-2">
          We design and develop mobile games for iOS and Android, utilizing the
          latest technologies like Unity, Cocos2d, and Unreal Engine. Our team
          creates engaging and interactive games with stunning graphics,
          seamless gameplay, and monetization strategies to ensure long-term
          success in app stores.
        </p>

        <h3 className="text-xl font-bold mt-8 text-blue-700">
          🕹️ Console Game Development
        </h3>
        <p className="text-lg mt-2">
          We specialize in developing games for major gaming consoles like
          PlayStation, Xbox, and Nintendo. Our experts create visually stunning
          and high-performance games that provide a seamless experience on these
          platforms, engaging players with compelling narratives and immersive
          gameplay.
        </p>

        <h3 className="text-xl font-bold mt-8 text-blue-700">
          💻 PC Game Development
        </h3>
        <p className="text-lg mt-2">
          We develop high-quality PC games that deliver exceptional gameplay
          experiences. Whether it's an action-packed shooter, an adventure game,
          or a strategy game, we craft games with cutting-edge graphics, fluid
          mechanics, and engaging storylines.
        </p>

        <h3 className="text-xl font-bold mt-8 text-blue-700">
          🕶️ VR/AR Game Development
        </h3>
        <p className="text-lg mt-2">
          Immerse your players in the world of Virtual Reality (VR) and
          Augmented Reality (AR) with our cutting-edge game development
          services. We design interactive experiences that take advantage of the
          latest VR/AR technologies to create truly unique gaming experiences.
        </p>

        <h3 className="text-xl font-bold mt-8 text-blue-700">
          🎨 Game Design & Prototyping
        </h3>
        <p className="text-lg mt-2">
          From concept to execution, we handle the entire game design process,
          creating detailed prototypes, gameplay mechanics, and visual assets.
          Our design team ensures that your game offers a smooth and enjoyable
          experience for players.
        </p>

        <h3 className="text-xl font-bold mt-8 text-blue-700">
          🌐 Multiplayer Game Development
        </h3>
        <p className="text-lg mt-2">
          We create multiplayer and online games that allow players to interact
          and compete in real-time. Whether you're looking to build a massively
          multiplayer online game (MMO) or a smaller online multiplayer game, we
          ensure seamless multiplayer integration with robust servers and
          matchmaking systems.
        </p>

        <h3 className="text-xl font-bold mt-8 text-blue-700">
          🛠️ Game Testing & QA
        </h3>
        <p className="text-lg mt-2">
          We perform extensive game testing to ensure that your game is free
          from bugs, glitches, and performance issues. Our quality assurance
          (QA) team works tirelessly to ensure a smooth, bug-free gaming
          experience across all devices and platforms.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-10 mb-4">
          🌟 Why Choose Appz Global Tech for Game Development?
        </h2>
        <ul className="list-disc ml-6 space-y-3 text-lg">
          <li>
            🔧 <strong>End-to-End Development:</strong> From ideation to launch
            and post-launch support, we provide comprehensive game development
            services.
          </li>
          <li>
            👨‍💻 <strong>Expert Developers:</strong> Our team of game developers,
            designers, and QA specialists ensures your game is high-quality,
            innovative, and engaging.
          </li>
          <li>
            🎮 <strong>Cross-Platform Expertise:</strong> Whether you're
            building for mobile, PC, console, or VR/AR, we have the experience
            and tools to develop games across all platforms.
          </li>
          <li>
            🎨 <strong>Stunning Graphics & Gameplay:</strong> We focus on
            delivering visually impressive and engaging gameplay that keeps
            players coming back for more.
          </li>
          <li>
            ⚡ <strong>Agile Approach:</strong> We work closely with you
            throughout the development process, ensuring your vision is brought
            to life and your game meets your objectives.
          </li>
        </ul>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            🚀 Let’s Create the Next Big Hit
          </h3>
          <p className="text-lg mb-6">
            Whether you're launching your first mobile game or developing a
            full-scale console experience, Appz Global Tech is your trusted
            partner for game development. Our team is ready to turn your ideas
            into immersive, successful games that engage and captivate players
            worldwide.
          </p>
          <p
            className="text-lg font-medium text-blue-600"
            onClick={() => navigate("/contact")}
          >
            📲 Contact Us Today to Start Your Game Development Journey!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Game;
