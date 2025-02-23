import { useEffect, useState } from "react";
import { fetchFAQs } from "../services/api";

function FAQs() {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        const data = await fetchFAQs();
        setFaqs(data);
      } catch (err) {
        console.error("Failed to fetch FAQs:", err);
        setError("Failed to load FAQs. Please try again later.");
      }
    };
    loadFAQs();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Frequently Asked Questions
      </h2>

      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white shadow-md rounded-lg p-4 border"
            >
              <p className="font-semibold text-gray-900">{faq.question}</p>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FAQs;
