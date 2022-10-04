
// site list client using callbacks

import { URL } from 'url';
import request from 'request';

const BASE_URL = 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/';
const API_KEY = 'bf5f5026-1766-49c3-9d9f-aff7ae95a8e6';

export default class SitelistApiClient {
    requestUrl(endpoint) {
        const requestUrl = new URL(endpoint, BASE_URL);
        requestUrl.searchParams.append("key", API_KEY);
        return requestUrl.href;
    }
    
    getLocations(callback, errHandler) {
        request(this.requestUrl('sitelist'), 
            function (error, response, body) {
                if ( error) {
                    errHandler(error);
                }
                
                let result = JSON.parse(body);
                callback( result.Locations.Location); 
           }
      );
        
    }
}