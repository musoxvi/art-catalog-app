import {AxiosRequestConfig} from 'axios';
import {keysToCamel} from '../../utils/utils';
import {axiosInstance} from '../config/axiosConfig';

export class BaseApi {
  /**
   * request
   * @param {AxiosRequestConfig} config
   */
  public request = async <T>(config: AxiosRequestConfig) => {
    return axiosInstance
      .request(config)
      .then<T>(response => keysToCamel(response.data));
  };

  configAxiosInstance = {
    'Content-Type': 'application/json',
  };
}
