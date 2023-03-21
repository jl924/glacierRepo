const apiKey = process.env.API_KEY;
console.error(process.env);
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

const axiosRequest = (options) => {
  let optionsWithDefaults = Object.assign(options, {});
  return axios(options);
};

const apiGetRequest = (
  endPoint = "/",
  queryParams = {},
  data = {},
  sort = "relevant",
  page = 1
) => {
  queryParams = {
    ...queryParams,
    count: 1000,
    page: page,
    sort,
  };
  const url = buildUrl(endPoint, queryParams);
  return axios({
    url,
    method: "GET",
    data,
    headers,
  }).then((req) => req.data);
};

const apiPostRequest = (
  endPoint = "/",
  body = {},
  queryParams = {},
  sort = "relevant",
  page = 1
) => {
  queryParams = {
    ...queryParams,
    count: 1000,
    page: page,
    sort,
  };
  const url = buildUrl(endPoint, queryParams);
  return axios({
    url,
    method: "POST",
    data: body,
    headers,
  });
};

export { buildUrl, apiGetRequest };
