import axios from "./request";

const API_ENDPOINT = "users";

export default {
  searchUsers() {
    return axios.get(`/${API_ENDPOINT}.json`);
  },
  getUser(id) {
    return axios.get(`/${API_ENDPOINT}.json/${id}.json`);
  },
  addUser(user) {
    return axios.post(`/${API_ENDPOINT}.json`, user);
  },
  editUser(id, newProduct) {
    return axios.put(`/${API_ENDPOINT}/${id}.json`, newProduct);
  },
  deleteUser(id) {
    return axios.delete(`/${API_ENDPOINT}/${id}.json`);
  },
};
