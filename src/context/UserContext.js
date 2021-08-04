import axios from 'axios'
import { Notyf } from 'notyf'
import React, { useState } from 'react'
import 'notyf/notyf.min.css'

export const UserContext = React.createContext()

const initialLogin = JSON.parse(localStorage.getItem('login')) || false

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({ logged: initialLogin })

	const login = (form) => {
		const url = process.env.REACT_APP_BASE_URL

		console.log(form)
		axios
			.post(`${url}/api/users/login`, {
				...form,
			})
			.then((resp) => {
				localStorage.setItem('login', true)
				setUser({ logged: true })
			})
			.catch(({ response }) => {
				console.log(response.data.msg)
				const notyf = new Notyf()
				notyf.error({
					message: 'usuario a pass incorrecta',
					duration: 1500,
				})
			})
	}

	return (
		<UserContext.Provider value={{ user, login }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
