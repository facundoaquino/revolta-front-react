import axios from 'axios'
import { Notyf } from 'notyf'
import React, { useState } from 'react'
import 'notyf/notyf.min.css'
import { url_enviroment } from '../config/config'
import AppRouter from '../routers/AppRouter'

export const UserContext = React.createContext()

const initialLogin = JSON.parse(localStorage.getItem('login')) || false

const UserProvider = () => {
	const [user, setUser] = useState({ logged: initialLogin })

	const url = url_enviroment

	const login = (form) => {
		// console.log(form)
		axios
			.post(`${url}/api/users/login`, {
				...form,
			})
			.then((resp) => {
				localStorage.setItem('login', true)
				setUser({ logged: true })
			})
			.catch(({ response }) => {
				// console.log(response.data.msg)
				const notyf = new Notyf()
				notyf.error({
					message: 'usuario a pass incorrecta',
					duration: 1500,
				})
			})
	}

	const logout = () => {
		localStorage.removeItem('login')
		setUser({ logged: false })
	}

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			<AppRouter />
		</UserContext.Provider>
	)
}

export default UserProvider
