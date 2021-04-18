import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
function Login() {
	return (
		<div className='login-form'>
			<div className='login-form__heading'>
				<h3>Log into your Udemy account!</h3>
			</div>
			<div className='login-form__option-login'>
				<ul>
					<li className='login-facebook'>
						<FacebookIcon />
						Continue with Facebook
					</li>
					<li className='login-google'>Continue with Google</li>
					<li className='login-apple'>
						<AppleIcon />
						Continue with Apple
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Login;
