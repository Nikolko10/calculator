import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from '../store/actions/dataAction';

export default function (ComponentContainer, ComponentSwitch) {
class currentСurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'UAH',
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  changeCurrency = (currency) => {
  	this.setState({ currency });
  }

  render() {
    const { currency } = this.state;
    const { data } = this.props;

    return Object.keys(data).length !== 0 ? (
      <Fragment>
        <ComponentSwitch 
          {...this.state}
          changeCurrency={this.changeCurrency} 
        />
        <ComponentContainer 
          data={currency === 'UAH' ? data.uah : data.usd} 
        />
      </Fragment>
    ) : <div>Loading...</div>;
  }
}

const mapStateToProps = (state) => {
  const { data } = state.data;
  return {
    data,
  };
};

const mapDispatchToProps = dispatch => ({
	getData: () => dispatch(getData()),
});

currentСurrency.propTypes = {
	data: PropTypes.object.isRequired,
	getData: PropTypes.func.isRequired,
};

return connect(mapStateToProps, mapDispatchToProps)(currentСurrency);
}