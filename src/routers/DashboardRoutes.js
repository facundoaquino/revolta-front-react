import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import SoundsVideos from '../components/SoundsVideos/SoundsVideos'
import Upload from '../components/upload/Upload'

const DashboardRoutes = () => {
	return (
		<>
			<Navbar />

			<div className="container">
				<Switch>
					<Route exact path="/home/upload" component={Upload} />
					<Route path="/home/:ritmo" component={SoundsVideos} />
				</Switch>
			</div>
		</>
	)
}

export default DashboardRoutes
