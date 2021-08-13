import React, { useContext } from 'react'
import { Switch, HashRouter } from 'react-router-dom'
import LoginScreen from '../components/loginScreen/LoginScreen'
import { UserContext } from '../context/UserContext'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
	const { user } = useContext(UserContext)
	// console.log(user);
	return (
		<HashRouter>
			<div>
				{/* <Navbar /> */}

				<Switch>
					<PrivateRoute path="/home" component={DashboardRoutes} isAutheticated={user.logged} />
					<PublicRoute exact path="/" component={LoginScreen} isAutheticated={user.logged} />
				</Switch>
			</div>
		</HashRouter>
	)
}

export default AppRouter
