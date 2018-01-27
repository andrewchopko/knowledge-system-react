import React from 'react';
import { connect } from 'react-redux';

const ShowProfile = (props) => {
	return (
		<div>
			<h1>{props.profile.name}</h1>
			<div>{props.profile.lastName}</div>
			<div>{props.profile.skillset.join(' ')}</div>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		profile: state.projects.find((profile) => profile.id === props.match.params.id)
	}
};

export default connect(mapStateToProps)(ShowProfile);