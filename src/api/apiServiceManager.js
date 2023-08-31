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

  set method(newMethod) {
    this._method = newMethod;
  }

  get headers() {
    return this._headers;
  }

  set headers(newHeaders) {
    this._headers = newHeaders;
  }

  getRequest(reBody) {
    return {
      method: this._method,
      headers: this._headers,
      body: this._method === "POST" ? JSON.stringify(reBody) : null,
    };
  }
}

export default ApiService;
