import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
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
	return (
		<nav className="navbar">
			<img className="navbar_logo" src={logo} alt="" />
			{ritmos.map((ritmo) => (
				<NavLink className="nav_link " activeClassName="navbar_active" exact key={ritmo} to={`/${ritmo}`}>
					<li>{ritmo}</li>
				</NavLink>
			))}
			<NavLink to="/upload">
				<li className="navbar_upload">Subir</li>
			</NavLink>
		</nav>
	)
}

export default Navbar
