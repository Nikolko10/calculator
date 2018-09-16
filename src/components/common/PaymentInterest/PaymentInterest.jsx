import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonPercent from '../ButtonPercent/ButtonPercent';

class PaymentInterest extends Component {
  render() {
  	const { setIsMonthly, monthly } = this.props;
    return (
      <div>
        <p>Выплата процентов</p>
        <ButtonPercent
          active={monthly ? true : false} text='ежемесячно'
          onClick={() => { setIsMonthly(true); }}
        />
        <ButtonPercent
          active={monthly ? false : true} text='в конце срока'
          onClick={() => { setIsMonthly(false); }}
        />
      </div>
    );
  }
}

export default PaymentInterest;