import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CreateCampaign from '../../../components/campaign/new/';
import * as CrimesActionCreator from '../../../actions/crime';

const propTypes = {
  crimes: PropTypes.array.isRequired
};

class CreateCampaignContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CreateCampaign { ...props } />
    );
  }
}

CreateCampaignContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
	return {
		crimes: state.crime.crimes
	};
};

const mapDispatchToProps = (dispatch) => {
	const ActionCreators = Object.assign({},
		CrimesActionCreator
	);

	return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCampaignContainer);
