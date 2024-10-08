import axios from 'axios';

const DOMAIN_API = 'http://localhost:8000' //.env

const apiLogin = params => axios.post(`${DOMAIN_API}/api/auth/login`, params)

const apiLogout = () => axios.post(`${DOMAIN_API}/api/auth/logout`, )

export { apiLogin ,apiLogout};