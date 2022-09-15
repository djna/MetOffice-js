

import SitelistApiClient from './apiClients/sitelistApiCbClient.js'

const sitelistApiClient = new SitelistApiClient();

sitelistApiClient.getLocations(
    function(locationsList){
        console.log("We have " + locationsList.length + " locations");
    }
);


sitelistApiClient.getLocations(
    locationsList => console.log("We have " + locationsList.length + " locations")
);

/* example
sitelistApiClient.getLocations(
    (err, res) => {
        if ( err) {  error handling  }
        console.log(res);
        return workWith(res);
    }
);
*/






