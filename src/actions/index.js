import axios from 'axios';

import {
	GETUSERS
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