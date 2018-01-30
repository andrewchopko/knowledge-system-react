import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfilesList from './ProfilesList';
const ShowProject = (props) => {
	return (
		<div className="wrapper">
			<div className="project-layout">
				<div className="project-top__wrapper">
					<div className="project-top__title">
						<h1>{props.project.description}</h1>
					</div>
					<div>
						<Link className="projec-top__edit-button" to={`/project/${props.project.id}/edit`}>Edit</Link>
					</div>
				</div>
				<div>
					<div className="project-top__description-text">Description</div>
					<div className="project-top__description">{props.project.note}</div>
				</div>
				<div>
					<div className="project-top__skills-text">Required skills</div>
					<div className="project-top__skills">{props.project.skills.join(' ')}</div>
				</div>
			</div>
			<div className="profiles-wrapper">
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