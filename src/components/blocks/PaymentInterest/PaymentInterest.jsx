import React from 'react';
import ButtonPercent from '../../common/ButtonPercent/ButtonPercent';

export default function({ setIsMonthly, monthly }) {
    return (
      <div className='flex_block'>
        <p>Выплата процентов</p>
        <div>
          <ButtonPercent
            active={monthly ? true : false} text='ежемесячно'
            onClick={() => { setIsMonthly(true); }}
            className='button'
          />
          <ButtonPercent
            active={monthly ? false : true} text='в конце срока'
            onClick={() => { setIsMonthly(false); }}
            className='button'
          />
        </div>
      </div>
    );
}