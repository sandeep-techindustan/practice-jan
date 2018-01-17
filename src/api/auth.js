//File Name: auth.js
//Path: src/api/
//Description: all the API functions related to auth are listed below.


import { apiPost, apiGet, apiReq, apiPut, randomString } from '../utils';
import qs from 'query-string';
import {formTypes, authApiUrl, apiUrl} from '../constants';

const headers = {
	'Content-Type': formTypes.urlencoded,
	'X-Parse-Revocable-Session' : 1,
	'X-Parse-Application-Id' : formTypes.appId
}

//Function Name: loginAPI
//Parameters: user
//Description: This function is used hit login API.
export function loginAPI (user) {
	const data = qs.stringify(user); // because api doesn't support application/json
	return apiGet('parse/login',user, headers);
}

//Function Name: signupAPI
//Parameters: user
//Description: This function is used to hit sign up API.
export function signupAPI (user) {
	const data = qs.stringify(user); // because api doesn't support application/json
	return apiPost('parse/users', data, headers);
	
}

//Function Name: changePasswordAPI
//Parameters: user
//Description: This function is used to hit change password API.
export function changePasswordAPI (user) {
	const data = qs.stringify(user); // because api doesn't support application/json
	return apiPost('parse/requestPasswordReset',data,headers);
	
}

//Function Name: uploadImageAPI
//Parameters: obj
//Description: This function is used to hit upload Image API.
export function uploadImageAPI(obj) {
	return apiReq(`${apiUrl}parse/files/${randomString()}.jpg`, obj, 'post', {
		'Content-Type': 'image/png',
		'X-Parse-Revocable-Session' : 1,
		'X-Parse-Application-Id' : formTypes.appId
	});
	
}

//Function Name: editProfileAPI
//Parameters: user, newUser
//Description: This function is used to hit edit profile API.
export function editProfileAPI (user, newUser) {
	return apiPut(`parse/users/${user.objectId}`, newUser, {
		'Content-Type': formTypes.json,
		'X-Parse-Application-Id' : formTypes.appId,
		'X-Parse-Session-Token' : user.sessionToken
	});
	
}

//Function Name: chcekTokenAPI
//Parameters: obj
//Description: This function is used to hit check token API.
export function checkTokenAPI (obj) {

	const data = qs.stringify(obj); // because api doesn't support application/json

	return apiReq(`${apiUrl}check/token`, data, 'post', {
		'Content-Type': formTypes.urlencoded
	});
	
}