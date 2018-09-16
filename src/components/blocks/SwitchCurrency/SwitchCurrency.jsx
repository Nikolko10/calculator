import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

class SwitchCurrency extends Component {
  render() {
  	const { changeCurrency, currentCurrency } = this.props;

    return (
      <div>
        <Button 
          active={currentCurrency === 'USD' ? true : false} 
          text='USD' 
          onClick={() => changeCurrency('USD')} 
        />
        <Button 
          active={currentCurrency === 'UAH' ? true : false} 
          text='UAH' 
          onClick={() => changeCurrency('UAH')} 
        />
      </div>
    );
  }
}

export default SwitchCurrency;