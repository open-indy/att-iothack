import { CALL_API } from 'redux-api-middleware';
import * as APIHelper from './apiHelper';

// https://github.com/agraboso/redux-api-middleware#redux-standard-api-calling-actions

export function createFetchRequest(endpoint, types){
	return {
		[CALL_API]: APIHelper.getFetchOptions({
      method: 'GET',
      types, endpoint
    })
	};
}

export function createPOSTRequest(endpoint, types, body){
	return {
		[CALL_API]: APIHelper.getFetchOptions({
      method: 'POST',
      types, body, endpoint
    })
	};
}

export function createDeleteRequest(endpoint, types){
	return {
		[CALL_API]: APIHelper.getFetchOptions({
      method: 'DELETE',
      types, endpoint
    })
	};
}
