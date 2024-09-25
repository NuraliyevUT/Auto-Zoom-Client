import { useTranslation } from "react-i18next";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const { t } = useTranslation(); 

  return (
    <div className="border-b border-gray-600 py-4 mb-5">
      <div
        className="flex items-center justify-start cursor-pointer"
        onClick={onClick}
      >
        <svg
          className={`w-8 h-8 transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 32 32"
        >
          <path d="M13 10L21 16.5L13 23L17.571 16.5L13 10Z" fill="white" />
          <circle cx="16" cy="16" r="15.5" stroke="white" />
        </svg>
        <h3 className="text-white text-base sm:text-xl md:text-2xl font-medium pl-5">
          {t(question)}
        </h3>
      </div>
      {isOpen && <p className="mt-4 text-gray-400">{t(answer)}</p>}
    </div>
  );
};

export default AccordionItem;
