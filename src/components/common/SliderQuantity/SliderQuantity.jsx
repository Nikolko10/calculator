import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

function percentFormatter(v, currency) {
  return currency === 'UAH' ? `₴${v}` : currency ? `$${v}` : v;
}

export default class SliderQuantity extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		value: this.props.value,
  	};
  }

  handleChange = (value) => {
    this.setState({ value }, () => {
    	this.props.onChange(value);
    });
  }
  render() {
  	const { min, max, step, text, value, onChange, currency } = this.props;
    return (
      <div style={{ display: 'flex', width: 400 }}>
        <p style={{ flexGrow: 1 }}>{text}</p>
        <div style={style}>
          <SliderWithTooltip 
            value={this.state.value}
            step={step}
            tipFormatter={v => percentFormatter(v, currency)}
            onChange={this.handleChange}
            tipProps={{
              placement: 'top',
              visible: true,
            }}
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
            <div className='small_text'>{currency === 'UAH' ? `₴${min}` : currency ? `$${min}` : `${min} мес`}</div>
            <div className='small_text'>{currency === 'UAH' ? `₴${max}` : currency ? `$${max}` : `${max} мес`}</div>
          </div>
        </div>
      </div>
        );
	}
}

SliderQuantity.defaultProps = {
  currency: '',
};

SliderQuantity.propTypes = {
  currency: PropTypes.string.isRequired,
};