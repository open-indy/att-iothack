import 'babel-core/polyfill';

const initialState = {
	items: [
    {
      url: '#',
      name: 'Map'
    }
  ]
};

export default function map(state = initialState, action) {
	switch(action.type) {
		default:
			return state;
	}
}
