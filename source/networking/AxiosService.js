import axios from 'axios';

axios.interceptors.response.use(
  function (response) {
    console.log('interceptor response', response);
    return response;
  },
  function (error) {
    console.log('interceptor response error', error);
    return Promise.reject(error);
  },
);

axios.interceptors.request.use(
  function (response) {
    console.log('interceptor request', response);
    return response;
  },
  function (error) {
    console.log('interceptor request error', error);
    return Promise.reject(error);
  },
);

const AxiosService = () => {
  const addHeaders = () => {
    return {};
  }


  const get = (endPoint, userConfig) => {
    return axios.get(endPoint, addHeaders(userConfig));
  }

  return {
    get,
  };
};

export default AxiosService();
