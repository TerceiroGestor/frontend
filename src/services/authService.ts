import axios from "axios";

const url : string = "https://apigateway-production.up.railway.app/api/"

let config = {
  headers: {
    Authorization: ``
  }
}

function login(body: { password: string, email: string }) {
    const promise = axios.post(`${url}login`, body);
    return promise;
};

export { login }