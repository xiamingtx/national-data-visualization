// @ts-nocheck
/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-22 22:41:07
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-25 13:10:47
 */
import axios from "axios";
import store from "../store";
import { Notify } from "quasar";
import notify from "../utils/notify";

const baseURL = import.meta.env.VITE_API_HOST;
const tokenPrefix = "Bearer ";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.code !== "2000") {
      handleErrorResponse(response);
      return Promise.reject(response.data);
    }
    return response.data;
  },
  (error) => {
    console.log(error);
    handleErrorResponse(error.response);
    return Promise.reject(error);
  }
);

const handleErrorResponse = (response) => {
  notify.error(response.message);
};

const { get, post, put } = instance;

export { get, post, put };
