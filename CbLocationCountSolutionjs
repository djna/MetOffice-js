

import SitelistApiClient from './apiClients/sitelistApiCbClient.js'

const sitelistApiClient = new SitelistApiClient();


sitelistApiClient.getLocations(
    function (locations) {
        console.log(`We have ${locations.length} locations`);
    }
);

sitelistApiClient.getLocations(
    locations =>
        console.log(`We have ${locations.length} locations`)
);

sitelistApiClient.getLocations(

    locations =>
        console.log(`We have ${locations.length} locations`),
    error =>
        console.log(`Failure - ${error}`)

);








