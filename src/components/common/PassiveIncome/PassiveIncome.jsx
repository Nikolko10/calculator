import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PassiveIncome extends Component {
  render() {
  	const { wholeTerm, everyMonthly } = this.props;
    return (
      <div>
        <h2>Ваш пасивный доход</h2>
        <div>
          <p>{wholeTerm}</p>
          <p className='small_text'>за весь срок вложения</p>
        </div>
        <div>
          <p>{everyMonthly}</p>
          <p className='small_text'>ежемесячно</p>
        </div>
      </div>
    );
  }
}

export default PassiveIncome;