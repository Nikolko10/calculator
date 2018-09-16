import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function({ wholeTerm, everyMonthly, currency }) {
    return (
      <div>
        <h2>Ваш пасивный доход</h2>
        <div className='passive'>
          <div>
            <p>
              {currency === 'UAH' ? 
              `₴${(wholeTerm + '').replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}` : currency ? 
              `$${(wholeTerm + '').replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}` : ''}
            </p>
            <p className='small_text'>за весь срок вложения</p>
          </div>
          <div>
            <p>
              {currency === 'UAH' ? 
              `₴${(everyMonthly + '').replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}` : currency ? 
              `$${(everyMonthly + '').replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}` : ''}
            </p>
            <p className='small_text'>ежемесячно</p>
          </div>
        </div>
      </div>
    );
}