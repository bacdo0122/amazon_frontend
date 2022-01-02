/* eslint-disable */
import axios from "axios";
const environment = process.env.NODE_ENV === "production";
console.log(environment);
const instance = axios.create({
  baseURL: environment
    ? "https://peaceful-savannah-54709.herokuapp.com"
    : "http://localhost:5000",
});

export default instance;
