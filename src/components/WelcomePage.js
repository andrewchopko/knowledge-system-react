import React from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { startLogin, signUp } from '../actions/user';

const WelcomPage = (props) => {
	return (
		<div>
			<h1>Welcome Page</h1>
			<LogIn 
				onSubmit={(user) => {
					props.dispatch(startLogin(user));
					props.history.push('/forward');
					console.log("onLogin", user);
				}}
			/>
			<SignUp 
				onSubmit={(user) => {
					props.dispatch(signUp(user));
					{ user.isManager ? props.history.push('/projects') : props.history.push('/profile')};
					console.log("onSubmit", user);
				}}
			/>
		</div>
	);
};

export default connect()(WelcomPage);