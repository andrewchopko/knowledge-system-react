const userReducerDefaultState = {
	id: '',
	email: '',
	password: '',
	isManager: false
};

const userReducer = (state = userReducerDefaultState, action) => {

	switch(action.type){
		case 'LOGIN':
			return {
				state,
				...action.login
			};
		case 'LOGOUT':
			return userReducerDefaultState;
		default:
			return state;
	};
};

export default userReducer;