import BaseApiClient from './baseApiClient.js'

const ENDPOINT = 'sitelist';

export default class SitelistApiClient extends BaseApiClient {
    getLocations() {
        return this.makeRequest(ENDPOINT).then ( 
                body =>  body.Locations.Location              
            );  
    }
}