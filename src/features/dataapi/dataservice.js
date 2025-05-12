import axios from "axios"
// const API_URL = "http://localhost:5000/users";

const fetchindatauser=async()=>{
   
    const response= await axios.get('http://localhost:3000/users')
    return response.data
}

// const addcommentdata=async({id,text})=>{
//     // const resopnse= await axios.post(`http://localhost:5000/users${formdata.id}`,formdata.text)


//     const response = await axios.patch(`${API_URL}/${id}`, {
//         comments: text
//     });

//      return response.data
// }
 

const service={fetchindatauser}
export default service



