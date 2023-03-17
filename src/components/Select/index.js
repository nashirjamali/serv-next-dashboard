import React, { useState } from 'react';
import { AiOutlineCalendar, AiFillCaretDown } from 'react-icons/ai';

export default function Select({ options, onChange }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="relative">
      <select
        className="appearance-none border-[1px] rounded-lg py-2 pl-3 pr-10 leading-tight focus:outline-none focus:border-blue-500 font-medium text-sm text-neutral-600"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-600">
        <AiOutlineCalendar size={24} />
      </div>
    </div>
  );
}
