import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import './styles/upload.css'
const Upload = () => {
	const [form, setForm] = useState({ name: '', description: '', ritmo: '', archivo: '' })
	const { uploadFile } = useContext(UserContext)
	const [load, setLoad] = useState(false)
	const history = useHistory()

	const handlerSubmit = async (e) => {
		e.preventDefault()
		setLoad(true)
		try {
			await uploadFile(form)
			history.push(`/home/ritmos/${form.ritmo}`)
		} catch (error) {
			console.log(error.response)
		}

		// setLoad(false)
		// console.log('subido')
	}

	const hadlerChange = (e) => {
		if (e.target.name === 'archivo') {
			setForm({ ...form, archivo: e.target.files[0] })
			// console.log(e.target.files[0])
		} else {
			setForm({ ...form, [e.target.name]: e.target.value })
		}
	}

	return (
		<div className="upload_container">
			<form onSubmit={handlerSubmit} className="upload__form">
				<label className="upload_label" htmlFor="name">
					Titulo
				</label>
				<input onChange={hadlerChange} className="upload_input" required id="name" type="text" name="name" />
				<label className="upload_label" htmlFor="ritmo">
					Ritmo
				</label>
				<input onChange={hadlerChange} className="upload_input" required id="ritmo" type="text" name="ritmo" />
				<label className="upload_label" htmlFor="description">
					Descripcion
				</label>
				<textarea
					onChange={hadlerChange}
					id="description"
					className="upload_textarea"
					maxLength="100"
					type="text"
					name="description"
				/>
				<input
					onChange={hadlerChange}
					className="input_file"
					required
					type="file"
					name="archivo"
					accept=".mp3,.mp4,.mpeg,.opus,.ogg"
				/>
				<button disabled={load} className="upload_button">
					{load ? 'Subiendo Archivo' : 'Enviar'}
				</button>
			</form>
		</div>
	)
}

export default Upload
