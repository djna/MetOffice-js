
"use strict"

import process from  'process';

import SitelistApiClient from './apiClients/sitelistApiClient.js'

let [node, app, chosenLocation = "Cambridge"] = process.argv;

console.log("Location ", chosenLocation);

let client = new SitelistApiClient();

try {
    const locations = await client.getLocations();
    findLocation(locations);
} catch ( e ) {reportError(e); }

function findLocation(locationList){
    console.log("Locations: ", locationList.length);
    let chosenLocationDetails = locationList.find( (l) => l.name == chosenLocation);
    console.log("Chosen Location ", chosenLocation, 
         chosenLocationDetails ? chosenLocationDetails : "not found"
    )
}

function reportError(e){
    console.log("Error " + e);
}