'use client';

import * as React from 'react';
import { Typography } from '@material-tailwind/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function AboveTheFold() {
  const { name, description, linkedIn, github } =
    require('@/public/resumeData.json').main;
  const firstName = name.split(' ')[0];

  return (
    <div className='content min-h-screen gap-4'>
      <Typography variant='h1' placeholder='name'>{`${firstName}.`}</Typography>
      <div className='max-w-prose'>
        <Typography
          variant='lead'
          className='text-center'
          placeholder='description'
        >
          {description}
        </Typography>
      </div>
      <div className='flex justify-center gap-6'>
        <a href={linkedIn} target='_blank'>
          <FaLinkedin color='#0077B5' size={40} />
        </a>
        <a href={github} target='_blank'>
          <FaGithub color='#6cc644' size={40} />
        </a>
      </div>
    </div>
  );
}
