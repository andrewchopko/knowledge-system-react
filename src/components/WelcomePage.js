import React from 'react';
import { connect } from 'react-redux';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { startLogin, signUp } from '../actions/user';

const WelcomPage = (props) => {
	return (
		<div className="wrapper">
			<h1>Welcome Page</h1>
			<div className="welcome-page__form-wrapper">
				<LogIn 
					onSubmit={(user) => {
						props.dispatch(startLogin(user)).then(() => {
							props.history.push('/forward');
						});
					}}
				/>
				<SignUp 
					onSubmit={(user) => {
						props.dispatch(signUp(user)).then(() => {
							props.history.push('/forward');
						});
					}}
				/>
			</div>
		</div>
	);
};

export default connect()(WelcomPage);