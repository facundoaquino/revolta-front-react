import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getRhythms } from '../../helpers/getRhythms'
import './styles/navbar.css'
import logo from './../../assets/fondo.png'
const Navbar = () => {
	const [ritmos, setRitmos] = useState([])
	// console.log(ritmos)

	useEffect(async () => {
		const rhythms = await getRhythms()
		setRitmos(rhythms)
		// console.log(ritmos)
	}, [])
	// console.log('render')
	return (
		<nav className="navbar">
			<Link to="/home">
				<img className="navbar_logo" src={logo} alt="" />
			</Link>
			{ritmos.map((ritmo) => (
				<li>
					<NavLink className="nav_link" activeClassName="navbar_active" key={ritmo} to={`/home/${ritmo}`}>
						{ritmo}
					</NavLink>
				</li>
			))}
			<NavLink to="/home/upload">
				<li className="navbar_upload">Subir</li>
			</NavLink>
		</nav>
	)
}

export default Navbar
