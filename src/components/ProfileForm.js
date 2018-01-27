import React from 'react';

export default class ProfileForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name: props.profile ? props.profile.name : '',
			lastName: props.profile ? props.profile.lastName : '',
			skillset: props.profile ? props.profile.skillset : [],
			error: ''
		};
	}

	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	}

	onLastNameChange = (e) => {
		const lastName = e.target.value;
		this.setState(() => ({ lastName }));
	}

	onSkillsetChange = (e) => {
		const skillset = e.target.value.split(" ");
		this.setState(() => ({ skillset }));
	}

	onSubmit = (e) => {
		e.preventDefault();

		if(!this.state.name || this.state.skillset.length < 1){
			this.setState(() => ({ error: "Please provide name and your skills for project"}));
		} else {
			this.setState(() => ({ error: ''}));
			this.props.onSubmit({
				name: this.state.name,
				lastName: this.state.lastName,
				skillset: this.state.skillset
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
						placeholder="Name"
						autoFocus
						value={this.state.description}
						onChange={this.onNameChange}
					/>
					<input 
						type="text"
						placeholder="Last name"
						autoFocus
						value={this.state.description}
						onChange={this.onNameChange}
					/>
					<input 
						placeholder="Your skills"
						value={this.state.skillset.join(' ')}
						onChange={this.onSkillsetChange}
					/>
					<button>Create Profile</button>
				</form>
			</div>
		);
	}
}