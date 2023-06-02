import axios from "axios";
import { BASE_URL } from "../constants.js";

export default class Connection {
  constructor(accessToken) {
    this.AxiosInstance = axios.create({
      baseURL: BASE_URL,
      timeout: 1000,
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }

  async get(url) {
    try {
      let resp = await this.AxiosInstance.request(url);
      return resp.data.docs;
    } catch (error) {
      throw error;
    }
  }
}
