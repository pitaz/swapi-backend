import { RESTDataSource } from '@apollo/datasource-rest';
import { BASE_URL } from '../constants';



class StarwarsAPI extends RESTDataSource {
  override baseURL = BASE_URL;

  async getPerson(id: string): Promise<any> {
    return this.get<any>(`people/${encodeURIComponent(id)}`);
  }

  async getPeople(limit = '10', page = '1', search?: string): Promise<any[]> {
    let params: IParams = {
      limit,
      page,
    }

    if(search) {
      params.search = search
    }
    const data = await this.get<any>('people', {
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
