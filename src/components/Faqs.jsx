import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Where are you located?", answer: "We are located at XYZ Street." },
    { question: "What are your working hours?", answer: "We are open from 9 AM to 6 PM, Monday to Saturday." },
    { question: "How late in the day can I call for a same-day delivery?", answer: "Orders are accepted until 3 PM for same-day delivery." },
    { question: "Ut enim ad minim veniam, quis nostrud", answer: "Lorem ipsum dolor sit amet consectetur." },
    { question: "Exercitation ullamco laboris nisi ut aliquip ex ea", answer: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { question: "Duis aute irure dolor in reprehenderit in voluptate", answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
    { question: "Velit esse cillum dolore eu fugiat nulla pariatur.", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "Excepteur sint occaecat cupidatat non proident", answer: "Excepteur sint occaecat cupidatat non proident sunt in culpa." },
    { question: "Interdum velit euismod in pellentesque massa place", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { question: "Interdum velit euismod in pellentesque massa place", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-2xl font-bold mb-8">FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-blue-500 rounded-lg p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{faq.question}</h3>
              <span className="text-blue-500 text-xl">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
