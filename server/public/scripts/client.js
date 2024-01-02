console.log('client.js is sourced!');

function fetchResults() {
    
    axios({
        method: 'GET',
        url: '/calculations',
    })

    .then(function (response) {
        console.log('GET Response:', response.data);
        render(response.data);
    })
    .catch(function (error) {
        console.log('GET Error', error.message);
    });

}

function render(calcHist) {
    const calcHistElement = document.querySelector('#resultHistory');
    const recentCalcElement = document.querySelector('#recentResult');
    recentCalcElement.innerHTML += 
    `
    <h2>Recent Results</h2>
    ${calcHist[calcHist.length-1].numOne}${calcHist[calcHist.length-1].operator}${calcHist[calcHist.length-1].numTwo}=${calcHist[calcHist.length-1].result}`

    for (let calc of calcHist) {
        console.log('Calculation:', calc);
        calcHistElement.innerHTML += `
        <li>
            ${calc.numOne}${calc.operator}${calc.numTwo}=${calc.result}
        </li>
        `
    }

}

fetchResults();