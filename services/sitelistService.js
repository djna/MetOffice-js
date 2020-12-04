export default class SitelistService {
    constructor(sitelistApiClient) {
        this.sitelistApiClient = sitelistApiClient;
        this.cachedLocations = undefined;
    }

    async getLocations() {
        if (this.cachedLocations != undefined) {
            return this.cachedLocations;
        }
        this.cachedLocations = this.sitelistApiClient.getLocations();
        return this.cachedLocations;
    }
}