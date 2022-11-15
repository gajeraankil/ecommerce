import { getDetailRequest, getRequest } from "../request";

export const getProductData = () => {
  return getRequest("products");
};

export const getProductDetailsData = (id) => {
  return getDetailRequest("products", id);
};
