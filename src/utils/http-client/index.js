import * as Axios from "axios";

const HttpMethod = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  PUT: "PUT",
  DELETE: "DELETE",
};

class HttpClient {
  /**
   * Create a new Http Client
   */
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this.createCancelToken();
    this.createCancelToken = this.createCancelToken.bind(this);
  }

  createCancelToken() {
    this.CancelToken = Axios.CancelToken;
    this.axiosSource = this.CancelToken.source();
  }

  /**
   * Return base URL of the current Http Client
   */
  getBaseUrl() {
    return this._baseUrl;
  }

  /**
   * Send request to the desired end point.
   * @param method use HttpMethod enum
   * @param url url string that should be appended to the base url
   * @param data data that should be sent, if any.
   */
  request(method, url, data, params) {
    return Axios.default.request({
      baseURL: this._baseUrl,
      cancelToken: this.axiosSource.token,
      method,
      url,
      data,
      params,
    });
  }
}

export { HttpMethod };

export default HttpClient;
