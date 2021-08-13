import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getRhythms } from '../../helpers/getRhythms'
import './styles/navbar.css'
import logo from './../../assets/fondo.png'
const Navbar = () => {
	// console.log('render')
	return (
		<nav>
			{/* {ritmos.map((ritmo) => (
				<li key={ritmo}>
				<NavLink className="nav_link" activeClassName="navbar_active" to={`/home/${ritmo}`}>
				{ritmo}
				</NavLink>
				</li>
			))} */}
			<ul className="navbar">
				<Link to="/home">
					<img className="navbar_logo" src={logo} alt="" />
				</Link>
				<li>
					<NavLink className="nav_link" activeClassName="navbar_active" to="/home/ritmos">
						Ritmos
					</NavLink>
				</li>
				<li>
					<NavLink className="nav_link" activeClassName="navbar_active" to="/home/upload">
						Subir
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
