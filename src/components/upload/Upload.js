import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { url_enviroment } from '../../config/config'
import { UserContext } from '../../context/UserContext'
import showErrorByMsg from '../../helpers/showErrorByMsg'
import validateExtenxionFile from '../../helpers/validateExtenxionFile'
import validateFile from '../../helpers/validateFile'
import './styles/upload.css'
const Upload = () => {
	const [form, setForm] = useState({ name: '', description: '', ritmo: '', archivo: '' })
	// const { uploadFile, percentage } = useContext(UserContext)
	const [percentage, setPercentage] = useState(0)
	const url = url_enviroment

	const [load, setLoad] = useState(false)
	const history = useHistory()

	const handlerSubmit = async (e) => {
		e.preventDefault()
		setLoad(true)

		try {
			// await uploadFile(form)
			let formData = new FormData()

			formData.append('archivo', form.archivo)
			formData.append('name', form.name)
			formData.append('description', form.description)
			formData.append('ritmo', form.ritmo)
			await axios({
				url: `${url}/api/uploads/${form.ritmo}`,
				method: 'POST',
				data: formData,
				onUploadProgress: ({ total, loaded }) => {
					let percent = Math.floor((loaded * 100) / total)
					setPercentage(percent)
				},
			})

			history.push(`/home/ritmos/${form.ritmo}`)
		} catch (error) {
			console.log(error.response)
		}

		// setLoad(false)
		// console.log('subido')
	}

	// console.log(percentage)
	const hadlerChange = (e) => {
		if (e.target.name === 'archivo') {
			console.log(e.target.files)

			const isBig = validateFile(e.target.files[0]?.size)
			if (isBig) {
				e.target.value = ''
				return
			}

			//Asking if there is a file to check the etenxion of it
			if (e.target.files.length === 1) {
				const extValid = validateExtenxionFile(e.target.files[0].name)
				if (!extValid) {
					showErrorByMsg('Archivo no permitido , solo podes subir videos')
					e.target.value = ''
					return
				}
			}

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
				<input
					onChange={hadlerChange}
					className="upload_input"
					required
					id="name"
					type="text"
					name="name"
				/>
				<label className="upload_label" htmlFor="ritmo">
					Ritmo
				</label>
				<input
					onChange={hadlerChange}
					className="upload_input"
					required
					id="ritmo"
					type="text"
					name="ritmo"
				/>
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
				<div className="upload_button-container">
					<div className="upload_button-bar" style={{ width: `${percentage}%` }}></div>
					<button disabled={load} className="upload_button"></button>
					<div className="upload_button-text">
						{load ? `Subiendo Archivo ${percentage}%` : 'Enviar'}
					</div>
				</div>
			</form>
		</div>
	)
}

export default Upload
