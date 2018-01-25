import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<h1>Knowledge</h1>
		<NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink>
		<NavLink to="/project" activeClassName="is-active">Create Project</NavLink>
		<NavLink to="/profile" activeClassName="is-active">Create Profile</NavLink>
	</header>
);

export default Header;