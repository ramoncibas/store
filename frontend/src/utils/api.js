import axios from "axios";

// Faz a chamada do backend (local), na porta 5000
export default axios.create({
  baseURL: `http://localhost:5000/`,
});
