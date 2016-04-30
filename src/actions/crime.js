import { CRIMES_REQUEST, CRIMES_SUCCESS, CRIMES_FAILURE } from '../constants/crime';
import { createFetchRequest } from '../common/api';

export function fetchTemplates() {
	return createFetchRequest('/path/to/endpoint/for/crimes', [CRIMES_REQUEST, CRIMES_SUCCESS, CRIMES_FAILURE]);
}
