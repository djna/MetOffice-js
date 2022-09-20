
import Mustache from "./mustache.mjs"


/*
var output = Mustache.render("{{title}} spends {{calc}}", view); 
console.log(output);
*/

function updateHtmlWithError(response) {
    document.getElementById('results').innerHTML = `<h2>Error</h2>${response}`
}

async function updateHtmlWithResults(responseJson) {
    const response = await fetch('forecast.mustache');
    const template = await response.text();
    let rendered = Mustache.render(template, responseJson );
    document.getElementById('results').innerHTML = rendered;
}


function updateResults(location) {
    fetch(`http://localhost:3000/forecast?location=${location}`)
        .then(async response => {
            console.log(response.status, response.statusText);
            var responseJson = await response.json();
            if (response.status === 200) {
                console.log(responseJson);
                // $ is time in mins, add an hours equivalent
                responseJson.Period.forEach(
                    (period) => {
                        period.Rep.forEach(
                            rep => {
                                rep.$hr = rep.$/60;
                                rep.Fclass = "feelColor" + rep.F;
                            }
                            
                        )
                    }
                );
                updateHtmlWithResults(responseJson);
            } else {
                updateHtmlWithError(responseJson);
            }
        });
}

function onSubmit(form) {
    var location = form.location.value.replace(/\s/g, '');
    updateResults(location);
}

// this is a module, so onSubmit not visible to html
// one workaround, make globally available at expense of polluting global namespace
window.onSubmit = onSubmit;

// this would be better but we the form data is not conveniently in form.location
// too much hassle to select our data from DOM
//document.querySelector('#locationForm').addEventListener("submit", onSubmit);
