import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SliderQuantity from '../components/common/SliderQuantity/SliderQuantity';

class CalculateContainers extends Component {
  render() {
  return (
    <div>
      <SliderQuantity />
      <SliderQuantity />
    </div>
    );
  }
}

CalculateContainers.propTypes = {
	data: PropTypes.object.isRequired,
};

export default CalculateContainers;