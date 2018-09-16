import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SliderQuantity from '../components/common/SliderQuantity/SliderQuantity';
import PaymentInterest from '../components/blocks/PaymentInterest/PaymentInterest';
import PassiveIncome from '../components/blocks/PassiveIncome/PassiveIncome';
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
        everyMonthly,
        wholeTerm,
  	} = this.props;

    return (
      <div>
        <SliderQuantity
          currency={data.currency}
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
        <PassiveIncome
          everyMonthly={everyMonthly}
          wholeTerm={wholeTerm}
          currency={data.currency}
        />
        <button className='invest'><Link to='/results'>Инвестировать</Link></button>
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