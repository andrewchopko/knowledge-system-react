import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const Forward = (props) => {
	console.log("props.user from forward", props.user);
	console.log("props.user.id from forward", props.user.id);
	console.log("props.user.email from forward", props.user.email);
	console.log("props.user.password from forward", props.user.password);
	if(props.user.isManager){
		return ( <Redirect to="/projects" /> );
	}else{
		return ( <Redirect to="/profile" /> );
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps)(Forward);