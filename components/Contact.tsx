'use client';

import * as React from 'react';
import { Input, Textarea, Typography } from '@material-tailwind/react';
import { FaEnvelope } from 'react-icons/fa6';

export default function Contact() {
  const { name, phone } = require('@/public/resumeData.json').main;
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
        <div className='flex flex-col w-96 gap-4'>
          <Input
            variant='outlined'
            label='Name *'
            color='indigo'
            className='text-white'
            placeholder=''
            crossOrigin=''
          />
          <Input
            variant='outlined'
            label='Email *'
            color='indigo'
            className='text-white'
            placeholder=''
            crossOrigin=''
          />
          <Input
            variant='outlined'
            label='Subject'
            color='indigo'
            className='text-white'
            placeholder=''
            crossOrigin=''
          />
          <Textarea label='Message *' className='text-white' color='indigo' />
        </div>
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
