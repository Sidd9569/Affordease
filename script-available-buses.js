// Sample data for available buses (this can be replaced with a real API/database query)
const buses = [
    { id: 1, from: 'Delhi', to: 'Chennai', date: '2024-10-05', name: 'Express Bus', fare: 500, image: "b1.jpg" },
    { id: 2, from: 'Mumbai', to: 'Kolkata', date: '2024-10-05', name: 'Luxury Bus', fare: 800 },
    { id: 3, from: 'Bangalore', to: 'Hyderabad', date: '2024-10-06', name: 'Super Bus', fare: 600 },
    { id: 4, from: 'Delhi', to: 'Chennai', date: '2024-10-05', name: 'Standard Bus', fare: 400, image: "b2.png" },
    { id: 5, from: 'Mumbai', to: 'Kolkata', date: '2024-10-07', name: 'Comfort Bus', fare: 700 }
];

// Extract parameters from URL
const urlParams = new URLSearchParams(window.location.search);
const fromCity = urlParams.get('from');
const toCity = urlParams.get('to');
const travelDate = urlParams.get('date');

// Filter buses based on user input
const availableBuses = buses.filter(bus => 
    bus.from === fromCity && bus.to === toCity && bus.date === travelDate
);

// Display the available buses
const busContainer = document.getElementById('availableBuses');
busContainer.innerHTML = ''; // Clear previous results

if (availableBuses.length > 0) {
    availableBuses.forEach(bus => {
        const busDiv = document.createElement('div');
        busDiv.classList.add('bus-details');

        // Add image if it exists
        const busImage = bus.image ? `<img src="${bus.image}" alt="${bus.name}" width="200" />` : '';

        busDiv.innerHTML = `
            <h3>${bus.name}</h3>
            ${busImage}
            <p>From: ${bus.from} - To: ${bus.to}</p>
            <p>Date: ${bus.date}</p>
            <p>Fare: ₹${bus.fare}</p>
            <button onclick="bookBus(${bus.id})">Book Now</button>
        `;
        busContainer.appendChild(busDiv);
    });
} else {
    busContainer.innerHTML = '<p>No buses available for the selected route and date.</p>';
}

// Function to handle bus booking (you can customize the booking logic)
function bookBus(busId) {
    alert(`Bus with ID ${busId} has been booked!`); // Placeholder for booking logic
}
