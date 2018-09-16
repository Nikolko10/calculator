import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Results from '../components/blocks/Results/Results';

class ResultsContainer extends Component {
  render() {
    return (
      <div>
        <Results {...this.props} />
      </div>
      );
    }
}

const mapStateToProps = (state) => {
  const {
    currentCurrency,
    valueMonth,
    valueAmount,
    percent,
    monthly,
    wholeTerm,
    everyMonthly,
  } = state.currentDataUser;

  return {
    currentCurrency,
    valueMonth,
    valueAmount,
    percent,
    monthlyText: monthly ? 'ежемесячно' : 'в конце срока',
    wholeTerm,
    everyMonthly,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);

// ResultsContainer.propTypes = {
//  data: PropTypes.object.isRequired,
// };