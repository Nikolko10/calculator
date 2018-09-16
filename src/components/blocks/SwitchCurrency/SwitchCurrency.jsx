import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

class SwitchCurrency extends Component {
  render() {
  	const { changeCurrency, currentCurrency } = this.props;

    return (
      <div className='flex_block'>
        <h2>Рассчитайте пассивный доход</h2>
        <div>
          <Button 
            active={currentCurrency === 'USD' ? true : false} 
            text='USD' 
            onClick={() => changeCurrency('USD')} 
            className='button'
          />
          <Button 
            active={currentCurrency === 'UAH' ? true : false} 
            text='UAH' 
            onClick={() => changeCurrency('UAH')} 
            className='button'
          />
        </div>
      </div>
    );
  }
}

export default SwitchCurrency;