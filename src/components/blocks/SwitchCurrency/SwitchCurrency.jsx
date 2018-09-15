import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

class SwitchCurrency extends Component {
  render() {
  	const { changeCurrency } = this.props;

    return (
      <div>
        <Button text='USD' onClick={() => changeCurrency('USD')} />
        <Button text='UAH' onClick={() => changeCurrency('UAH')} />
      </div>
    );
  }
}

export default SwitchCurrency;