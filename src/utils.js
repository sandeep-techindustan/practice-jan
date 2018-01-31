//File Name: utils.js
//Path: src/
//Description: This file contains utility function for various API calls, local storage, etc...
import React from 'react'
import axios from 'axios';
import {Alert} from 'elemental'
import {apiKey, apiUrl, defaultLang} from './constants';
import moment from 'moment'
import crypto from 'crypto';

//Function Name: logOut
//Description: This function is used to logout user, this function will remove users session from local storage.
export function logOut () {
	return new Promise ((res, rej) => {
		saveObject('session', {});
		localStorage.removeItem('session')
		res(true);
	})
}

//Function Name: isLoggedIn
//Description: This function is used to check whether the user is logged in or not.
export function isLoggedIn() {
	let session = getObject('user');

	let token = session && session.sessionToken;

	return session && session.sessionToken;
}

//Function Name: logOut
//Description: This function is used to logout.
export function logout() {
	saveUser(null);
	return new Promise ((res, rej) => res(true))
}

//Function Name: getHeaders
//Description: This function is used to interact with headers if any available.
export function getHeaders () {
	return {}
}

//Function Name: getUser
//Description: This function is used collect user infomation (especially token) if user is logged in.
export function getUser(){
	if(window && window.localStorage) {
		return window.localStorage.getObject('user');
	}

	return null;
}

//Function Name: saveUser
//Parameters: value
//Description: This function is used store the user information in local storage if user is valid
export function saveUser(value){
	if(window && window.localStorage) {
		return window.localStorage.saveObject('user', value);
	}

	return null;
}

//Function Name: saveObject
//Parameters: key, value
//Description: This function is used to save object in the local storage.
export function saveObject (key, value) {
	if(window && window.localStorage) {
		window.localStorage.saveObject(key, value);
	}
}

//Function Name: removeObject
//Parameters: key
//Description: This function is used to remove object from the local storage.
export function removeObject (key) {
	if(window && window.localStorage) {
		window.localStorage.removeItem(key);
	}
}

//Function Name: getObject
//Parameters: key
//Description: This function is used to get the object from the local storage.
export function getObject(key) {
	if(window && window.localStorage) {
		return window.localStorage.getObject(key);
	}

	return null;
}

//Function Name: generateUrl
//Parameters: path
//Description: This function is used to generate url for api call.
export function generateUrl (path) {

	return apiUrl + path;
}

//Function Name: apiReq
//Parameters: endPoint, data, method, headers
//Description: This function is used to send api request.
export function apiReq (endPoint, data, method, headers) {
  return new Promise ((res, rej) => {

  	headers = {
  		...getHeaders(),
		...headers
  	}
  	if(method == 'get') {
  		data = {
  			params: data,
  			headers
  		}
  	}
  	//sending axios api request here.
  	axios[method](endPoint, data, {headers}).then((result) => {
	  let {data} = result;

	  // because api has inconsistent data and error reporting pattern

	  if(data.status === false) {
		return rej(data);
	  }

	  return res(data);
	}).catch((err) => {
	  return rej(err);
	});
  })
}

//Function Name: apiPost
//Parameters: endPoint, data, headers
//Description: This function is used to send api POST request.
export function apiPost (endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'post', headers);
}

//Function Name: apiDelete
//Parameters: endPoint, data, headers
//Description: This function is used to send api DELETE request.
export function apiDelete (endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'delete', headers);
}

//Function Name: apiGet
//Parameters: endPoint, data, headers
//Description: This function is used to send api GET request.
export function apiGet (endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'get', headers);
}

//Function Name: apiPut
//Parameters: endPoint, data, headers
//Description: This function is used to send api PUT request.
export function apiPut (endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'put', headers);
}

//Function Name: multiPartData
//Parameters: data
//Description: This function is used to send data in multipart form.
export function multiPartData(data) {

	let multiPart = new FormData();

	for (let prop in data) {
		multiPart.append(prop, data[prop]);
	}

	return multiPart;
}

//Function Name: randomString
//Parameters: len
//Description: This function is used to generate random String for email verification.
export function randomString(len = 5) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < len; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
