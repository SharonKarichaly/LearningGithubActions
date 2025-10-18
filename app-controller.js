console.log('🚀 Tech Stack Explorer - Client Side Loaded');

/* Load pod information on page load */
window.onload = function() {
    console.log("Page loaded - Fetching pod information...");

    fetch("/os", {
        method: "GET"
    })
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
        throw new Error('Request failed');
    })
    .catch(function(error) {
        console.log(error);
    })
    .then(function(data) {
        if (data) {
            document.getElementById('podName').innerHTML = `Pod: ${data.os} | Environment: ${data.env || 'Development'}`;
        }
    });
};

/* Search button click handler */
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
    searchBtn.addEventListener('click', searchTechStack);
}

/* Allow Enter key to trigger search */
const techInput = document.getElementById('techID');
if (techInput) {
    techInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchTechStack();
        }
    });
}

function searchTechStack() {
    const techID = document.getElementById("techID").value;
    console.log("Searching for Tech Stack ID:", techID);

    if (!techID || techID < 1 || techID > 9) {
        alert("⚠️ Please enter a valid number between 1 and 9!\n\n1=Python | 2=JavaScript | 3=Java | 4=Go | 5=Rust\n6=TypeScript | 7=C++ | 8=Ruby | 9=PHP");
        return;
    }

    fetch("/techstack", {
        method: "POST",
        body: JSON.stringify({
            id: parseInt(techID)
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Tech stack not found');
    })
    .catch(function(error) {
        alert("❌ Oops! We have 9 tech stacks available.\nPlease select a number from 1 to 9");
        console.log(error);
    })
    .then(function(data) {
        if (data) {
            // Update UI with tech stack data
            document.getElementById('techName').innerHTML = data.name;
            document.getElementById('techCategory').innerHTML = data.category;
            document.getElementById('techDescription').innerHTML = data.description;
            document.getElementById('yearCreated').innerHTML = data.yearCreated;
            document.getElementById('popularity').innerHTML = data.popularity;
            document.getElementById('useCase').innerHTML = data.useCase;
            
            // Update logo
            const logoElement = document.getElementById('techLogo');
            logoElement.src = data.logo;
            logoElement.alt = `${data.name} Logo`;

            console.log(`✅ Loaded: ${data.name}`);
        }
    });
}