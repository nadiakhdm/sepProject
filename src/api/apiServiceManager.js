class ApiService {
  constructor(authToken) {
    this._authToken = authToken;
    this._method = "GET";
    this._headers = {"Content-Type": "application/json"};
  }
  get authToken() {
    return this._authToken;
  }

  get method() {
    return this._method;
  }

  set body(newbody) {
    this._body = newbody;
  }
  get body() {
    return this._body;
  }

  set method(newMethod) {
    this._method = newMethod;
  }

  get headers() {
    return this._headers;
  }

  set headers(newHeaders) {
    this._headers = newHeaders;
  }

  getRequest() {
    return {
      method: this._method,
      headers: this._headers,
      data: this._method === "POST" ? JSON.stringify(this._body) : null,
    };
  }
}

export default ApiService;
