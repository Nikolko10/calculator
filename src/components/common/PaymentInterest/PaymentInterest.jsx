import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonPercent from '../ButtonPercent/ButtonPercent';

class PaymentInterest extends Component {
  render() {
  	const { setIsMonthly, monthly } = this.props;
    return (
      <div className='flex_block'>
        <p>Выплата процентов</p>
        <div>
          <ButtonPercent
            active={monthly ? true : false} text='ежемесячно'
            onClick={() => { setIsMonthly(true); }}
            className='button'
          />
          <ButtonPercent
            active={monthly ? false : true} text='в конце срока'
            onClick={() => { setIsMonthly(false); }}
            className='button'
          />
        </div>
      </div>
    );
  }
}

export default PaymentInterest;