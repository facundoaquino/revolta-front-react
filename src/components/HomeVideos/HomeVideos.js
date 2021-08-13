import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getRhythms } from '../../helpers/getRhythms'
import './styles/HomeVideos.css'
import iconVideo from './../../assets/iconVideo.png'

const HomeVideos = () => {
	const [ritmos, setRitmos] = useState([])
	// console.log(ritmos)

	useEffect(async () => {
		const rhythms = await getRhythms()
		setRitmos(rhythms)
		// console.log(ritmos)
	}, [])
	return (
		<main className="homeVideos_container">
			{ritmos.map((ritmo) => (
				<div className="video_container-link">
					<img className="video_icon" src={iconVideo} alt="" />
					<Link key={ritmo} className="videos_link" to={`/home/ritmos/${ritmo}`}>
						{ritmo}
					</Link>
				</div>
			))}
		</main>
	)
}

export default HomeVideos
