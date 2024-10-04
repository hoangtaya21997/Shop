import axios from 'axios';
import Cookies from 'js-cookie';
const DOMAIN_API = 'http://localhost:8000' //.env


const token = Cookies.get('token');

const headers = {
    Authorization: `Bearer ${token}`,
};

const apiGetListProducts = (params) => axios.get(`${DOMAIN_API}/api/products`, { params, headers });

const apiUpdateProduct = (productId, params) => axios.put(`${DOMAIN_API}/api/products/${productId}`, params, { headers });

const apiCreateProduct = (params) => axios.post(`${DOMAIN_API}/api/products`, params, { headers });

const apiGetProductById = (productId) => axios.get(`${DOMAIN_API}/api/products/${productId}`, { headers });

export { apiGetListProducts, apiUpdateProduct, apiCreateProduct, apiGetProductById };