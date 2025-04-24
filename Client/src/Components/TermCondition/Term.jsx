import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";

const Term = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="max-w-6xl mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <p className="mb-4">
          Welcome to <strong>AppzGlobalTech</strong>! By accessing and using our
          services, you agree to abide by the following terms and conditions:
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            These terms and conditions outline the rules and regulations for
            using AppzGlobalTech’s services. By accessing our website or using
            our services, you agree to be bound by these terms. If you do not
            agree with any part, please refrain from using our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Privacy Policy</h2>
          <p>
            Your privacy is important to us. Our{" "}
            <a href="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </a>{" "}
            outlines how we collect, use, and protect your information. By using
            our services, you consent to the practices described therein.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. Intellectual Property
          </h2>
          <p>
            All content on our website and services—including text, images,
            graphics, logos, and software—is protected by intellectual property
            laws. You may not use, reproduce, or distribute any content without
            prior written consent from AppzGlobalTech.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. User Conduct</h2>
          <p>
            You agree to use our services responsibly and not engage in any
            unlawful, abusive, or harmful behavior. You must comply with all
            applicable laws and respect third-party rights while using our
            services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Service Changes</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of
            our services at any time without notice. We are not liable for any
            resulting impact.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            6. Disclaimer of Warranties
          </h2>
          <p>
            Our services are provided “as is” without warranties of any kind. We
            do not guarantee the accuracy or reliability of any content or
            features.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            7. Limitation of Liability
          </h2>
          <p>
            AppzGlobalTech and its affiliates are not liable for any indirect,
            incidental, or consequential damages arising from the use of our
            services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Third-Party Links</h2>
          <p>
            Our services may include links to third-party websites. We are not
            responsible for the content or practices of those third parties and
            encourage you to review their terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Termination</h2>
          <p>
            We may suspend or terminate your access to our services without
            notice if you violate these terms or engage in abusive behavior.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
          <p>
            These terms are governed by the laws of the jurisdiction in which
            AppzGlobalTech is registered.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">11. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Please review this page
            periodically. Continued use of our services implies acceptance of
            any changes.
          </p>
        </section>

        <p className="mt-6">
          By accessing and using AppzGlobalTech’s services, you acknowledge that
          you have read, understood, and agreed to these terms and conditions.
          For any questions, contact us at{" "}
          <a
            href="mailto:support@appzglobaltech.com"
            className="text-blue-600 underline"
          >
            support@appzglobaltech.com
          </a>
          .
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Term;
