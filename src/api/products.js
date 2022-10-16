import axios from "./request";

const API_ENDPOINT = "products";

export default {
  searchProducts() {
    return axios.get(`/${API_ENDPOINT}.json`);
  },
  getProduct(id) {
    return axios.get(`/${API_ENDPOINT}.json/${id}.json`);
  },
  addProduct(product) {
    return axios.post(`/${API_ENDPOINT}.json`, product);
  },
  editProduct(id, newProduct) {
    return axios.put(`/${API_ENDPOINT}/${id}.json`, newProduct);
  },
  deleteProduct(id) {
    return axios.delete(`/${API_ENDPOINT}/${id}.json`);
  },
};
