import SitelistApiClient from './apiClients/sitelistApiClient.js'

const sitelistApiClient = new SitelistApiClient();


let locationPromise = sitelistApiClient.getLocations();

locationPromise.then(
    locationsList => console.log("We have " + locationsList.length + " locations")
);

locationPromise.then(
    locationsList => console.log("First Location: ", locationsList[0])
);


sitelistApiClient.getLocations().then(
    locationsList => console.log("We have " + locationsList.length + " locations")
);


