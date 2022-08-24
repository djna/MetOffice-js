import BaseApiClient from './baseApiClient.js'

const ENDPOINT = 'sitelist';

export default class SitelistApiClient extends BaseApiClient {
    async getLocations() {
        
        const data = await this.makeRequest(ENDPOINT);
        return data.Locations.Location;
        
    }
}