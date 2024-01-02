console.log('client.js is sourced!');

function fetchResults() {

    axios({
        method: 'GET',
        url: '/calculations',
    })

    .then(function (response) {
        console.log('GET Response:', response.data);
    })
    .catch(function (error) {
        console.log('GET Error', error.message);
    });
}

fetchResults();