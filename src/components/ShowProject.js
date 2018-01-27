import React from 'react';
import { connect } from 'react-redux';
import ProfilesList from './ProfilesList';

const ShowProject = (props) => {
	return (
		<div>
			<div>
				<h1>{props.project.description}</h1>
				<div>{props.project.note}</div>
				<div>{props.project.skills.join(' ')}</div>
			</div>
			<div>
				<ProfilesList projectId={props.project.id}/>
				
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	const project = state.projects.find((project) => project.id === props.match.params.id);
	return {
		project: state.projects.find((project) => project.id === props.match.params.id)
	}
};

export default connect(mapStateToProps)(ShowProject);