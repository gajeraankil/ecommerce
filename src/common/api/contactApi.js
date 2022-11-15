import { postRequest } from "../request";

export const postContactData = (data) => {
  return postRequest("contactform.json", data);
};
