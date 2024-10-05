import axios from 'axios';
import Cookies from 'js-cookie';
const DOMAIN_API = 'http://localhost:8000' //.env

const getAuthHeaders = () => {
    const token = Cookies.get('token');
    return {
        Authorization: `Bearer ${token}`,
    };
};

const apiUpdateProduct = (productId, params) => axios.put(`${DOMAIN_API}/api/products/${productId}`, params, { headers: getAuthHeaders() });

const apiCreateProduct = (params) => axios.post(`${DOMAIN_API}/api/products`, params, { headers: getAuthHeaders() });

const apiGetProductById = (productId) => axios.get(`${DOMAIN_API}/api/products/${productId}`, { headers: getAuthHeaders() });

const apiGetListProducts = (params) => axios.get(`${DOMAIN_API}/api/products/list`,{params, headers: getAuthHeaders()});

export { apiUpdateProduct, apiCreateProduct, apiGetProductById , apiGetListProducts};