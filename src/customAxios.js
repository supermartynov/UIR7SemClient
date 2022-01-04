import axios from "axios";

const customAxios = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    crossDomain: true,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:9000/',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  }
})

customAxios.defaults.withCredentials = true
/*
customAxios.defaults.baseURL = "http://localhost:9000"
customAxios.defaults.headers.common['Content-Type'] = 'application/json'
customAxios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:9000/'
customAxios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE'*/

export default customAxios
