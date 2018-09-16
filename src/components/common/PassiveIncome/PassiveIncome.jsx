import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PassiveIncome extends Component {
  render() {
  	const { wholeTerm, everyMonthly } = this.props;
    return (
      <div>
        <p>Ваш пасивный доход</p>
        <div>
          <p>{wholeTerm}</p>
          <p>за весь срок вложения</p>
        </div>
        <div>
          <p>{everyMonthly}</p>
          <p>ежемесячно</p>
        </div>
      </div>
    );
  }
}

export default PassiveIncome;