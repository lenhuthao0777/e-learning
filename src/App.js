import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Course from './pages/course';
import Courses from './pages/courses';
import Home from './pages/home';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/courses/:category'>
					<Courses />
				</Route>
				<Route path='/course/:id'>
					<Course />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
