import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const Forward = (props) => {
	if(props.user.isManager){
		return ( <Redirect to="/projects" /> );
	}else{
		return ( <Redirect to={`/profile/${props.user.id}`} /> );
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
}

export default connect(mapStateToProps)(Forward);