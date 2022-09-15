import SitelistApiClient from './apiClients/sitelistApiClient.js'

const sitelistApiClient = new SitelistApiClient();

sitelistApiClient.getLocations().then(
    locationsList => console.log("We have " + locationsList.length + " locations")
);


