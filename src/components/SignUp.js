import React from 'react';


export default class LogIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			isManager: false,
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
				password: this.state.password,
				isManager: this.state.isManager
			});
		}
	}

	render(){
		return (
			<div>
				<h2>Sign Up</h2>
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
					<select
						value={this.state.isManager}
						onChange={(e) => {
							if(e.target.value === 'false'){
								this.setState(() => ({ isManager: false }));
							}else{
								this.setState(() => ({ isManager: true }));
							}
						}}
					>
						<option value="false">Developer</option>
						<option value="true">Manager</option>
					</select>
					<button>Sign Up</button>
				</form>
			</div>
		);
	}
};