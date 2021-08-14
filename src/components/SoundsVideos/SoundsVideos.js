import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { url_enviroment } from '../../config/config'
import { getVideos } from '../../helpers/getVideos'

import './styles/soundsVideos.css'

const SoundsVideos = () => {
	const [videos, setVideos] = useState([])
	const { ritmo } = useParams()
	const url = url_enviroment
	useEffect(() => {
		async function getData() {
			const routes = await getVideos(ritmo)

			setVideos(routes)
		}
		getData()
		// console.log(videos)
	}, [ritmo])
	// console.log(ritmo)
	return (
		<main className="main_videos">
			{videos.map((video) => (
				<div key={video.path} className="video_container">
					<div className="video_name">{video.name}</div>
					<p className="video_description">{video.description}</p>
					<video
						src={`${url}/api/uploads/${ritmo}/${video.path}`}
						width="300px"
						codecs="avc1, mp4a"
						controls
					></video>
				</div>
			))}
		</main>
	)
}

export default SoundsVideos
