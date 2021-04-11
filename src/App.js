import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Course from './pages/course';
import Courses from './pages/courses';
import Home from './pages/home';
import AppLayout from './layouts/appLayout/index';
import AdminLayout from './layouts/adminLayout';
import AdminCourses from './pages/adminCourses';
import AdminUser from './pages/adminUser';
function App() {
	return (
		<BrowserRouter>
			<Switch>
				{/* route admin */}
				<Route path='/admin'>
					<AdminLayout>
						<Switch>
							<Redirect from='/admin' exact to='/admin/courses' />
							<Route path='/admin/courses'>
								<AdminCourses />
							</Route>
							<Route path='/admin/users'>
								<AdminUser />
							</Route>
						</Switch>
					</AdminLayout>
				</Route>
				{/* route mains */}
				<Route path='/'>
					<AppLayout>
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
					</AppLayout>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
