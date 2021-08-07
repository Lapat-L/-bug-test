import axios from "axios";

const auth_key = "auth-user";
let auth = JSON.parse(localStorage.getItem(auth_key));
const user = auth ? auth.user : "";
const api_endpoint =
  process.env.VUE_APP_ENDPOINT || "http://localhost:3003";

export default {
  isAuthen() {
    return user !== "" && jwt != "";
  },
  getApiHeader() {
    let jwt = (JSON.parse(localStorage.getItem('auth-user')).jwt);
    if (jwt !== "") {
      return {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      };
    }
    return {};
  },
  getUser() {
    return user;
  },
  getJwt() {
    return jwt;
  },
  async login({ username, password }) {
    try {
      let url = `${api_endpoint}/auth/local`;
      let body = {
        identifier: username,
        password: password,
      };
      let res = await axios.post(url, body);
      if (res.status === 200) {
        localStorage.setItem(auth_key, JSON.stringify(res.data));
        return {
          success: true,
          user: res.data.user,
          jwt: res.data.jwt,
        };
      } else {
        console.log("NOT 200", res);
      }
    } catch (e) {
      if (e.response.status === 400) {
        console.error(e.response.data.message[0].message[0].message);
        return {
          success: false,
          message: e.response.data.message[0].message[0].message,
        };
      }
    }
  },
  async register({ username, email, password }) {
    try {
      let url = `${api_endpoint}/auth/local/register`;
      let body = {
        username: username,
        email: email,
        password: password,
      };
      let res = await axios.post(url, body);
      if (res.status === 200) {
        localStorage.setItem(auth_key, JSON.stringify(res.data));
        return {
          success: true,
          user: res.data.user,
          jwt: res.data.jwt,
        };
      } else {
        console.log("NOT 200", res);
      }
    } catch (e) {
      if (e.response.status === 400) {
        // console.error(e.response.data.message[0].message[0].message);
        return {
          success: false,
          message: e.response.data.message[0].message[0].message,
        };
      } else {
        return {
          success: false,
          message: "Unknow error: " + e.response.data,
        };
      }
    }
  },
  logout() {
    localStorage.removeItem(auth_key);
  },
  async doMQuiz(payload){
    try{
      let url = `${api_endpoint}/users/${payload.id}`
      let body = {
        "maths" : payload.maths
      }
      let headers = this.getApiHeader()
      let res = await axios.put(url, body, headers)
      if(res.status===200){
          return{
            data: res.data,
            success: true
          }
      }
    }catch(e){

    }
    
  }
};
