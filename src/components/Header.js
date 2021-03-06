import React from 'react';
import { NavLink, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/user';

const Header = (props) => {
	if(props.user.id === ""){
		return ( 
			<div>
				<Redirect to="/" />
				<header className="header">
					<h1 className="header__title">Knowledge System</h1>
				</header>
			</div>
		);
	}

	if (props.user.id !== "" && props.user.isManager === false){
			return (
			<header className="header">
				<div className="header__top-block">
					<Link className="logo-link" to={`/profile/${props.user.id}`}><h1 className="header__title">Knowledge System</h1></Link>
					<div><button className="header__top-block__button" onClick={(e) => props.onLogout()}>Log Out</button></div>
				</div>
				<div className="header__menu">
					<div>
						<NavLink to="/profile" className="header__menu-link" activeClassName="is-active">Create Profile</NavLink>
					</div>
				</div>
			</header>
		);
	} 
	if (props.user.id !== "" && props.user.isManager === true){
		return (
			<header className="header">
				<div className="header__top-block">
					<Link className="logo-link" to="/projects"><h1 className="header__title">Knowledge System</h1></Link>
					<div><button className="header__top-block__button" onClick={(e) => props.onLogout()}>Log Out</button></div>
				</div>
				<div className="header__menu">
					<div>
						<NavLink to="/project" className="header__menu-link" activeClassName="is-active">Add Project</NavLink>
					</div>
				</div>
			</header>
		);
	}
	if (props.user.id === "" && props.user.isManager === false) {
		return (
			<header className="header">
				<h1 className="header__title">Knowledge System</h1>
			</header>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => ({
	onLogout(){
		dispatch(logout());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);