async function windowActions(){
    const endpoint = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";
    const request = await fetch(endpoint)
    const rests = await request.json()

    console.log(rests)

    function findMatches(word, rests) {
        return rests.filter(place => {
            const regex = new RegExp(word, 'gi');
            return place.name.match(regex) || place.city.match(regex)
        });
    }

    function displayMatches(event) {
        const matchArray = findMatches(event.target.value, rests);
        console.log(matchArray)
        const html = matchArray.map(place => {
            return `
                <li>
                    <span class="name">${place.name}, ${place.city}</span>
                </li>
            
            `;
        }).join('');
        suggestions.innerHTML = html
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    
    searchInput.addEventListener('change', async (evt) => {displayMatches(evt)});
    searchInput.addEventListener('keyup', async (evt) => {displayMatches(evt)});

}

window.onload = windowActions;