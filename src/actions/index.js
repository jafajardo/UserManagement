import axios from 'axios';

import {
	GETUSERS,
	GETUSERDETAILS,
	UPDATEUSERDETAILS
} from '../common/Types';

import {
	WEBAPI_ENDPOINT,
	USERS_CONTROLLER
} from '../config';

export function GetUsers() {
	return dispatch => {
		const Users = [
			{ Id: 1, Username: 'user01@email.com', Groups: ['Admin', 'BasicUser'] },
			{ Id: 2, Username: 'user02@email.com', Groups: ['BasicUser'] },
		];

		axios.get(`${WEBAPI_ENDPOINT}${USERS_CONTROLLER}`)
			.then(response => {
				dispatch({
					type: GETUSERS,
					payload: response.data
				});
			});
	};
}

export function GetUserDetails(id) {
	return dispatch => {
		const UserDetails = getDetails(id);

		dispatch({
			type: GETUSERDETAILS,
			payload: UserDetails
		});
	};
}

export function UpdateUserDetails(id, userDetails) {
	return dispatch => {
		const UserDetails = userDetails;

		dispatch({
			type: UPDATEUSERDETAILS,
			payload: UserDetails
		});
	};
}

function getDetails(id) {
	if (id === 'a16dd0a7-c9f9-423b-8bc8-da4808d5dc73') {
		return {
			Firstname: 'User01',
			Surname: 'User',
			Mobile: '123123123'
		};
	} else
	if (id === '52d365a7-8e07-4874-bf03-df5e2aa07294') {
		return {
			Firstname: 'User02',
			Surname: 'AnotherUser',
			Mobile: '098765432'
		};
	}
}