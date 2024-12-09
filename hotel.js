document.getElementById('check-availability').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;

    // Simulated hotel data with image URLs
    const hotels = [
        { 
            id: 1, 
            name: 'Hotel Sunshine', 
            location: 'New York', 
            available: true, 
            image: 'h1.jpg' // Replace with actual image URLs
        },
        { 
            id: 2, 
            name: 'Grand Hotel', 
            location: 'Los Angeles', 
            available: true, 
            image: 'https://example.com/images/hotel2.jpg' // Replace with actual image URLs
        },
        { 
            id: 3, 
            name: 'City Center Inn', 
            location: 'Chicago', 
            available: false, 
            image: '' // No image for unavailable hotel
        },
        { 
            id: 4, 
            name: 'Cozy Stay', 
            location: 'New York', 
            available: true, 
            image: 'h2.avif' // Replace with actual image URLs
        },
    ];

    const availableHotels = hotels.filter(hotel => 
        hotel.location.toLowerCase() === location.toLowerCase() &&
        hotel.available
    );

    const hotelsList = document.getElementById('hotels-list');
    hotelsList.innerHTML = '';

    if (availableHotels.length > 0) {
        availableHotels.forEach(hotel => {
            const li = document.createElement('li');
            li.className = 'hotel';

            // Create an image element for the hotel
            const img = document.createElement('img');
            img.src = hotel.image;
            img.alt = hotel.name;
            img.className = 'hotel-image';

            li.innerHTML = `${hotel.name} in ${hotel.location}`;
            li.appendChild(img);
            li.innerHTML += ` <button onclick="bookHotel(${hotel.id})">Book Now</button>`;
            hotelsList.appendChild(li);
        });
        document.getElementById('availability-results').classList.remove('hidden');
    } else {
        hotelsList.innerHTML = '<li>No hotels available for this location.</li>';
        document.getElementById('availability-results').classList.remove('hidden');
    }
});

function bookHotel(hotelId) {
    alert(`Hotel with ID ${hotelId} has been booked!`);
    // You can add actual booking logic here
}

