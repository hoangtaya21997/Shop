import axios from 'axios';

const DOMAIN_API = 'http://localhost:8000' //.env

const apiLogin = params => axios.post(`${DOMAIN_API}/api/auth/login`, params)

export { apiLogin };