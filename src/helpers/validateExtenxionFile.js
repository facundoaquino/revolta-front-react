const validExtensions = ['mp3', 'mp4', 'mpeg', 'opus', 'ogg']

const validateExtenxionFile = (fileName = '') => {
	const splitedName = fileName.split('.')
	const ext = splitedName[splitedName.length - 1]
	const isAlowExtension = validExtensions.includes(ext)
	// console.log(isAlowExtension)
	return isAlowExtension
}

export default validateExtenxionFile
