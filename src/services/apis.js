const BASE_URL = process.env.REACT_APP_URL || "http://localhost:4000/api/v1";

console.log(BASE_URL);
//contact form endPoints
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/contact",
};
