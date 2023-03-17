import React from 'react';

export default function Card({ children }) {
  return (
    <div
      className="p-6 rounded-md border-[1px] bg-white w-full"
    >
      {children}
    </div>
  );
}
