document.getElementById('cabBookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fromCity = document.getElementById('from-cab').value;
    const toCity = document.getElementById('to-cab').value;
    const date = document.getElementById('date-cab').value;

    // Redirect to the available-cabs.html page with the selected parameters
    window.location.href = `available-cabs.html?from=${fromCity}&to=${toCity}&date=${date}`;
});
