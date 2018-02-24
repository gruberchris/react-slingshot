import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';
import FuelSavingsForm from '../components/FuelSavingsForm';

export class FuelSavingsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.saveFuelSavingsThunk = this.saveFuelSavingsThunk.bind(this);
    this.calculateFuelSavings = this.calculateFuelSavings.bind(this);
  }

  saveFuelSavingsThunk = () => {
    this.props.actions.saveFuelSavingsThunk(this.props.fuelSavings);
  }

  calculateFuelSavings = e => {
    this.props.actions.calculateFuelSavings(this.props.fuelSavings, e.target.name, e.target.value);
  }

  render() {
    return (
      <FuelSavingsForm
        onSaveClick={this.saveFuelSavingsThunk}
        onChange={this.calculateFuelSavings}
        fuelSavings={this.props.fuelSavings}
      />
    );
  }
}

FuelSavingsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FuelSavingsPage);
