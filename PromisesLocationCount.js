import SitelistApiClient from './apiClients/sitelistApiClient.js'

const sitelistApiClient = new SitelistApiClient();


let locationPromise = sitelistApiClient.getLocations();

// TODO:2 use locationPromise.then() to display a count of the locations


