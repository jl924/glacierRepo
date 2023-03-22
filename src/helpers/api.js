const apiKey = process.env.API_KEY;
const headers = { Authorization: apiKey };
import axios from "axios";

const buildUrl = (endPoint = "/", queryParams = {}) => {
  const start = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe";
  let url = start + endPoint;
  let keys = Object.keys(queryParams);
  if (keys.length > 0) {
    let query = "?" + keys[0] + "=" + queryParams[keys[0]];
    for (let i = 1; i < keys.length; i++) {
      query += "&" + keys[i] + "=" + queryParams[keys[i]];
    }
    url = url + query;
  }
  return url;
};

const axiosRequest = ({ method, data, headers, endPoint, queryParams }) => {
  const url = buildUrl(endPoint, queryParams);
  return axios({
    url,
    method,
    data,
    headers,
  });
};

const apiGetRequest = (
  endPoint = "/",
  queryParams = {},
  data = {},
  sort = "relevant",
  page = 1
) => {
  queryParams = {
    count: 1000,
    page,
    sort,
    ...queryParams,
  };
  return axiosRequest({
    method: "GET",
    data,
    headers,
    endPoint,
    queryParams,
  }).then((req) => req.data);
};

const apiPostRequest = (
  endPoint = "/",
  body = {},
  queryParams = {},
  sort = "relevant",
  page = 1
) => {
  return axiosRequest({
    method: "POST",
    data: body,
    headers,
    queryParams,
    endPoint,
  });
};

const apiPutRequest = (
  endPoint = "/",
  body = {},
  queryParams = {},
  sort = "relevant",
  page = 1
) => {
  return axiosRequest({
    method: "PUT",
    data: body,
    headers,
    queryParams,
    endPoint,
  });
};

export { buildUrl, apiGetRequest, apiPostRequest, apiPutRequest };
