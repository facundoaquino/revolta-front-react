import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import './styles/LogOut.css'

const LogOut = () => {
	const { logout } = useContext(UserContext)
	return (
		<li onClick={logout} className="logout">
			Salir
		</li>
	)
}

export default LogOut
