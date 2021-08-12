import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'

import './styles/formLogin.css'

const FormLogin = () => {
	const [form, setForm] = useState({ name: '', password: '' })
	const { login } = useContext(UserContext)
	const [load, setLoad] = useState(false)
	const handlerSubmit = (e) => {
		e.preventDefault()
		setLoad(true)
		login(form)
		setLoad(false)
	}

	const handlerChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })

		// console.log(form)
	}

	return (
		<div className="form_container">
			<form onSubmit={handlerSubmit} className="form_form" action="">
				<label className="form_label" htmlFor="user">
					Usuario
				</label>
				<input onChange={handlerChange} id="user" className="form_input" type="text" name="name" required />
				<label className="form_label" htmlFor="password">
					Contraseña
				</label>
				<input
					onChange={handlerChange}
					id="password"
					className="form_input"
					type="password"
					name="password"
					required
				/>
				<button disabled={load} className="form_button">
					Enviar
				</button>
			</form>
		</div>
	)
}

export default FormLogin
