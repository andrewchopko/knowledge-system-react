import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveProject } from '../actions/projects';

const ProjectsListItem = ({dispatch, id, description, note, skills }) => (
	<div className="projects-list__item">
		<Link className="projects-list__item-title" to={`/project/${id}`}><h5>{description}</h5></Link>
		<div className="projects-list__item-component-wrap">
			<div className="projects-list__item-subtitle">Description</div>
			<div className="projects-list__item-description">{note}</div>
		</div>
		<div className="projects-list__item-component-wrap">
			<div className="projects-list__item-subtitle">Required skills</div>
			<div className="projects-list__item-skills">{skills.join(' ')}</div>
		</div>
		<button title="Want to delete project?" className="projects-list__item__remove-button" onClick={() => {
			dispatch(startRemoveProject({ id }));
		}}>Remove</button>
	</div>
);

export default connect()(ProjectsListItem);