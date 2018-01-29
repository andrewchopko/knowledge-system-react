import database from '../firebase/firebase';

export const login = (login) => {
	return {
		type: 'LOGIN',
		login
	};
};

export const logout = () => {
	return {
		type: 'LOGOUT'
	};
};

export const signUp = (signUpData = {}) => {
	return (dispatch) => {
		const { 
			email = '', 
			password = '', 
			isManager = false
		} = signUpData;

		const loginData = { email, password, isManager };
		database.ref('users').push(loginData).then((ref) => {
			dispatch(login({
				id: ref.key,
				...loginData
			}));
		});
	};
};

export const startLogin = (loginDataOne = {}) => {
	return (dispatch) => {
		return database.ref('users').once('value').then((snapshot) => {
			const loginD = [];

			snapshot.forEach((childSnaphot) => {
				loginD.push({
						id: childSnaphot.key,
						...childSnaphot.val()
				});
			});
			console.log("all users", loginD);
			const actualData = loginD.find((login) => login.email === loginDataOne.email && login.password === loginDataOne.password);
			dispatch(login(actualData));
			console.log("data", actualData);
		});
	};
};