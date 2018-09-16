import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InterestRate extends Component {
  render() {
  	const { percent } = this.props;
    return (
      <div className='flex_block'>
        <p>Процентная ставка:</p>
        <div>
          <p>{`${percent}%`}</p>
          <p className='small_text'>зависит от срока, валюты и формата выплаты процентов</p>
        </div>
      </div>
    );
  }
}

export default InterestRate;