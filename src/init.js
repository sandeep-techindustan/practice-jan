//File Name: init.js
//Path: src/
//Description: This file contains functionality which interacts with the local storage of the browser.
if(window && window.Storage) {
	Storage.prototype.saveObject = function (key, value) {
		this.setItem(key, JSON.stringify(value));
	}
	Storage.prototype.getObject = function (key) {
		let value = this.getItem(key);
		return JSON.parse(value) || null;
	}
}

//Function Name: capitalize
//Description: This function is used for capitalization purpose.
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
