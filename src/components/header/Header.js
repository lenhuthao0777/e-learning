import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
function Header() {
	return (
		<div className='header'>
			<Navbar />
			{/* <Link to='/'>
				<h1>Home</h1>
			</Link>
			<Link to='/course/:id'>
				<h1>Course</h1>
			</Link>
			<Link to='/courses/:category'>
				<h1>Courses List</h1>
			</Link> */}
		</div>
	);
}

export default Header;
