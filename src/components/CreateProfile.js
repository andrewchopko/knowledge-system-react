import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { startAddProfile } from '../actions/profiles';


const CreateProfile = (props) => (
	<div className="wrapper">
		<h2 className="page__title">Create Profile</h2>
		<ProfileForm
			userId = {props.user.id} 
			onSubmit={(profile) => {
				props.dispatch(startAddProfile(profile)).then(() => {
					props.history.push(`/profile/${props.user.id}`);
				});
			}}
		/>
	</div>
);

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(CreateProfile);