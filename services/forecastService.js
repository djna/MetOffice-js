export default class ForecastService {
    constructor(sitelistService, forecastApiClient) {
        this.sitelistService = sitelistService;
        this.forecastApiClient = forecastApiClient;
    }

    getForecastForLocation(locationName) {
        return this.sitelistService.getLocations().then(
            locations => this.forecastFromLocationList( locationName, locations)
        )
    }

    forecastFromLocationList(locationName, locationList){

        const locationFound = locationList.find(location => location.name == locationName);
        if (locationFound === undefined) {
            throw locationName + ' not found';
        }
        const forecast = this.forecastApiClient.getForecastForLocation(locationFound.id);
        return forecast;
    }
}