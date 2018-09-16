import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SliderQuantity from '../components/common/SliderQuantity/SliderQuantity';
import PaymentInterest from '../components/common/PaymentInterest/PaymentInterest';
import PassiveIncome from '../components/common/PassiveIncome/PassiveIncome';
import InterestRate from '../components/blocks/InterestRate/InterestRate';

class CalculateContainers extends Component {
  render() {
  	const { 
        data, 
        setValueAmount, 
        setValueMonth,
        valueAmount,
        valueMonth,
        setIsMonthly,
        monthly,
        percent,
  	} = this.props;

    return (
      <div>
        <SliderQuantity
          min={1000}
          max={100000}
          step={1000}
          value={valueAmount}
          onChange={setValueAmount}
          text='Сумма'
        />
        <SliderQuantity
          min={3}
          max={36}
          step={1}
          value={valueMonth}
          onChange={setValueMonth}
          text='Срок'
        />
        <PaymentInterest
          setIsMonthly={setIsMonthly}
          monthly={monthly}
        />
        <InterestRate
          percent={percent}
        />
        <PassiveIncome />
      </div>
      );
    }
}

CalculateContainers.propTypes = {
	data: PropTypes.object.isRequired,
	setValueAmount: PropTypes.func.isRequired,
	setValueMonth: PropTypes.func.isRequired,
	setIsMonthly: PropTypes.func.isRequired,
};

export default CalculateContainers;