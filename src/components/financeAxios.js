import axios from "axios";

const instance = axios.create({
    // baseURL: "https://finance.proplast.et",
    // baseURL: "http://localhost:12000"

    baseURL: "https://report.proplast.et",
 
})

export default instance;