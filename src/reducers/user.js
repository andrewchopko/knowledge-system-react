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
				id: action.login.id,
				email: action.login.email,
				password:action.login.password,
				isManager: action.login.isManager
			};
		case 'LOGOUT':
			return userReducerDefaultState;
		default:
			return state;
	};
};

export default userReducer;