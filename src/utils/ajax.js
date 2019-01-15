import axios from 'axios';

// 超时 15秒
// axios.defaults.timeout = 15000;
// 允许发送cookie
axios.defaults.withCredentials = true;

/**
 * get请求
 * @param {string} url - 请求的路径
 * @param {Object} params - 参数
 * @return {Promise}
 */
export function get(url, params = {}) {
  return axios.get(url, {
    params,
  });
}

/**
 * post请求
 * @param {string} url - 请求的路径
 * @param {Object} data - 参数
 * @param {Object} config - 原始配置
 * @return {Promise}
 */
export function post(url, data = {}, config = {
  headers: {
    'Content-Type': 'application/json',
  },
}) {
  return axios.post(url, data, config);
}
