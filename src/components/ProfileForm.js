import React from 'react';

export default class ProfileForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			userId: props.userId,
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
				userId: this.state.userId,
				name: this.state.name,
				lastName: this.state.lastName,
				skillset: this.state.skillset
			});
			console.log({
				userId: this.state.userId,
				name: this.state.name,
				lastName: this.state.lastName,
				skillset: this.state.skillset
			});
		}
	}

	render(){
		return (
			<div>
				{this.state.error && <p className="error-notification">{this.state.error}</p>}
				<form className="profile-form" onSubmit={this.onSubmit}>
					<input className="profile-form__item"
						type="text"
						placeholder="Name"
						autoFocus
						value={this.state.name}
						onChange={this.onNameChange}
					/>
					<input className="profile-form__item"
						type="text"
						placeholder="Last name"
						value={this.state.lastName}
						onChange={this.onLastNameChange}
					/>
					<input className="profile-form__item"
						placeholder="Your skills"
						value={this.state.skillset.join(' ')}
						onChange={this.onSkillsetChange}
					/>
					<button className="profile-form__button">Create Profile</button>
				</form>
			</div>
		);
	}
}