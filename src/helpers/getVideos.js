import axios from "axios"



export const getVideos = async (folder)=>{
    const url = process.env.REACT_APP_BASE_URL
   const {data} = await axios.get(`${url}/api/uploads/${folder}`)
   return data.data
}

