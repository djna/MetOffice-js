import SitelistApiClient from './apiClients/sitelistApiClient.js'
import SitelistService from './services/sitelistService.js'
import ForecastService from './services/forecastService.js'
import ConsoleRunner from './consoleRunner.js';
import ForecastApiClient from './apiClients/forecastApiClient.js';

const sitelistApiClient = new SitelistApiClient();
const sitelistService = new SitelistService(sitelistApiClient);
const forecastApiClient = new ForecastApiClient();
const forecastService = new ForecastService(sitelistService, forecastApiClient);
const consoleRunner = new ConsoleRunner(forecastService);
consoleRunner.runForever();