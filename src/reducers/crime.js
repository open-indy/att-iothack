import 'babel-core/polyfill';
import { CRIMES_REQUEST, CRIMES_SUCCESS, CRIMES_FAILURE } from '../constants/crime';

const initialState = {
  isFetching: false,
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

export default function crime(state = initialState, action={ type: '' }) {
  switch(action.type) {
    case CRIMES_REQUEST:
      return {
        crimes: state.crimes,
        isFetching: true
      };

    case CRIMES_SUCCESS:
      return {
        isFetching: false,
        crimes: action.payload.entry.map(crime =>
          Object.assign({}, crime, {
            // anything extra we want to translate from the original crime object...
          })
        )
      };

    case 'FETCH_CRIMES':
      return state;

    default:
      return state;
  }
}
