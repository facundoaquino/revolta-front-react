import axios from 'axios'
import { url_enviroment } from '../config/config'

export const getVideos = async (folder) => {
	const url = url_enviroment
	const { data } = await axios.get(`${url}/api/uploads/${folder}`)
	return data.data
}
