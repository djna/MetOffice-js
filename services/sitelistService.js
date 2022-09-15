export default class SitelistService {
    constructor(sitelistApiClient) {
        this.sitelistApiClient = sitelistApiClient;
        this.cachedLocations = undefined;
    }

    getLocations() {
        if (this.cachedLocations != undefined) {
            return this.cachedLocations;
        }
        this.cachedLocations = this.sitelistApiClient.getLocations();
        return this.cachedLocations;
    }
}