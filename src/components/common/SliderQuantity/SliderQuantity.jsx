import React, { Component } from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);
const Handle = Slider.Handle;
const style = { width: 300, margin: 20 };

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

function percentFormatter(v) {
  return `$${v}`;
}

export default class SliderQuantity extends Component {
  handleChange = (value) => {
    console.log(value);
  }
  render() {
  	const { min, max, step, text } = this.props;
    return (
      <div style={{ display: 'flex', width: 400 }}>
        <p style={{ flexGrow: 1 }}>{text}</p>
        <div style={style}>
          <SliderWithTooltip 
            // value={0}
            step={step}
            tipFormatter={percentFormatter}
            dotStyle={{
                borderColor: '#f1f1f1',
                backgroundColor: '#eeeeee',
            }}
            trackStyle={{
              backgroundColor: '#83c355',
            }}
            railStyle={{
                backgroundColor: '#f1f1f1',
            }}
            min={min}
            max={max}
            handle={handle}
          />
          <div style={{
          	'display': 'flex',
          	'justifyContent': 'space-between',
          	'fontSize': '14px',
          }}
          >
            <div>{min}</div>
            <div>{max}</div>
          </div>
        </div>
      </div>
        );
	}
}