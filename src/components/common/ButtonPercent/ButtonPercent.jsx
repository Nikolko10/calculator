import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function({ text, onClick, active }) {
	return <button style={{ 'backgroundColor': active ? '#83c355' : '' }} onClick={onClick}>{text}</button>;
}