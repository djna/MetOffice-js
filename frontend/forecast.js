function updateHtmlWithError(response) {
    document.getElementById('results').innerHTML = `<h2>Error</h2>${response}`
}

function updateHtmlWithResults(responseJson) {
    var html = "";
    html += '<div class="container">';
    html += '<h2>Results</h2>';
    responseJson.Period.forEach((period) => {
        html += `<h3>${period.value}</h3>`;
        html += '<table class="table table-hover"><thead class="thead-light"><tr>';
        html += '<th scope="col">Time</th>';
        html += '<th scope="col">Feels like</th>';
        html += '<th scope="col">Wind gust</th>';
        html += '<th scope="col">Relative humidity</th>';
        html += '<th scope="col">Temperature</th>';
        html += '<th scope="col">Visibility</th>';
        html += '<th scope="col">Wind direction</th>';
        html += '<th scope="col">Wind speed</th>';
        html += '<th scope="col">Max UV</th>';
        html += '<th scope="col">Weather type</th>';
        html += '<th scope="col">Precipitation probability</th>';
        html += '</tr></thead><tbody>';
        var rowNum = 1;
        period.Rep.forEach((rep) => {
            html += '<tr>';
            html += `<th scope="row">${rep.$ / 60}:00</th>`;
            html += `<td>${rep.F}</td>`;
            html += `<td>${rep.G}</td>`;
            html += `<td>${rep.H}</td>`;
            html += `<td>${rep.T}</td>`;
            html += `<td>${rep.V}</td>`;
            html += `<td>${rep.D}</td>`;
            html += `<td>${rep.S}</td>`;
            html += `<td>${rep.U}</td>`;
            html += `<td>${rep.W}</td>`;
            html += `<td>${rep.Pp}</td>`;
            html += '</tr>';
            rowNum++;
        });
        html += '</tbody></table>';
    });
    html += '</div>';
    document.getElementById('results').innerHTML = html;
}

function updateResults(location) {
    fetch(`http://localhost:3000/forecast?location=${location}`)
        .then(async response => {
            console.log(response.status, response.statusText);
            var responseJson = await response.json();
            if (response.status === 200) {
                console.log(responseJson);
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
