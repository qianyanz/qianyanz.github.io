import axios from 'axios'

let request

if (import.meta.env.MODE === "development") {
  request = axios.create({
    baseURL: 'http://localhost:12345/api/',
    timeout: 60000
  })
} else {
  request = axios.create({
    baseURL: 'http://1.15.171.102:12345/api/',
    timeout: 60000
  })
}

export default request
