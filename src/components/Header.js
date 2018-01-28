import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/user';

const Header = (props) => {

	const onLogOut = () => {
		state.dispatch(logout);
	}
	
	if (!!props.user.id && props.user.isManager === false){
		if (!!props.user.id && props.user.isManager === true){
		return (
			<header>
				<h1>Knowledge</h1>
				<button onclick={onLogOut}>Log Out</button>
				<NavLink to="/project" activeClassName="is-active">Create Project</NavLink>
				<NavLink to="/projects" activeClassName="is-active">All Projects</NavLink>
			</header>
		);
	}
			console.log(props.user);
			return (
			<header>
				<h1>Knowledge</h1>
				<button onclick={onLogOut}>Log Out</button>
				<NavLink to="/profile/{props.user.id}" activeClassName="is-active">My Profile</NavLink>
				<NavLink to="/profile" activeClassName="is-active">Create Profile</NavLink>
			</header>
		);
	} else {
		return (
			<header>
				<h1>Knowledge</h1>
				<NavLink to="/" activeClassName="is-active">WelcomePage</NavLink>
			</header>
		);

	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(Header);