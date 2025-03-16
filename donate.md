---
layout: page
title: Donate
permalink: /donate/
---

# Support Our Mission

Your donation can spark change! By contributing, you empower disenfranchised Mesoamerican communities with vital computer literacy skills, enabling them to solve local challenges and drive their own progress. Help us bridge the digital divide and open doors to education and opportunity. Join us in making a lasting impact—every dollar brings us closer to a future where technology transforms lives. Donate now and be a part of this essential movement.

## Make a Donation

<div class="donation-container">
  <p>Select a donation amount:</p>
  
  <div class="donation-options">
    <button class="donation-button" data-price-id="price_1R34oUG86rNUvt5QIxd72zmr">Donate $10</button>
  </div>
  
  <div id="error-message"></div>
  
  <p class="custom-amount-text">For custom amounts, please contact us at <a href="mailto:blanca@spreadtheworld.org">blanca@spreadtheworld.org</a></p>
</div>

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
  gap: 15px;
  margin: 20px 0;
}

.donation-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.donation-button:hover {
  background-color: #45a049;
}

.custom-amount-text {
  margin-top: 20px;
  font-style: italic;
}

#error-message {
  color: #d32f2f;
  margin-top: 10px;
}
</style>

<script src="https://js.stripe.com/v3/"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Stripe
  const stripe = Stripe('pk_test_51R33n6QCDKJKkRa4WqDgTcvWcxTfH4ynXoXVQeaoN5x3CAyAd59kSuWhKfJxRUriZn15TrIhAoc8hgpRNBfE6Ngu00GWMToDN8');
  const buttons = document.querySelectorAll('.donation-button');
  const errorMessage = document.getElementById('error-message');
  
  // Get the base URL for success and cancel redirects
  const baseUrl = window.location.origin;
  
  // Add click handlers to donation buttons
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const priceId = this.getAttribute('data-price-id');
      
      // Clear any previous error messages
      errorMessage.textContent = '';
      
      // Redirect to Stripe Checkout
      stripe.redirectToCheckout({
        lineItems: [{
          price: priceId,
          quantity: 1
        }],
        mode: 'payment',
        successUrl: baseUrl + '/thank-you',
        cancelUrl: baseUrl + '/donate',
        billingAddressCollection: 'required',
        customerEmail: 'auto',
        submitType: 'donate'
      })
      .then(function(result) {
        if (result.error) {
          // Display any errors that occur
          errorMessage.textContent = result.error.message;
        }
      })
      .catch(function(error) {
        errorMessage.textContent = 'There was an error processing your donation: ' + error.message;
      });
    });
  });
});
</script>

## How Your Donation Helps

- **$10** provides basic computer supplies for one student
- **$25** funds a half-day computer literacy workshop
- **$50** helps establish an internet connection for a community center
- **$100** provides refurbished computer equipment to a classroom

## Other Ways to Support

If you prefer to donate by check or bank transfer, please contact us at [blanca@spreadtheworld.org](mailto:blanca@spreadtheworld.org) for instructions.
