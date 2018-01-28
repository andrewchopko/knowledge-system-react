import React from 'react';

export default class ProjectForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			description: props.project ? props.project.description : '',
			note: props.project ? props.project.note : '',
			skills: props.project ? props.project.skills : [],
			error: ''
		};
	}

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	}

	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }))
	}

	onSkillsChange = (e) => {
		const skills = e.target.value.split(" ");
		this.setState(() => ({ skills }));
	}

	onSubmit = (e) => {
		e.preventDefault();

		if(!this.state.description || this.state.skills.length < 1){
			this.setState(() => ({ error: "Please provide description and required skills for project"}));
		} else {
			this.setState(() => ({ error: ''}));
			this.props.onSubmit({
				description: this.state.description,
				note: this.state.note,
				skills: this.state.skills
			});
		}
	}

	render(){
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input 
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<textarea 
						placeholder="Note"
						value={this.state.note}
						onChange={this.onNoteChange}
						>
					</textarea>
					<input 
						placeholder="Required skills for project"
						value={this.state.skills.join(' ')}
						onChange={this.onSkillsChange}
					/>
					<button>Save</button>
				</form>
			</div>
		);
	}
}