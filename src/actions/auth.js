//File Name: auth.js
//Path: src/actions/
//Description: all the actions related to auth are listed below.
import types from './actionTypes';
import store from '../store';
import {
	loginAPI,
	signupAPI,
	forgotPasswordAPI,
	changePasswordAPI,
	editProfileAPI,
	checkTokenAPI,
	uploadImageAPI
} from '../api/auth';
import {multiPartData} from '../constants';
import {formTypes} from '../constants';
const {dispatch} = store;

//Function Name: login
//Parameters: payload
//Description: This function is used for Login.
export function login (payload) {
	dispatch({
		type: types.AUTH_LOGIN
	})

	return new Promise ((response, rej) => loginAPI(payload)
		.then(res => {
			dispatch({
				type: types.AUTH_SUCCESS,
				payload: res
			})
			
			return response(res)
		})
		.catch(err => {
			dispatch({
				type: types.AUTH_FAILED
			})

			if(err)
				showError(err)
			return rej(err)
		})
	)

}

//Function Name: signup
//Parameters: payload
//Description: This function is used for signup.
export function signup(payload) {
	dispatch({
		type: types.AUTH_SIGNUP
	})

	return new Promise ((response, rej) => signupAPI(payload)
		.then(res => {
			dispatch({
				type : types.AUTH_SIGNUP_SUCCESS,
				payload: res
			})
			
			return response(res)

		})
		.catch(err => {
			dispatch({
				type: types.AUTH_SIGNUP_FAILED
			})

			showError(err)
			return rej(err)
		})
	)
}

//Function Name: login
//Parameters: payload
//Description: This function is used for Login.
export function forgotPassword (payload) {

	dispatch({
		type: types.AUTH_FORGOT_PASSWORD
	})

	return new Promise ((response, rej) => forgotPasswordAPI(payload)
		.then(res => {

			dispatch({
				type: types.AUTH_FORGOT_SUCCESS,
				payload: res.response
			})

			return response(res)

		})
		.catch(err => {

			dispatch({
				type: types.AUTH_INVALID_EMAIL
			})

			showError(err)
			return rej(err)
		})
	)

}

//Function Name: setUser
//Parameters: payload
//Description: This function is used for setUser.
export function setUser (payload) {
	dispatch({
		type: types.AUTH_SET_USER,
		payload: payload
	})
}

//Function Name: changePassword
//Parameters: payload
//Description: This function is used to change password.
export function changePassword (payload) {

	dispatch({
		type: types.AUTH_CHANGE_PASSWORD
	})

	return new Promise ((response, rej) => changePasswordAPI(payload)
		.then(res => {

			dispatch({
				type: types.AUTH_CHANGE_PASSWORD_SUCCESS,
				payload: res.response
			})
			
			return response(res)
		})
		.catch(err => {

			dispatch({
				type: types.AUTH_CHANGE_PASSWORD_FAILED
			})

			showError(err)
			return rej(err)
		})
	)

}

//Function Name: editProfile
//Parameters: payload
//Description: This function is used for edititng user profile.
export function editProfile (obj, payload) {

	dispatch({
		type: types.AUTH_EDIT_PROFILE
	})

	return new Promise ((response, rej) => editProfileAPI(obj, payload)
		.then(res => {

			dispatch({
				type: types.AUTH_EDIT_PROFILE_SUCCESS,
				payload: res.response
			})

			return response(res)

		})
		.catch(err => {

			dispatch({
				type: types.AUTH_EDIT_PROFILE_FAILED
			})

			showError(err)
			return rej(err)
		})
	)

}

export function checkToken (payload) {

	dispatch({
		type: types.CHECK_TOKEN
	})

	return new Promise ((response, rej) => checkTokenAPI(payload)
		.then(res => {

			dispatch({
				type: types.CHECK_TOKEN_SUCCESS,
				payload: res
			})

			return response(res)

		})
		.catch(err => {

			dispatch({
				type: types.CHECK_TOKEN_FAILED
			})

			return rej(err)
		})
	)

}

export function checkTokenSuccess() {
	dispatch({
		type: types.GET_TOKEN
	})
}
