import { RESTDataSource } from '@apollo/datasource-rest';
import { BASE_URL } from '../constants';



class StarwarsAPI extends RESTDataSource {
  override baseURL = BASE_URL;

  async getPerson(id: string): Promise<TPerson> {
    return this.get<TPerson>(`people/${encodeURIComponent(id)}`);
  }

  async getPeople(limit = '10', page = '1', search?: string): Promise<TPerson[]> {
    let params: IParams = {
      limit,
      page,
    }

    if(search) {
      params.search = search
    }
    const data = await this.get<TPerson[]>('people', {
      params: {
        per_page: limit,
        page,
        search
      },
    });
    return data;
  }
}

export default StarwarsAPI;
