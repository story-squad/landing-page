import React from 'react';
import ContactUsForm from './ContactUsForm';

export default function ContactUs(): React.ReactElement {
  return (
    <div className="contact-hero-img">
      <div className="contact-wrapper">
        <div className="contact-container">
          <h2>CONTACT US</h2>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
