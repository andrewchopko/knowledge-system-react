import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const Forward = (props) => {
	console.log(props.user);
	return (
		{}
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps)(Forward);