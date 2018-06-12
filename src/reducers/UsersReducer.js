import {
	GETUSERS
} from '../common/Types';

const INITIAL_STATE = {
	Users: []
};

export default (state = { Users: [] }, action) => {
	switch (action.type) {
	case GETUSERS: {
		
		return { ...state, Users: action.payload };
	}
	}
	return state;
};