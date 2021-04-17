import React from 'react';
import { useParams } from 'react-router';

function Courses() {
	const { category } = useParams;

	return (
		<div>
			<h1>Courses List</h1>
		</div>
	);
}

export default Courses;
