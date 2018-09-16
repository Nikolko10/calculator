import React from 'react';
import Button from '../../common/Button/Button';

export default function({ changeCurrency, currentCurrency }) {
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