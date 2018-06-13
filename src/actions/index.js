import axios from 'axios';

import {
	GETUSERS,
	GETUSERDETAILS,
	UPDATEUSERDETAILS
} from '../common/Types';

import {
	WEBAPI_ENDPOINT,
	USERS_CONTROLLER,
	UPDATE_USER_DETAILS
} from '../config';

export function GetUsers() {
	return dispatch => {
    
		axios.get(`${WEBAPI_ENDPOINT}${USERS_CONTROLLER}`)
			.then(response => {
				dispatch({
					type: GETUSERS,
					payload: response.data
				});
			});
      
	};
}

export function GetUserDetails(username) {
	return dispatch => {
		
		axios.get(`${WEBAPI_ENDPOINT}${USERS_CONTROLLER}/${username}`)
			.then(response => {
				dispatch({
					type: GETUSERDETAILS,
					payload: response.data
				});
			});
		
	};
}

export function UpdateUserDetails(user) {
	return dispatch => {
		console.dir(user);
		const headers = {
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			}
		};
		axios.post(`${WEBAPI_ENDPOINT}${USERS_CONTROLLER}${UPDATE_USER_DETAILS}`, 
			{ 
				"Username": user.Username, 
				"Firstname": user.Firstname,
				"Surname": user.Surname,
				"Mobile": user.Mobile
			})
			.then(response => {
				console.dir(response);
				dispatch({
					type: UPDATEUSERDETAILS,
					payload: response.data
				});
			});
		
	};
}
