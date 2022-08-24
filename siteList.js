
"use strict"

import process from  'process';

import SitelistApiClient from './apiClients/sitelistApiClient.js'

let [node, app, chosenLocation = "Cambridge", ...ignored] = process.argv;

console.log("Location ", chosenLocation);

let client = new SitelistApiClient();

client.getLocations().then ( locations =>
    findLocation(locations)
    )

function findLocation(locationList){
    console.log("Locations: ", locationList.length);
    let chosenLocationDetails = locationList.find( (l) => l.name == chosenLocation);
    console.log("Chosen Location ", chosenLocation, 
         chosenLocationDetails ? chosenLocationDetails : "not found"
    )
}