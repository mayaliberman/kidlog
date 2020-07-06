import axios from 'axios';
import { getToken } from './cookies';
import { BASE_URL } from '../config';
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Cache-control': 'no-cache, no-store',
    Pragma: 'no-cache',
    'Content-Type': 'application/json',
  },

  transformRequest: [
    function (data, headers) {
      const token = getToken();

      if (token) headers['Authorization'] = `Bearer ` + token;

      return JSON.stringify(data);
      // return data;
    },
  ], // transform the response before it get recieved
  transformResponse: [
    function (data, headers) {
      if (headers['content-type'].indexOf('application/json') > -1) {
        const json = JSON.parse(data);
        return json;
      }

      return data;
    },
  ],
});
