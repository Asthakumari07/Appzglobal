import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What types of software development services do you provide?",
    answer:
      "AGT offers you end-to-end software development services, adding custom software development, enterprise applications, mobile app development, web app development, and consulting services. Our expert is also proficient in making scalable eCommerce and B2B solutions offered to your industry.",
  },
  {
    question: "Why should I choose AGT for software development in Noida?",
    answer:
      "With a top-notch software development company in Noida, we understand global expertise with local presence. We work with agile methodologies, for cost-effective solutions, and offer high-quality software for businesses across India, USA & globally. A proven track record makes us a trusted partner for startups and SME’s.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "Custom software pricing varies by project scope, features, technology, and delivery time. We give you a flexible engagement method to suit different business needs. You can book a free consultation with our experts to get a customised cost estimate for your project.",
  },
  {
    question: "How is Appz Global Tech different from other services?",
    answer:
      "Yes, your question is absolutely right. We have been here for the last 10 years because of our customer-first approach, strong business expertise, proven results, and focus on long-term growth.",
  },
  {
    question: "How should I start my business?",
    answer:
      "You don’t need to do anything else, simply follow our team's instructions by initiating a call or enquiry for a free quote.",
  },
];

export default function BlogFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Blog Section Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Blog Section
        </h2>

        {/* FAQ Heading */}
        <h3 className="text-2xl font-semibold mb-8 text-gray-700 text-center">
          Frequently Asked Questions
        </h3>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-md transition-all duration-300 ${
                openIndex === index
                  ? "bg-white border border-indigo-500"
                  : "bg-white hover:shadow-lg"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-indigo-500" />
                  <span className="font-medium text-lg text-gray-900">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-indigo-500 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300" />
                )}
              </button>

              {/* Answer with smooth transition */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 px-6 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
