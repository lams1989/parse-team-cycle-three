import React from 'react'
import img from '../media/ico1.png'
import users from '../mocks/users.json'

const Loggin = () => {

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

		if (userIn[0].state === true && userIn[0].password === passwordLog) {
			console.log('User logged')
			if (userIn[0].roll === 'Admin') {
				console.log('is Admin')
			}
			if (userIn[0].roll === 'Seller') {
				console.log('is Seller')
			}
		}
	}
	return (
		<div>
			<form id="loginform" onSubmit={logginStart}>
				<h1>LOG IN</h1>
				<p><a href="#" target="_blank"> www.parse.com</a></p>

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
export default Loggin
