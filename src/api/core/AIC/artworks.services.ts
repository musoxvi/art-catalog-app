import {Method} from 'axios';
//import {CountriesDTO, CountryStatusDTO} from '../../../models/models';
import {METHOD} from '../../config/axiosConfig';
import {BaseApi} from '../BaseApi';

const {GET} = METHOD;

class AIC extends BaseApi {
  /**
   * getArtworks
   * GET /artworks
   * @returns {Promise<ArtworksDTO[]>}
   */
  public getArtworks(page = 1, limit = 10): Promise<any[]> {
    return this.request<any[]>({
      method: GET as Method,
      headers: this.configAxiosInstance,
      url: `/artworks?fields=id,title,place_of_origin,artist_title,category_titles,medium_display,image_id&page=${page}&limit=${limit}`,
    });
  }
}

export default new AIC();
