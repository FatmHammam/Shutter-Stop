import Axios from 'axios';

const baseURL = '';

class ApiService {
  constructor() {
    this.client = Axios.create({baseURL});
    this.client.interceptors.response.use(
      config => {
        // console.log('config', config);
        return config;
      },
      async error => {
        if (error.message === 'Network Error') {
          // console.log('error', error.request);
          return Promise.reject();
        }
        // console.log('error', error.response);
        return Promise.reject(error.response || error.message);
      },
    );
  }

  setToken(token) {
    if (token) {
      this.client.defaults.headers.common = {Authorization: `Bearer ${token}`};
    } else {
      delete this.client.defaults.headers.common.Authorization;
    }
  }

  makeRequest(method, url, params = {}) {
    return this.client[method](url, params)
      .then(res => res)
      .catch(err => {
        throw err;
      });
  }
}

module.exports = {
  baseURL,
  ApiService: new ApiService(),
};
