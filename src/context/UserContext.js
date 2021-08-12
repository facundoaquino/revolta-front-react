import axios from 'axios'
import { Notyf } from 'notyf'
import React, { useState } from 'react'
import 'notyf/notyf.min.css'
import { url_enviroment } from '../config/config'

export const UserContext = React.createContext()

const initialLogin = JSON.parse(localStorage.getItem('login')) || false

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({ logged: initialLogin })
	const url = url_enviroment

	const login = (form) => {
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

	const uploadFile = async (form, file) => {
		let formData = new FormData()

		formData.append('archivo', form.archivo)
		formData.append('name', form.name)
		formData.append('description', form.description)
		formData.append('ritmo', form.ritmo)
		const resp = await axios({
			url: `${url}/api/uploads/${form.ritmo}`,
			method: 'POST',
			data: formData,
		})

		return resp
	}

	return <UserContext.Provider value={{ user, login, uploadFile }}>{children}</UserContext.Provider>
}

export default UserProvider
