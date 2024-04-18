import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Item from "./AccordionItem";

interface FAQItem {
  question: string;
  answer: string;
}
interface AccordionProps {
  backgroundColor: string;
}

const Accordions: React.FC<AccordionProps> = ({ backgroundColor }) => {
  const { t } = useTranslation();
  const faqItems: FAQItem[] = t("Contact.FAQ.faq", { returnObjects: true }) || [];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      id="accordion-wrapper"
      className="flex flex-col gap-0 max-w-[800px] w-full mx-auto border border-gray-200 divide-y overflow-hidden bg-white"
    >
     {faqItems.map((item: FAQItem, index: number) => (
      <Item
        key={index}
        questionID={`question-${index}`} 
        answerID={`answer-${index}`} 
        question={t(item.question)} 
        answer={t(item.answer)} 
        isActive={activeIndex === index} 
        onClick={() => handleToggle(index)}
        ariaExpanded={activeIndex === index} 
        backgroundColor={backgroundColor}
      />
    ))}
    </div>
  );
};

export default Accordions;