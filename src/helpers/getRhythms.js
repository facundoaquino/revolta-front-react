import axios from 'axios'
import { url_enviroment } from '../config/config'

export const getRhythms = async () => {
	const url = url_enviroment
	const { data } = await axios.get(`${url}/api/uploads`)
	return data.folders
}
