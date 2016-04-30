import 'babel-core/polyfill';

const URI = 'https://localhost';
const AMP = '&';
const STRING = 'string';
const PROTOCOL_REGEX = /(http|https)\:\/\/.+/;
const PREFIX_REGEX = /^\//;
const END_SLASH = '/';
const UNDEFINED = 'undefined';

const defaults = {
	headers: {
		'X-CSRF-Token': '',
		'Content-Type': 'application/json'
	},
	credentials: 'include'
};

const getPrefixFromEndpoint = (endpoint) => PREFIX_REGEX.test(endpoint) ? '' : END_SLASH;

export const getQueryString = (options) => {
	return Object.keys(options || {}).map(
		key => `${ key }=${ encodeURIComponent(options[key]) }`
	).join(AMP);
};

export const getFetchOptions = (options) => {
	let settings = Object.assign({}, defaults, options);

	if(settings.body && typeof settings.body !== STRING) {
		settings.body = JSON.stringify(settings.body);
	}

	if(typeof window !== UNDEFINED && !window.Mobile.isNode) {
		return settings;
	}

	if(PROTOCOL_REGEX.test(settings.endpoint)) {
		return settings;
	}

  settings.endpoint = [URI, getPrefixFromEndpoint(settings.endpoint), settings.endpoint].join('');

  return settings;
};
