import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './styles/navbar.css'
import logo from './../../assets/fondo.png'
const Navbar = () => {
	// console.log('render')
	return (
		<nav>
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
