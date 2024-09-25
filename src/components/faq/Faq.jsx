import { useState } from "react";
import AccordionItem from "./accordion-item";

const faqData = [
  {
    question: "faq.faq1.question",
    answer: "faq.faq1.answer",
  },
  {
    question: "faq.faq2.question",
    answer: "faq.faq2.answer",
  },
  {
    question: "faq.faq3.question",
    answer: "faq.faq3.answer",
  },
  {
    question: "faq.faq4.question",
    answer: "faq.faq4.answer",
  },
  {
    question: "faq.faq5.question",
    answer: "faq.faq5.answer",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="mx-auto py-8 rounded-lg shadow-md">
      {faqData?.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Faqs;
