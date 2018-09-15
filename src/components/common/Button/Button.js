import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function({ text, onClick }) {
	return <button onClick={onClick}>{text}</button>;
}