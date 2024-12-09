document.getElementById('busBookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fromCity = document.getElementById('from-bus').value;
    const toCity = document.getElementById('to-bus').value;
    const date = document.getElementById('date-bus').value;

    // Redirect to the available-buses.html page with the selected parameters
    window.location.href = `available-buses.html?from=${fromCity}&to=${toCity}&date=${date}`;
});



