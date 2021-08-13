import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getRhythms } from '../../helpers/getRhythms'
import './styles/HomeVideos.css'
import iconVideo from './../../assets/iconVideo.png'
import Loader from '../Loader/Loader'

const HomeVideos = () => {
	const [ritmos, setRitmos] = useState([])
	const [load, setLoad] = useState(false)
	// console.log(ritmos)

	useEffect(async () => {
		setLoad(true)
		const rhythms = await getRhythms()
		setRitmos(rhythms)
		setLoad(false)
		// console.log(ritmos)
	}, [])

	console.log('render de home videos')
	return load ? (
		<Loader />
	) : (
		<main className="homeVideos_container">
			{ritmos.map((ritmo) => (
				<div key={ritmo} className="video_container-link">
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
