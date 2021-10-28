import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '../../atoms';
import { Input } from '../../molecules';
import './styles/fromContactStyles.scss';

export default function ContactUsForm(): React.ReactElement {
  const { handleSubmit } = useFormContext();

  const onSubmit = () => {
    console.log('hey');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="side-inputs">
        <Input
          name="fullname"
          rules={{ required: 'Name is required.' }}
          labelType="required"
          label="Full Name"
          placeholder="Full Name"
        />
        <Input
          name="emailaddress"
          labelType="required"
          rules={{ required: 'Email is required.' }}
          label="Email Address"
          placeholder="Email Address"
        />
      </div>
      <Input
        name="message"
        labelType="required"
        label="Message"
        rules={{ required: 'Message is required.' }}
        inputType="textarea"
        placeholder="Write your message here..."
      />
      <Button>Send Message</Button>
    </form>
  );
}
