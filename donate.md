---
layout: page
title: Donate
permalink: /donate/
---

# Support Our Mission

Your donation can spark change! By contributing, you empower disenfranchised Mesoamerican communities with vital computer literacy skills, enabling them to solve local challenges and drive their own progress. Help us bridge the digital divide and open doors to education and opportunity. Join us in making a lasting impact—every dollar brings us closer to a future where technology transforms lives. Donate now and be a part of this essential movement.

## Make a Donation

<div class="donation-container">
  <div class="donation-options">
    <button class="donation-amount" data-amount="10">$10</button>
    <button class="donation-amount" data-amount="25">$25</button>
    <button class="donation-amount" data-amount="50">$50</button>
    <button class="donation-amount" data-amount="100">$100</button>
    <div class="custom-amount">
      <label for="custom-donation">Custom Amount ($):</label>
      <input type="number" id="custom-donation" min="1" placeholder="Enter amount">
    </div>
  </div>
  <button id="donate-button" class="donate-btn">Donate Now</button>
</div>

<div id="error-message"></div>

<style>
.donation-container {
  max-width: 600px;
  margin: 30px 0;
  padding: 20px;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.donation-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.donation-amount {
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.donation-amount:hover, .donation-amount.selected {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.custom-amount {
  width: 100%;
  margin-top: 15px;
}

.custom-amount input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  margin-top: 5px;
}

.donate-btn {
  background-color: #4CAF50;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.donate-btn:hover {
  background-color: #45a049;
}

#error-message {
  color: #d32f2f;
  margin-top: 10px;
}
</style>

<script src="https://js.stripe.com/v3/"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Select donation amount buttons and custom input
  const amountButtons = document.querySelectorAll('.donation-amount');
  const customAmountInput = document.getElementById('custom-donation');
  const donateButton = document.getElementById('donate-button');
  const errorMessage = document.getElementById('error-message');
  
  let selectedAmount = null;

  // Add click event to amount buttons
  amountButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove selected class from all buttons
      amountButtons.forEach(btn => btn.classList.remove('selected'));
      
      // Add selected class to clicked button
      this.classList.add('selected');
      
      // Store selected amount
      selectedAmount = parseInt(this.getAttribute('data-amount'));
      
      // Clear custom amount input
      customAmountInput.value = '';
    });
  });

  // Handle custom amount input
  customAmountInput.addEventListener('input', function() {
    // Remove selected class from all buttons
    amountButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Store custom amount if valid
    if (this.value && parseInt(this.value) > 0) {
      selectedAmount = parseInt(this.value);
    } else {
      selectedAmount = null;
    }
  });

  // Handle donate button click
  donateButton.addEventListener('click', function() {
    // Clear previous messages
    errorMessage.textContent = '';
    
    if (!selectedAmount) {
      errorMessage.textContent = 'Please select or enter a donation amount.';
      return;
    }

    // Replace these with your actual Stripe account values
    const stripePublishableKey = 'pk_test_51R33n6QCDKJKkRa4WqDgTcvWcxTfH4ynXoXVQeaoN5x3CAyAd59kSuWhKfJxRUriZn15TrIhAoc8hgpRNBfE6Ngu00GWMToDN8';
    const successUrl = 'https://spreadtheworld.org/thank-you';
    const cancelUrl = 'https://spreadtheworld.org/donate';
    
    // Create a Stripe instance with your publishable key
    const stripe = Stripe(stripePublishableKey);
    
    // Redirect to Stripe Checkout
    stripe.redirectToCheckout({
      lineItems: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donation to Spread The World',
            description: 'Supporting computer literacy in Mesoamerican communities',
            images: ['https://spreadtheworld.org/assets/images/logo.png'], // Optional: Add your logo
          },
          unit_amount: selectedAmount * 100, // Stripe uses cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: successUrl,
      cancelUrl: cancelUrl,
      // Optional: Collect donor information
      billingAddressCollection: 'required',
      // Optional: Add custom fields
      customerEmail: 'auto', // Automatically detect customer email if possible
      submitType: 'donate', // Shows "Donate" instead of "Pay" on the Stripe form
    })
    .then(function (result) {
      if (result.error) {
        // If there's an error, display it to the customer
        errorMessage.textContent = result.error.message;
      }
    });
  });
});
</script>

## Other Ways to Support

If you prefer to donate by check or bank transfer, please contact us at [donations@spreadtheworld.org](mailto:donations@spreadtheworld.org) for instructions.
