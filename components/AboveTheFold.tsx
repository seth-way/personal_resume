'use client';

import * as React from 'react';
import { Typography } from '@material-tailwind/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import ParticlesBg from 'particles-bg';

export default function AboveTheFold() {
  const { name, description, linkedIn, github } =
    require('@/public/resumeData.json').main;
  const firstName = name.split(' ')[0];

  return (
    <div className='top-0 content min-h-screen gap-4'>
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
          <FaLinkedin
            color='#0077B5'
            size={40}
            className='transition ease-in-out hover:scale-125 hover:brightness-125 duration-300'
          />
        </a>
        <a href={github} target='_blank'>
          <FaGithub
            color='#6cc644'
            size={40}
            className='transition ease-in-out hover:scale-125 hover:brightness-125 duration-300'
          />
        </a>
      </div>
      <ParticlesBg bg type='color' num={1} />
    </div>
  );
}
