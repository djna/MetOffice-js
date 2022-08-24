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
app.use(express.static('widget'));
app.use('/widget', express.static('widget/index.html'));

app.use('/global_warming', express.static('frontend/global_warming.html'));

app.get('/forecast', async (req, res) => {
    const userLocation = req.query.location;
    forecastService.getForecastForLocation(userLocation.replace(/\s/g, ''))
        .then(forecast => {
            res.send(forecast);
        })
        .catch(reason => res.status(400).send(reason));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})