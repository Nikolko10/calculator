import React, { Component } from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);
const Handle = Slider.Handle;
const style = { width: 300, margin: 10 };

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
    return (
      <div style={style}>
        <SliderWithTooltip 
          // value={0}
          tipFormatter={percentFormatter}
          dotStyle={{
              borderColor: '#f1f1f1',
              backgroundColor: '#eeeeee',
          }}
          defaultValue={3}
          trackStyle={{
            backgroundColor: '#83c355',
          }}
          railStyle={{
              backgroundColor: '#f1f1f1',
          }}
          min={0}
          max={10}
          handle={handle}
        />
      </div>
        );
	}
}