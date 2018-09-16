import React from 'react';

export default function({ text, onClick, active, className }) {
  return (
    <button
      className={active ? `${className} active` : className}
      onClick={onClick}
    >{text}
    </button>
  );
}