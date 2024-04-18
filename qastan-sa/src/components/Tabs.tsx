// Blog tabs
import React from 'react';

interface TabsProps {
  categories: string[];
  activeTab: string;
  onTabClick: (category: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ categories, activeTab, onTabClick }) => {
  return (
    <div className="flex flex-wrap justify-center mb-8">
      {['Alle', ...categories].map((category) => (
        <button
          key={category}
          className={`mr-4 my-2 focus:outline-none ${activeTab === category ? 'bg-legoBlue text-white' : 'bg-[#eaf6f6] '} py-2 px-4 rounded-md`}
          onClick={() => onTabClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
