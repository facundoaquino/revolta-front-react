import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

const showErrorByMsg = (msg = '') => {
	const notyf = new Notyf()
	notyf.error({
		message: msg,
		duration: 2000,
	})
}

export default showErrorByMsg
