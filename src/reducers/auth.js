//File Name: auth.js
//Path: src/reducers/
//Description: This file contains auth reducer and initial structure of user.
import types from '../actions/actionTypes';
import {saveUser, getUser} from '../utils'

let initState = {
	fetching:false,
	user: {},
	image: {
		name: '',
		url: ''
	},
	session: {},
	windowSize:{
		height: 0,
		width: 0,
	},
}

const user = getUser();

if(user) {
	initState = {
		...initState,
		user
	}
}

export default function(state = initState, action){

	switch (action.type) {
		case types.AUTH_SIGNUP_SUCCESS :
			return {...state,fetching: false, session : action.payload}
		case types.AUTH_SIGNUP :
			return {...state, fetching: true}
		case types.AUTH_SIGNUP_FAILED :
			return {...state, fetching: false}
		case  types.AUTH_SUCCESS : 
			let newUser = {...action.payload};
			saveUser(newUser)
			return {...state,fetching: false, user : newUser}
		case types.AUTH_FAILED : 
			return {...state, fetching: false}
		case types.AUTH_LOGIN :
			 return {...state, fetching: true}
		case types.AUTH_CHANGE_PASSWORD : 
			return {...state, fetching: true}
		case types.AUTH_CHANGE_PASSWORD_SUCCESS : 
			return {...state,fetching: false, user : action.payload}
		case types.AUTH_CHANGE_PASSWORD_FAILED : 
			return {...state,fetching: false }
		case types.UPLOAD_IMAGE:
			return { ...state, fetching: true}
		case types.UPLOAD_IMAGE_SUCCESS: 
			newUser = { ...state.user, photo: action.payload }
			saveUser(newUser)
			return { ...state, fetching: false, image: action.payload, user: newUser}
		case types.UPLOAD_IMAGE_FAILED:
			return { ...state, fetching: false }
		default :
			return {...state}
	}

}