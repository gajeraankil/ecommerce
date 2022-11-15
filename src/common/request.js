import axios from "axios";
import { API, firebasePostData } from "../shared/baseUrl";

const instanceProduct = axios.create({
  baseURL: API,
  timeout: 2000,
});

const instanceContact = axios.create({
  baseURL: firebasePostData,
  timeout: 2000,
});

export const sendProductRequest = (config) => {
  return instanceProduct.request(config);
};

export const sendContactRequest = (config) => {
  return instanceContact.request(config);
};

export const getRequest = (path) => {
  return sendProductRequest({
    method: "GET",
    url: path,
  });
};

export const getDetailRequest = (path, id) => {
  return sendProductRequest({
    method: "GET",
    url: path + "?id=" + id,
  });
};

export const postRequest = (path, data) => {
  return sendContactRequest({
    method: "POST",
    url: path,
    data: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
};
