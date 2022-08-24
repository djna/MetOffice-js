import { URL } from 'url';
import axios from 'axios';

const BASE_URL = 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/';
const API_KEY = 'bf5f5026-1766-49c3-9d9f-aff7ae95a8e6';

export default class BaseApiClient {
    requestUrl(endpoint, parameters) {
        const requestUrl = new URL(endpoint, BASE_URL);
       
        parameters.forEach(param => requestUrl.searchParams.append(param.name, param.value));
        requestUrl.searchParams.append("key", API_KEY);
        return requestUrl.href;
    }

    async makeRequest(endpoint, parameters) {
        if (parameters === undefined) {
            parameters = [];
        }

        let response = await axios.get(this.requestUrl(endpoint, parameters) );
        return response.data;
    }
}