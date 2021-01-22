import axios from "axios"

const api = axios.create({
  baseURL: "http://127.0.0.1:4000/graphql",
});

const URL_API = 'http://127.0.0.1:4000/graphql'

export const get = async (url) => {

  return await axios.get(URL_API)
  .then(res => res)
  .catch(err => err)
  
}

export const post = async (data) => {

  return await axios.post(URL_API, data)
  .then(res => res)
  .catch(err => err)
  
}


export default api