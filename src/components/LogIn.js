import React from 'react';

export default class LogIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			error: ""
		};
	}

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	}

	onPasswordChange = (e) => {
		const password = e.target.value;
		this.setState(() => ({ password }));
	}

	onSubmit = (e) => {
		e.preventDefault();

		if(!this.state.email && !this.state.password){
			this.setState(() => ({ error: "Please provide e-mail and password"}));
		} else {
			this.setState(() => ({ error: ""}));
			this.props.onSubmit({
				email: this.state.email,
				password: this.state.password
			});
		}
	}

	render() {

		return (
			<div>
				<h2>Log In</h2>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input 
						type="text"
						placeholder="E-mail"
						autoFocus
						value={this.state.email}
						onChange={this.onEmailChange}
					/>
					<input 
						type="text"
						placeholder="Password"
						value={this.state.password}
						onChange={this.onPasswordChange}
					/>
					<button>Log In</button>
				</form>
			</div>
		);
	}
};