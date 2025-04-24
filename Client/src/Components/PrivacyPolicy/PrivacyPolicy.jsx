import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="max-w-6xl mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At <strong>AppzGlobalTech</strong>, we are committed to protecting the
          privacy and security of our users’ personal information. This Privacy
          Policy outlines how we collect, use, and safeguard your data when you
          use our services or interact with our applications.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            1. Information Collection
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, and contact details when you register for our services or
            use our applications. We may also collect non-personal information
            like device information, usage patterns, and browsing history to
            enhance your experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
          <p>
            We use the collected information to provide and improve our
            services, personalize your experience, send notifications, and
            respond to inquiries. We may also use aggregated and anonymized data
            for analytical purposes to enhance our offerings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            data from unauthorized access, alteration, or disclosure. Our
            systems are regularly updated and monitored to ensure the safety of
            your information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information with trusted service
            providers who assist us in delivering our services. We ensure that
            these partners uphold the same level of data protection.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            5. Cookies and Tracking
          </h2>
          <p>
            We may use cookies and similar technologies to collect data about
            your usage patterns and preferences. These technologies help us
            optimize our services and provide a seamless experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Third-Party Links</h2>
          <p>
            Our applications and services may contain links to third-party
            websites or services. We are not responsible for their privacy
            practices, and we encourage you to review their privacy policies
            before interacting with them.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
          <p>
            Our services are not intended for users under the age of 13. We do
            not knowingly collect personal information from children. If we
            learn that a child under 13 has provided us with personal
            information, we will take steps to delete it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Your Choices</h2>
          <p>
            You can update, correct, or delete your personal information through
            your account settings. You can also opt-out of receiving promotional
            communications from us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            9. Changes to the Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time to reflect
            changes in our practices and services. We will notify you of any
            material changes through our applications or other communication
            channels.
          </p>
        </section>

        <p className="mt-6">
          By using our services and applications, you consent to the terms
          outlined in this Privacy Policy. If you have any questions or concerns
          about how we handle your data, please contact us.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
