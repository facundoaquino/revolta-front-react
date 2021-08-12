import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom'
import LoginScreen from '../components/loginScreen/LoginScreen'
import { UserContext } from '../context/UserContext'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
	const { user } = useContext(UserContext)
	// console.log(user);
	return (
		<Router>
			<div>
				{/* <Navbar /> */}

				<Switch>
					<PublicRoute exact path="/" component={LoginScreen} isAutheticated={user.logged} />
					<PrivateRoute path="/home" component={DashboardRoutes} isAutheticated={user.logged} />
				</Switch>
			</div>
		</Router>
	)
}

export default AppRouter
