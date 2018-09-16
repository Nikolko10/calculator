import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function({ text, onClick, active, className }) {
  return (
    <button
      className={active ? `${className} active` : className}
      onClick={onClick}
    >{text}
    </button>
  );
}