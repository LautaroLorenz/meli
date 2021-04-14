import axios from 'axios';

class ItemsAPI {
  private static readonly BASE_URL = 'http://localhost:3200/api/items';
  private static readonly HEADERS = { 
    name: 'LAUTARO', 
    lastname: 'LORENZ'
  };

  public static getItems(search: string) {
    return axios.get(this.BASE_URL, {
      headers: this.HEADERS,
      params: { q: search }
    });
  }

  public static getItem(id: string) {
    return axios.get(this.BASE_URL.concat('/').concat(id), {
      headers: this.HEADERS
    });
  }
}

export default ItemsAPI;