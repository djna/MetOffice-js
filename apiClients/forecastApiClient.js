import BaseApiClient from './baseApiClient.js'

const THREE_HOURLY_PARAMETERS = [
    { name: 'res', value: '3hourly' }
];

export default class ForecastApiClient extends BaseApiClient {
    async getForecastForLocation(locationId) {
        const body = await this.makeRequest(locationId, THREE_HOURLY_PARAMETERS);
        return body.SiteRep.DV.Location;
    }
}