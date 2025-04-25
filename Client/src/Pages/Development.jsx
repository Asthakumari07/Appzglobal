import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Development = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="bg-white py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-blue-800">
            Website Development Services by{" "}
            <span className="text-orange-500">Appz Global Tech</span>
          </h1>
          <p className="text-lg text-gray-700">
            At Appz Global Tech, we specialize in crafting high-performance,
            responsive, and engaging websites tailored to your business needs.
            Whether you're building a dynamic website, e-commerce platform, or
            web app, our team leverages the latest technologies to ensure your
            online presence shines.
          </p>

          {/* Technologies Section */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Our Website Development Technologies
            </h2>

            <div className="space-y-6">
              {/* Frontend */}
              <div>
                <h3 className="text-xl font-semibold text-orange-500">
                  Frontend Technologies:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>HTML5 - Modern, semantic, and performance-focused.</li>
                  <li>CSS3 - Responsive layouts and elegant designs.</li>
                  <li>JavaScript - Dynamic, interactive features 🚀</li>
                  <li>React.js - Component-based UI development 👉</li>
                  <li>
                    Angular - Scalable applications with powerful tooling.
                  </li>
                  <li>Vue.js - Lightweight, progressive UI framework.</li>
                  <li>SASS/LESS - Advanced CSS for scalable styling.</li>
                </ul>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-xl font-semibold text-orange-500">
                  Backend Technologies:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Node.js - Scalable JavaScript backend framework.</li>
                  <li>PHP - Versatile language for dynamic websites.</li>
                  <li>
                    Python (Django/Flask) - Clean and efficient backend dev.
                  </li>
                  <li>
                    Ruby on Rails - Rapid and secure development framework.
                  </li>
                  <li>Java - Enterprise-grade application development.</li>
                  <li>.NET - Performance-focused Microsoft framework.</li>
                </ul>
              </div>

              {/* CMS */}
              <div>
                <h3 className="text-xl font-semibold text-orange-500">
                  Content Management Systems (CMS):
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>WordPress - Flexible and widely adopted.</li>
                  <li>Drupal - Scalable enterprise-ready CMS.</li>
                  <li>Joomla - Easy to use with strong extensibility.</li>
                  <li>Shopify - Ideal for e-commerce storefronts.</li>
                </ul>
              </div>

              {/* E-Commerce */}
              <div>
                <h3 className="text-xl font-semibold text-orange-500">
                  E-Commerce Development:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Magento - Feature-rich e-commerce platform.</li>
                  <li>WooCommerce - WordPress-based online store solution.</li>
                  <li>BigCommerce - Scalable and easy-to-manage solution.</li>
                </ul>
              </div>

              {/* Databases */}
              <div>
                <h3 className="text-xl font-semibold text-orange-500">
                  Database Technologies:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>MySQL - Trusted open-source relational database.</li>
                  <li>MongoDB - Flexible NoSQL database.</li>
                  <li>PostgreSQL - Advanced open-source database.</li>
                  <li>SQLite - Lightweight and embedded database solution.</li>
                </ul>
              </div>

              {/* Frameworks */}
              <div>
                <h3 className="text-xl font-semibold text-orange-500">
                  Web Development Frameworks:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Express.js - Lightweight Node.js framework for APIs.</li>
                  <li>Laravel - Elegant PHP web framework.</li>
                  <li>Django - High-level Python framework.</li>
                  <li>Spring - Secure and scalable Java framework.</li>
                </ul>
              </div>

              {/* APIs */}
              <div>
                <h3 className="text-xl font-semibold text-orange-500">
                  APIs & Web Services:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>
                    RESTful APIs - Easy integration with external systems.
                  </li>
                  <li>GraphQL - Efficient and modern query APIs.</li>
                  <li>
                    WebSockets - Real-time data streaming and communication.
                  </li>
                </ul>
              </div>

              {/* Others */}
              <div>
                <h3 className="text-xl font-semibold text-orange-500">
                  Other Key Technologies:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>AWS - Cloud hosting and infrastructure.</li>
                  <li>Azure - Microsoft's powerful cloud platform.</li>
                  <li>Google Cloud - Scalable and AI-ready cloud services.</li>
                  <li>Docker - Containerized deployments for any scale.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Why Choose Appz Global Tech for Website Development?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-semibold text-blue-800">
                  Tailored Web Solutions:
                </span>{" "}
                Custom websites aligned with your goals.
              </li>
              <li>
                <span className="font-semibold text-blue-800">
                  Scalable & Secure:
                </span>{" "}
                Built to grow and withstand threats.
              </li>
              <li>
                <span className="font-semibold text-blue-800">
                  Responsive Design:
                </span>{" "}
                Perfect across all device sizes.
              </li>
              <li>
                <span className="font-semibold text-blue-800">
                  SEO & Performance Optimization:
                </span>{" "}
                Designed to rank and perform well.
              </li>
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              className="bg-blue-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
              onClick={() => navigate("/contact")}
            >
              📞 Get in Touch for a Free Consultation
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Development;
