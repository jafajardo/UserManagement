import axios from 'axios';

import {
	GETUSERS,
	GETUSERDETAILS,
	UPDATEUSERDETAILS
} from '../common/Types';

export function GetUsers() {
	return dispatch => {
		const Users = [
			{ Id: 1, Username: 'user01@email.com', Groups: ['Admin', 'BasicUser'] },
			{ Id: 2, Username: 'user02@email.com', Groups: ['BasicUser'] },
		];

		dispatch({
			type: GETUSERS,
			payload: Users
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
	if (id === '1') {
		return {
			Firstname: 'User01',
			Surname: 'User',
			Mobile: '123123123'
		};
	} else
	if (id === '2') {
		return {
			Firstname: 'User02',
			Surname: 'AnotherUser',
			Mobile: '098765432'
		};
	}
}