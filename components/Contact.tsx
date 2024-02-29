'use client';

import React, { useState, useEffect } from 'react';
import { Textarea, Typography } from '@material-tailwind/react';
import emailjs from '@emailjs/browser';
import Button from '@/components/ui/Button';
import { FaEnvelope } from 'react-icons/fa6';

import Input from '@/components/ui/Input';
import {
  getErrorMessage,
  validateInput,
  validateAllFormFields,
} from '@/lib/utils';

import data from '@/public/resumeData.json';

const EMAILJS_OPTIONS = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  // Do not allow headless browsers
  blockHeadless: true,
  limitRate: {
    // Set the limit rate for the application
    id: 'virtual_resume',
    // Allow 1 request per 10s
    throttle: 1000,
  },
};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  useEffect(() => {
    emailjs.init(EMAILJS_OPTIONS);
  }, []);

  const { main } = data;
  const { name, phone } = main;
  const blankForm = { name: '', email: '', subject: '', message: '' };
  const [formInfo, setInfo] = useState<FormValues>(blankForm);
  const [formComplete, updateFormStatus] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setInfo(prevState => ({ ...prevState, [id]: value }));
    updateFormStatus(validateAllFormFields(formInfo));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (service_id && template_id) {
      try {
        const response = await emailjs.send(service_id, template_id, formInfo);
        const { status } = response;
        if (status === 200) setInfo(blankForm);
      } catch (e: unknown) {
        console.log(getErrorMessage(e));
      }
    } else {
      console.log(
        'Failed to send email. Client missing certain ENV variables.'
      );
    }
  };

  return (
    <div className='content justify-start py-12 lg:py-28 gap-10 lg:gap-20 w-full min-h-screen'>
      <div className='flex flex-col lg:flex-row items-center lg:justify-center gap-6 lg:gap-20 w-full'>
        <FaEnvelope color='#A9C47F' size={40} />
        <div className='max-w-prose'>
          <Typography
            variant='lead'
            className='text-center'
            placeholder='contact_message'
          >
            Please leave a message or visit me on social media. I&apos;m very
            receptive to any feedback or suggestions. I would be excited to
            discuss any possibilities for collaboration.
          </Typography>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center lg:justify-center gap-6 lg:gap-20 w-full'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col w-96 gap-4'>
            <Input id='name' value={formInfo.name} onChange={handleChange} />
            <Input
              id='email'
              type='email'
              value={formInfo.email}
              onChange={handleChange}
            />
            <Input
              id='subject'
              value={formInfo.subject}
              onChange={handleChange}
            />
            <Textarea
              id='message'
              label='Message'
              className='text-white'
              color='indigo'
              value={formInfo.message}
              onChange={handleChange}
              success={validateInput(formInfo.message)}
              required
            />
            <Button
              type='submit'
              placeholder='send'
              ready={formComplete}
              color='primary'
            >
              Send
            </Button>
          </div>
        </form>
        <div className='flex flex-col items-center'>
          <Typography variant='h5' placeholder='thanks_message'>
            Thanks For Visiting!
          </Typography>
          <Typography
            variant='lead'
            placeholder='name'
          >{`-${name}`}</Typography>
          <Typography variant='lead' placeholder='phone_number'>
            {phone}
          </Typography>
        </div>
      </div>
    </div>
  );
}
