function updateHtmlWithError(response) {
    document.getElementById('results').innerHTML = `<h2>Error</h2>${response}`
}

function updateHtmlWithResults(responseJson) {
    console.log("have some JSON ");

    let dataSet = [];

    responseJson.Period.forEach(
        (p) => {
            let day = { "date" : p.value}

            p.Rep.forEach(
                (r) => {
                 let data = Object.assign ( {}, day);
                 data.time = r.$;
                 data.temperature = r.T;
                 dataSet.push(data);

                }
            );
        }
    );

    $('#resultTable').DataTable({
        data: dataSet,
        columns: [
            { data: 'date' },
            { data: 'time' },
            { data: 'temperature' }
        ],
    });
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
