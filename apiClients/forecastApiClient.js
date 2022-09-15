import BaseApiClient from './baseApiClient.js'

const THREE_HOURLY_PARAMETERS = [
    { name: 'res', value: '3hourly' }
];

export default class ForecastApiClient extends BaseApiClient {
    getForecastForLocation(locationId) {
        return this.makeRequest(locationId, THREE_HOURLY_PARAMETERS).then(
            body =>  body.SiteRep.DV.Location
        )
    }
}