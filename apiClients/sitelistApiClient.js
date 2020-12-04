import BaseApiClient from './baseApiClient.js'

const ENDPOINT = 'sitelist';

export default class SitelistApiClient extends BaseApiClient {
    async getLocations() {
        const body = await this.makeRequest(ENDPOINT);
        return body.Locations.Location;
    }
}