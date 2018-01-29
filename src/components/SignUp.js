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
				<h2 className="login-form__title">Sign Up</h2>
				{this.state.error && <p>{this.state.error}</p>}
				<form className="sigup-form" onSubmit={this.onSubmit}>
					<div>
						<input className="login-form__item"
							type="text"
							placeholder="E-mail"
							value={this.state.email}
							onChange={this.onEmailChange}
						/>
					</div>
					<div>
						<input className="login-form__item"
							type="text"
							placeholder="Password"
							value={this.state.password}
							onChange={this.onPasswordChange}
						/>
					</div>
					<div>
						<select className="login-form__select"
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
					</div>
					<div>
						<button className="login-form__button">Sign Up</button>
					</div>
				</form>
			</div>
		);
	}
};