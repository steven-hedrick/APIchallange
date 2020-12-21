document.addEventListener('DOMContentLoaded', () => {
    function fetchData() {
        fetch('api.covid19api.com/summary')
        .then( response =>
            response.json() )
            .then( data =>
                renderSummary(data) )
    }

    function renderSummary(data) {
        for (const s of data) {
            const summaryTH = document.querySelector ('col');
            
            
        }
    }
})