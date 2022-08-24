import BaseApiClient from './baseApiClient.js'

const ENDPOINT = 'sitelist';

export default class SitelistApiClient extends BaseApiClient {
    async getLocations() {
        
        return new Promise(
            (resolve, reject) => {
                const requestPromise = this.makeRequest(ENDPOINT);
                requestPromise.then(
                    (body) => {
                        resolve(body.data.Locations.Location);
                    }
                ).catch (e =>  reject(e) );
            }
        );
        
    }
}