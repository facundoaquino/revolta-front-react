import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import SoundsVideos from '../components/SoundsVideos/SoundsVideos'

const DashboardRoutes = () => {
	return (
		<>
			<Navbar />

			<div className="container">
				<Switch>
					<Route path="/:ritmo" component={SoundsVideos} />
				</Switch>
			</div>
		</>
	)
}

export default DashboardRoutes
