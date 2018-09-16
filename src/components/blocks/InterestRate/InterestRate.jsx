import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InterestRate extends Component {
  render() {
  	const { percent } = this.props;
    return (
      <div>
        <p>Процентная ставка: {`${percent}%`}</p>
      </div>
    );
  }
}

export default InterestRate;