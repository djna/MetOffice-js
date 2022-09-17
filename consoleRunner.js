import { createInterface } from 'readline';

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

export default class ConsoleRunner {
    constructor(forecastService) {
        this.forecastService = forecastService;
    }

    handleError(reason) {
        console.error('\n' + reason);
    }

    promptForLocation() {
        return new Promise((resolve, reject) =>
            readline.question('\nEnter your location: ', resolve)
        );
    }
    
    displayReps(reps) {
        reps.forEach(rep => 
            console.log(`  Time:${rep.$ / 60}:00 D:${rep.D} F:${rep.F} G:${rep.G} H:${rep.H} Pp:${rep.Pp} S:${rep.S} T:${rep.T} V:${rep.V} W:${rep.W} U:${rep.U}`)
        );
    }

    displayForecast(forecast) {
        forecast.Period.forEach(period => {
            console.log(`\nDate: ${period.value}`);
            this.displayReps(period.Rep);
        });
    }

    async runUntilStop() {
        let stopRequested = false;

        while ( !stopRequested){
            stopRequested = await this.getOneForecast();
        }

        return;
    }
    async getOneForecast(){ 
        try {
            let location = await this.promptForLocation();
            if (location === "q"){
                return true;
            }
            let forecast = await this.forecastService.getForecastForLocation(
                                       location.replace(/\s/g, ''));
            
            this.displayForecast(forecast);
        } catch(reason) {
            this.handleError(reason);
            return false;
        } 
    }
}