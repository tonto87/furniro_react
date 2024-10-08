import React, { useState } from "react";
import { CheckoutStyle } from "./styles";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      city: "",
      zip: "",
      phone: "",
      email: "",
      note: "",
    });
  };

  return (
    <CheckoutStyle>
      <div className="checkout-cover">
        <h1>Checkout</h1>
      </div>

      <div className="checkout-container">
        <form onSubmit={handleSubmit}>
          <p>Billing details</p>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="companyName">Company Name (Optional):</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />

          <label htmlFor="country">Country / Region:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <label htmlFor="city">Town / City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <label htmlFor="zip">ZIP code:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="note">Order Notes (Optional):</label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Add any special instructions here..."
          ></textarea>

          <button type="submit">Place order</button>
        </form>

        <div className="order-summary-container">
          <h2>Order Summary</h2>
          <div className="order-summary-item">
            <p>Product: Asgaard sofa</p>
          </div>
          <div className="order-summary-item">
            <p>Subtotal: Rs. 250,000.00</p>
          </div>
          <div className="order-summary-item">
            <p>Total: Rs. 250,000.00</p>
          </div>
          <div className="order-summary-item">
            <p>Direct Bank Transfer</p>
          </div>
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>
      </div>
    </CheckoutStyle>
  );
};

export default Checkout;
