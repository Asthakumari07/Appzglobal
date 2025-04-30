import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";

const data = [
  {
    icon: FaQuoteLeft,
    title: " Rakesh Mehra",
    para: "Appz Global Tech helped us build a stunning eCommerce website that’s both user-friendly and fast. Our online sales have doubled within 3 months. The design reflects our brand perfectly, and customers find it easy to browse and buy. Highly professional and responsive team — they even helped us set up a secure payment gateway and trained our staff post-launch.",
  },
  {
    icon: FaQuoteLeft,
    title: "Priya Sharma",
    para: "We partnered with Appz Global Tech for SEO and digital marketing. Their targeted campaigns, especially on Google and Instagram, brought in genuine leads. Their creative team built landing pages, infographics, and even managed our blog SEO. Within two months, our keyword rankings improved significantly. They work like a true extension of our team.",
  },
  {
    icon: FaQuoteLeft,
    title: "Ankit Jain ",
    para: "The portal Appz Global Tech created for us has been a game-changer. From client onboarding to document uploads and status tracking — everything is now digitized and seamless. We’ve received great feedback from clients, and even our CA team feels more efficient. The best part? Their support is always just a call away. Transparent pricing and no tech jargon.",
  },
  {
    icon: FaQuoteLeft,
    title: " Neha Singh",
    para: "We needed an app that could showcase our latest collections, push new arrivals, and handle orders — Appz Global Tech delivered all of that with a sleek UI and blazing speed. They also advised us on UX best practices, which was a bonus. The admin panel they built helps us manage inventory and customer queries in real time. We're now planning an iOS version with them too.",
  },
  {
    icon: FaQuoteLeft,
    title: " Vikram Patil",
    para: "As a B2B agri-tech company, we needed more than just a website — we needed a digital backbone. Appz Global Tech developed a powerful CRM solution integrated with our website that now handles distributor tracking, inquiry management, and product catalogs. They were patient with our technical requirements and offered suggestions that truly improved our workflow.",
  },
  {
    icon: FaQuoteLeft,
    title: "Ritu Agarwal",
    para: "We were looking for a tech partner who understood the emotional and functional side of running a preschool. Appz Global Tech designed a beautiful, intuitive site where parents can access updates, event galleries, and even pay fees online. Their attention to design details and safety features (like access control) shows their commitment to quality.",
  },
];

const HomeTestimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderSettings = {
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 3,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10 bg-white overflow-x-hidden">
      <h1 className="text-3xl font-bold text-center mb-10">
        Client <span className="text-orange-500">Testimonials</span>
      </h1>

      <div className="mx-auto max-w-7xl px-4 overflow-hidden">
        <Slider {...sliderSettings}>
          {data.map((item, index) => {
            let distance = Math.abs(activeSlide - index);
            if (distance > data.length / 2) {
              distance = data.length - distance;
            }

            let scale = 0.8;
            let opacity = 0.4;
            let bg = "bg-orange-400";

            if (distance === 0) {
              scale = 1.1;
              opacity = 1;
              bg = "bg-blue-900";
            } else if (distance === 1) {
              scale = 0.75;
              opacity = 0.8;
            }

            return (
              <div key={index} className="px-2 max-w-full">
                <div
                  className={`transition-all duration-500 rounded-2xl p-6 text-white shadow-xl ${bg}`}
                  style={{
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    zIndex: 10 - distance,
                    minHeight: "340px",
                    width: "100%",
                  }}
                >
                  <item.icon className="w-10 h-10 mb-4 text-white" />

                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.para}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomeTestimonial;
