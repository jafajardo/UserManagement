import {
	GETUSERS,
	GETUSERDETAILS,
	UPDATEUSERDETAILS
} from '../common/Types';

const INITIAL_STATE = {
	Users: [],
	UserDetails: {}
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case GETUSERS: {
		return { ...state, Users: action.payload };
	}
	case GETUSERDETAILS: {
		return { ...state, UserDetails: action.payload };
	}
  case UPDATEUSERDETAILS:
  console.dir(action.payload)
		return { ...state, UserDetails: action.payload };
	}
	return state;
};