import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ContactUsForm from './ContactUsForm';

export default function ContactUs(): React.ReactElement {
  const methods = useForm();

  return (
    <div className="contact-hero-img">
      <div className="contact-wrapper">
        <div className="contact-container">
          <h2>CONTACT US</h2>
          <FormProvider {...methods}>
            <ContactUsForm />
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
