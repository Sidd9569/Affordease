// script-available-cabs.js
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const fromCity = params.get('from');
    const toCity = params.get('to');
    const date = params.get('date');

    // Mock data for available cabs
    const cabs = [
        { id: 1, name: "Cab 1", from: "Delhi", to: "Azamgarh", date: "2024-09-30",time: "10:00", price: 1500,image:"c1.jpg" },
        { id: 2, name: "Cab 2", from: "Delhi", to: "Kolkata", date: "2024-09-30", price: 1800 },
        { id: 3, name: "Cab 3", from: "Mumbai", to: "Hyderabad", date: "2024-09-30", price: 2000 },
        { id: 4, name: "Cab 4", from: "Bangalore", to: "Azamgarh", date: "2024-09-30", price: 1700 },
        { id: 5, name: "Cab 5", from: "Delhi", to: "Azamgarh", date: "2024-09-30", price: 1600 ,image:"c2.jpg" },
    ];

    // Filter cabs based on user selection
    const availableCabs = cabs.filter(cab => cab.from === fromCity && cab.to === toCity && cab.date === date);

    const availableCabsDiv = document.getElementById('availableCabs');
    if (availableCabs.length > 0) {
        availableCabs.forEach(cab => {
            const cabDiv = document.createElement('div');
            cabDiv.className = 'cab';
            const cabImage = cab.image ? `<img src="${cab.image}" alt="${cab.name}" width="200" />` : '';
            cabDiv.innerHTML = `
                <h3>${cab.name}</h3>
                ${cabImage}
                <p>From: ${cab.from}</p>
                <p>To: ${cab.to}</p>
                <p>Date: ${cab.date}</p>
                <p>Price: ₹${cab.price}</p>
                <button onclick="bookCab(${cab.id})">Book Now</button>
            `;
            availableCabsDiv.appendChild(cabDiv);
        });
    } else {
        availableCabsDiv.innerHTML = '<p>No available cabs for the selected route and date.</p>';
    }
};

// Function to handle booking cab (placeholder)
function bookCab(cabId) {
    alert(`Cab ${cabId} booked!`);
}
