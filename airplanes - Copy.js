document.getElementById('check-availability').addEventListener('click', function() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    // Simulated flight data with image URLs
    const flights = [
        { 
            id: 1, 
            from: 'New York', 
            to: 'Los Angeles', 
            date: '2024-10-10', 
            available: true,
            image: 'a1.jpg' // Replace with actual image URLs
        },
        { 
            id: 2, 
            from: 'New York', 
            to: 'Los Angeles', 
            date: '2024-10-10', 
            available: true,
            image: 'a2.jpg' // Replace with actual image URLs
        },
        { 
            id: 3, 
            from: 'Chicago', 
            to: 'San Francisco', 
            date: '2024-10-10', 
            available: false,
            image: '' // No image for unavailable flight
        },
        { 
            id: 4, 
            from: 'New York', 
            to: 'Los Angeles', 
            date: '2024-10-11', 
            available: true,
            image: 'https://example.com/images/flight3.jpg' // Replace with actual image URLs
        },
    ];

    const availableFlights = flights.filter(flight => 
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase() &&
        flight.date === date &&
        flight.available
    );

    const flightsList = document.getElementById('flights-list');
    flightsList.innerHTML = '';

    if (availableFlights.length > 0) {
        availableFlights.forEach(flight => {
            const li = document.createElement('li');
            li.className = 'flight';

            // Create an image element for the flight
            const img = document.createElement('img');
            img.src = flight.image;
            img.alt = `Flight from ${flight.from} to ${flight.to}`;
            img.className = 'flight-image';

            li.innerHTML = `Flight from ${flight.from} to ${flight.to} on ${flight.date} `;
            li.appendChild(img);
            li.innerHTML += ` <button onclick="bookFlight(${flight.id})">Book Now</button>`;
            flightsList.appendChild(li);
        });
        document.getElementById('availability-results').classList.remove('hidden');
    } else {
        flightsList.innerHTML = '<li>No flights available for this route.</li>';
        document.getElementById('availability-results').classList.remove('hidden');
    }
});

function bookFlight(flightId) {
    alert(`Flight with ID ${flightId} has been booked!`);
    // You can add actual booking logic here
}



