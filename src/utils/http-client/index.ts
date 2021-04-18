import * as Axios from "axios";

enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

class HttpClient {
  private _baseUrl: string;

  private CancelToken!: Axios.CancelTokenStatic;

  private axiosSource!: Axios.CancelTokenSource;

  /**
   * Create a new Http Client
   */
  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
    this.createCancelToken();
    this.createCancelToken = this.createCancelToken.bind(this);
  }

  createCancelToken() {
    // @ts-ignore
    this.CancelToken = Axios.CancelToken;
    this.axiosSource = this.CancelToken.source();
  }

  /**
   * Return base URL of the current Http Client
   */
  public getBaseUrl() {
    return this._baseUrl;
  }

  /**
   * Send request to the desired end point.
   * @param method use HttpMethod enum
   * @param url url string that should be appended to the base url
   * @param data data that should be sent, if any.
   */
  public request<D, P>(
    method: HttpMethod,
    url: string,
    data?: D,
    params?: P
  ): Promise<Axios.AxiosResponse> {
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
