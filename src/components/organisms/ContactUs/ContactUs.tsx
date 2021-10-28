import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ContactForm } from '../../forms';

export default function ContactUs(): React.ReactElement {
  const methods = useForm();

  return (
    <div className="contact-hero-img">
      <div className="contact-wrapper">
        <div className="contact-container">
          <h2>CONTACT US</h2>
          <FormProvider {...methods}>
            <ContactForm />
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
