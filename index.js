import express from 'express';
import fs from 'fs';

import SitelistApiClient from './apiClients/sitelistApiClient.js'
import SitelistService from './services/sitelistService.js'
import ForecastService from './services/forecastService.js'
import ConsoleRunner from './consoleRunner.js';
import ForecastApiClient from './apiClients/forecastApiClient.js';

const sitelistApiClient = new SitelistApiClient();
const sitelistService = new SitelistService(sitelistApiClient);
const forecastApiClient = new ForecastApiClient();
const forecastService = new ForecastService(sitelistService, forecastApiClient);

const app = express();
const port = 3000;

app.use(express.static('frontend'));

app.get('/forecast', async (req, res) => {
    const userLocation = req.query.location;
    console.log("get forecast for ", userLocation);
    res.send("Not yet implemented");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})