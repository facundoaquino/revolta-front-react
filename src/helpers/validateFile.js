import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

const validateFile = (size) => {
	if (size / 1024 / 1024 > 500) {
		const notyf = new Notyf()
		notyf.error({
			message: 'Archivo muy grande',
			duration: 2000,
		})
		return true
	}
	return false
}

export default validateFile
