import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
  render() {
    const {
      currentCurrency,
      valueMonth,
      valueAmount,
      percent,
      monthlyText,
      wholeTerm,
      everyMonthly,
    } = this.props;

    return (
      <div className='main results'>
        <div>
          <div className='title'>Валюта:</div>
          <div>{currentCurrency}</div>
        </div>
        <div>
          <div className='title'>Сумма:</div>
          <div>{valueAmount}</div>
        </div>
        <div>
          <div className='title'>Срок:</div>
          <div>{valueMonth}</div>
        </div>
        <div>
          <div className='title'>Выплата процетнов:</div>
          <div>{monthlyText}</div>
        </div>
        <div>
          <div className='title'>Процентная ставка:</div>
          <div>{percent}</div>
        </div>
        <div>
          <div className='title'>Доход:</div>
          <div className='count'>
            <div>
              <p className='title'>За весь срок вложения</p>
              <p>{wholeTerm}</p>
            </div>
            <div>
              <p className='title'>Ежемесячно</p>
              <p>{everyMonthly}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;