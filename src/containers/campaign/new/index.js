import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CreateCampaign from '../../../components/campaign/new/';
import * as CrimesActionCreator from '../../../actions/crime';

const propTypes = {
  crimes: PropTypes.array.isRequired
};

class CreateCampaignContainer extends Component {
  render() {
    return (
      <CreateCampaign { ...this.props } />
    );
  }
}

CreateCampaignContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
	return {
		crimes: [
      {
        value: 'drug-related',
        label: 'Drug-related'
      },
      {
        value: 'burglary',
        label: 'Burglary'
      },
      {
        value: 'homocide',
        label: 'Homocide'
      }
    ]
	};
};

const mapDispatchToProps = (dispatch) => {
	const ActionCreators = Object.assign({},
		CrimesActionCreator
	);

	return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCampaignContainer);
