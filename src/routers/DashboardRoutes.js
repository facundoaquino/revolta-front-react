import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import SoundsVideos from '../components/SoundsVideos/SoundsVideos'
import Upload from '../components/upload/Upload'
import VideosRoutes from './VideosRoutes'

const DashboardRoutes = () => {
	return (
		<>
			<Navbar />

			<div className="container">
				<Switch>
					<Route exact path="/home" component={Home} />
					<Route exact path="/home/upload" component={Upload} />
					<Route path="/home/ritmos" component={VideosRoutes} />
				</Switch>
			</div>
		</>
	)
}

export default DashboardRoutes
