import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveProject } from '../actions/projects';

const ProjectsListItem = ({dispatch, id, description, note, skills }) => (
	<div>
		<Link to={`/project/${id}/edit`}><h5>{description}</h5></Link>
		<p>{note}</p>
		<div>{skills.join(' ')}</div>
		<button onClick={() => {
			dispatch(startRemoveProject({ id }));
		}}>Remove Project </button>
		<Link to={`/project/${id}`}>Show Details</Link>
	</div>
);

export default connect()(ProjectsListItem);