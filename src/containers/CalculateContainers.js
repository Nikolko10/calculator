import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CalculateContainers extends Component {
	render() {
		return <div>container</div>;
	}
}

const mapStateToProps = (state) => {
  const { data } = state.currency;
  return {
  	data,
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
    CalculateContainers,
);

CalculateContainers.propTypes = {
	data: PropTypes.object.isRequired,
};