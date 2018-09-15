import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SliderQuantity from '../components/common/SliderQuantity/SliderQuantity';
import PaymentInterest from '../components/common/PaymentInterest/PaymentInterest';
import PassiveIncome from '../components/common/PassiveIncome/PassiveIncome';

class CalculateContainers extends Component {
  render() {
  return (
    <div>
      <SliderQuantity
        min={1000}
        max={100000}
        step={1000}
        text='Сумма'
      />
      <SliderQuantity
        min={3}
        max={36}
        step={1}
        text='Срок'
      />
      <PaymentInterest />
      <PassiveIncome />
    </div>
    );
  }
}

CalculateContainers.propTypes = {
	data: PropTypes.object.isRequired,
};

export default CalculateContainers;