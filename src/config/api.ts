import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export enum HttpResponseStatus {
  OK = 200,
  CREATED = 201,
  SESSION_OUT = 440,
}

export class ApiService {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  private handleResponse(response: AxiosResponse) {
    return response.data;
  }

  private async handleResponseError(error: AxiosError) {
    return Promise.reject(error.response?.data);
  }

  private async get(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.instance.get(url, config);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleResponseError(error as AxiosError);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async post(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const response = await this.instance.post(url, data, config);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleResponseError(error as AxiosError);
    }
  }

  public getInstance() {
    return this.instance;
  }

  public getMethods() {
    return {
      post: this.post,
      get: this.get,
    };
  }
}

const apiService = new ApiService(import.meta.env.VITE_API_BASE_URL);
export const axiosInstance = apiService.getInstance();
const requests = apiService.getMethods();

export default requests;
