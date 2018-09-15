import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CalculateContainers extends Component {
	render() {
		console.log(this.props);
		return <div>dvsvs</div>;
	}
}

CalculateContainers.propTypes = {
	data: PropTypes.object.isRequired,
};

export default CalculateContainers;