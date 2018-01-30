import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../selectors/profiles';

const ShowProfile = (props) => {
	
	if (props.profile){
		return (
			<div className="wrapper">
				<div>
					<h1 className="user__name">{`${props.profile.name} ${props.profile.lastName}`}</h1>
					<div className="user__skills">{props.profile.skillset.join(' ')}</div>
				</div>
			</div>
		);
	}else{
		return (
			<div className="profile-error">You dont have profile yet! Please create!</div>
		);
	}
};

const mapStateToProps = (state, props) => {
	return {
		profile: state.profiles.find((profile) => profile.userId === props.match.params.id)
	}
};

export default connect(mapStateToProps)(ShowProfile);