// Mock data for available packages
const packages = [
    { id: 1, type: 'Hotel & Airplane', city: 'New York', price: '₹15000', details: 'Includes hotel stay and round-trip flight.' },
    { id: 2, type: 'Hotel & Cab', city: 'Mumbai', price: '₹12000', details: 'Includes hotel stay and transportation via cab.' },
    { id: 3, type: 'Flight Only', city: 'Bangalore', price: '₹8000', details: 'One-way or round-trip flight options available.' },
    { id: 4, type: 'Hotel Only', city: 'Chennai', price: '₹5000', details: 'Comfortable hotel stay with breakfast included.' },
    { id: 5, type: 'Train & Hotel', city: 'Delhi', price: '₹10000', details: 'Includes train tickets and hotel accommodation.' },
    { id: 6, type: 'Cab Only', city: 'Mumbai', price: '₹3000', details: 'Private cab for local travel.' },
];

// Function to display available packages
function displayAvailablePackages() {
    const packageContainer = document.getElementById('availablePackages');

    // Retrieve booking details from session storage
    const city = sessionStorage.getItem('package-city');
    const checkin = sessionStorage.getItem('package-checkin');
    const checkout = sessionStorage.getItem('package-checkout');
    const guests = sessionStorage.getItem('package-guests');

    // Filter packages based on the selected city
    const filteredPackages = packages.filter(pkg => pkg.city === city);

    // Display packages or a message if none are available
    if (filteredPackages.length === 0) {
        packageContainer.innerHTML = '<p>No packages available for your selected city.</p>';
        return;
    }

    // Create a list of available packages
    const packageList = filteredPackages.map(pkg => `
        <div class="package">
            <h3>${pkg.type}</h3>
            <p>City: ${pkg.city}</p>
            <p>Price: ${pkg.price}</p>
            <p>Details: ${pkg.details}</p>
            <button onclick="bookPackage(${pkg.id})">Book Now</button>
        </div>
    `).join('');

    // Display the package list
    packageContainer.innerHTML = packageList;
}

// Placeholder function to simulate booking
function bookPackage(packageId) {
    alert(`Package ID: ${packageId} has been booked.`);
}

// Call the function to display packages on page load
window.onload = displayAvailablePackages;
