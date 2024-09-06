document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collecting form data
    const name = document.getElementById('name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvc = document.getElementById('cvc').value;

    // Basic validation
    if (name && cardNumber && expiryDate && cvc) {
        alert('Processing payment...');

        // Here you would send data to your backend server for further processing
        // Such as integrating with Stripe, PayPal, or any other payment gateway
    } else {
        alert('Please fill in all the required fields.');
    }
});
