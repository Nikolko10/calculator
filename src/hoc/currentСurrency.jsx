import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  getData,
  setValueAmount,
  setValueMonth,
  changeCurrency,
  setIsMonthly,
} from '../store/actions/dataAction';

export default function (ComponentContainer, ComponentSwitch) {
  class currentСurrency extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currency: this.props.currentDataUser,
      };
    }
  
    componentDidMount() {
      this.props.getData();
    }
  
    changeCurrency = (currency) => {
    	this.props.changeCurrency(currency);
    }
  
    render() {
      const { currency } = this.state;
      const { 
        data,
        setValueAmount,
        setValueMonth,
        valueMonth,
        valueAmount,
        changeCurrency,
        currentCurrency,
        setIsMonthly,
        monthly,
        percent,
      } = this.props;

      return Object.keys(data).length !== 0 ? (
        <Fragment>
          <ComponentSwitch 
            currentCurrency={currentCurrency}
            changeCurrency={this.changeCurrency} 
          />
          <ComponentContainer 
            data={currentCurrency === 'UAH' ? data.uah : data.usd}
            setValueAmount={setValueAmount}
            setValueMonth={setValueMonth}
            valueAmount={valueAmount}
            valueMonth={valueMonth}
            setIsMonthly={setIsMonthly}
            monthly={monthly}
            percent={percent}
          />
        </Fragment>
      ) : <div>Loading...</div>;
    }
  }
  
  const mapStateToProps = (state) => {
    const { data } = state.data;
    const { 
    	valueMonth, 
    	valueAmount, 
    	currentDataUser,
    	currentCurrency,
    	monthly,
    	percent,
    } = state.currentDataUser;
    return {
      data,
      valueMonth,
      valueAmount,
      currentDataUser,
      currentCurrency,
      monthly,
      percent,
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getData()),
    setValueAmount: value => dispatch(setValueAmount(value)),
    setValueMonth: value => dispatch(setValueMonth(value)),
    changeCurrency: value => dispatch(changeCurrency(value)),
    setIsMonthly: bool => dispatch(setIsMonthly(bool)),
  });
  
  currentСurrency.propTypes = {
    data: PropTypes.object.isRequired,
    getData: PropTypes.func.isRequired,
    setValueAmount: PropTypes.func.isRequired,
    setValueMonth: PropTypes.func.isRequired,
    changeCurrency: PropTypes.func.isRequired,
    currentCurrency: PropTypes.string.isRequired,
    setIsMonthly: PropTypes.func.isRequired,
  };

return connect(mapStateToProps, mapDispatchToProps)(currentСurrency);
}