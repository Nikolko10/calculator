import React, { Component } from 'react';

export default function({ percent } ) {
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