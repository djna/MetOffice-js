export default class ForecastService {
    constructor(sitelistService, forecastApiClient) {
        this.sitelistService = sitelistService;
        this.forecastApiClient = forecastApiClient;
    }

    async getForecastForLocation(locationName) {
        const locations = await this.sitelistService.getLocations();
        const locationFound = locations.find(location => location.name == locationName);
        if (locationFound === undefined) {
            throw locationName + ' not found';
        }
        const forecast = this.forecastApiClient.getForecastForLocation(locationFound.id);
        return forecast;
    }
}