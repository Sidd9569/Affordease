// Sample train data (this would come from an API in a real-world application)
const availableTrains = [
    { name: "Express Train 101", from: "Delhi", to: "Azamgarh", departure: "2024-10-10T08:00:00", arrival: "2024-10-10T12:00:00", price: 1500, image: "t2.jpg" },
    { name: "Intercity Train 202", from: "Delhi", to: "Chennai", departure: "2024-10-11T06:00:00", arrival: "2024-10-11T15:00:00", price: 1800, image: "intercity_train.jpg" },
    { name: "Local Train 303", from: "Bangalore", to: "Mumbai", departure: "2024-10-12T09:30:00", arrival: "2024-10-12T14:00:00", price: 900, image: "local_train.jpg" }
];

// Get form data from localStorage
const from = localStorage.getItem('from');
const to = localStorage.getItem('to');
const date = localStorage.getItem('date');

// Function to display available trains
function displayAvailableTrains() {
    const availableTrainsDiv = document.getElementById('availableTrains');
    availableTrainsDiv.innerHTML = '';  // Clear existing content

    // Filter trains based on the location
    const filteredTrains = availableTrains.filter(train => train.from === from && train.to === to);

    if (filteredTrains.length === 0) {
        availableTrainsDiv.innerHTML = '<p>No trains available for the selected route.</p>';
    } else {
        const trainsList = document.createElement('ul');
        filteredTrains.forEach(train => {
            const trainItem = document.createElement('li');
            trainItem.innerHTML = `
                <img src="${train.image}" alt="${train.name} image" class="train-image"><br>
                <strong>${train.name}</strong><br>
                From: ${train.from}<br>
                To: ${train.to}<br>
                Departure: ${new Date(train.departure).toLocaleString()}<br>
                Arrival: ${new Date(train.arrival).toLocaleString()}<br>
                Price: ₹${train.price}<br>
                <hr>
            `;
            trainsList.appendChild(trainItem);
        });
        availableTrainsDiv.appendChild(trainsList);
    }
}

// Call the function on page load
window.onload = displayAvailableTrains;

