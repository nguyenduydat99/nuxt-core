import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tên-miền-nào-đó.com/api/',
})

const sendGet = (url: string) => instance.get(url)

const sendPost = (url: string, params: any) => instance.post(url, params)

export { sendGet, sendPost }
