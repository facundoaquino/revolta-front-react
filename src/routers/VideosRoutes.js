import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeVideos from '../components/HomeVideos/HomeVideos'
import SoundsVideos from '../components/SoundsVideos/SoundsVideos'

const VideosRoutes = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/home/ritmos" component={HomeVideos} />
				<Route path="/home/ritmos/:ritmo" component={SoundsVideos} />
			</Switch>
		</div>
	)
}

export default VideosRoutes
