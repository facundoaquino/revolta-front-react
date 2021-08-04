import axios from "axios"



export const getRhythms = async ()=>{
    const url = process.env.REACT_APP_BASE_URL
   const {data} = await axios.get(`${url}/api/uploads`)
   return data.folders
}

