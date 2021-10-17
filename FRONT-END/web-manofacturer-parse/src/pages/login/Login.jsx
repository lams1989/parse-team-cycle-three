import React from 'react'
import { Link } from 'react-router-dom';
import img from 'media/ico1.png'
import users from 'mocks/users.json'
import 'styles/loggin-styles.css'

const Login = () => {

	const [userNameLog, setUserName] = React.useState('')
	const [emailLog, setEmail] = React.useState('')
	const [passwordLog, setPassword] = React.useState('')
	const logginStart = (e) => {
		e.preventDefault()

		if (!userNameLog.trim()) {
			console.log('UserName vacio')
			return
		}
		if (!emailLog.trim()) {
			console.log('email vacio')
			return
		}
		if (!passwordLog.trim()) {
			console.log('password vacio')
			return
		}
		console.log('Procesando loggin de ' + userNameLog)
		e.target.reset()

		let userIn = users.filter(user => user.userName === userNameLog)

		if (userIn[0].state === "Aprobado" && userIn[0].password === passwordLog) {
			console.log('User logged')
			if (userIn[0].role === 'Admin') {
				console.log('is Admin')

			}
			if (userIn[0].role === 'Seller') {
				console.log('is Seller')
			}

		}
	}

	return (
		<div className="loginSection">
			<form id="loginform" onSubmit={logginStart}>
				<h1>PARSEFACTORY</h1>
				<p><a href="#" target="_blank"> www.parsefactory.com</a></p>

				<div className="input-info">
					<input
						type="text"
						placeholder="User-Name"
						onChange={(e) => setUserName(e.target.value)}
					/>
					<input
						type="email"
						placeholder="E-mail"
						required autoComplete="off"
						validate="true"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="checkbox"
					/>
					<span>Remember Me</span><br />
				</div>

				<div className="log-sign">
					<button className="login" form="loginform">Log In</button>
					<a href="#" target="_blank">
						<button className="signup" form="signupform" type="submit">Sign Up</button>
					</a>
				</div>

				<div className="social-media">
					<button className="btn1">
						<img className="icon" src={img} />
					</button>
				</div>
				<p className="forget-password">If you forget your password please <a href="#">click here</a></p>
			</form>
		</div>
	)
}

export default Login;
