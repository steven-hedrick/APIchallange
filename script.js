const baseURL = "https://api.covid19api.com/summary"

const searchOnClick = document.querySelector('onClick');
const results = document.querySelector('th');

searchResults.addEventListener('refreshData', fetchResults);

function fetchResults(e){
    e.preventDefault();
    
    fetch(baseURL)
        .then(result => result.json())
        .then(json => {
            console.log(json);
            display(json);
        })
        .catch(err => console.log(err))
}

function display(results){
    results.forEach(r => {
        let result = document.createElement('th');
        result.innerText = r.result_per_country;
        results.appendChild(result);
    })
}