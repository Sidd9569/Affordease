// Listen for form submission to check availability
document.getElementById('trainBookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const from = document.getElementById('from-train').value;
    const to = document.getElementById('to-train').value;
    const date = document.getElementById('date-train').value;
    const time = document.getElementById('time-train').value;

    // Save form data to localStorage
    localStorage.setItem('from', from);
    localStorage.setItem('to', to);
    localStorage.setItem('date', date);
    localStorage.setItem('time', time);

    // Redirect to the availability page
    window.location.href = 'available-trains.html';
});
