'use client';

import React, { useState, useEffect } from 'react';
import { Typography } from '@material-tailwind/react';
import Button from '@/components/ui/Button';
import CopiableText from '@/components/ui/CopiableText';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa6';
import data from '@/public/resumeData.json';
import { getErrorMessage } from '@/lib/utils';

declare module '@material-tailwind/react' {
  interface ColorOverrides {
    primary: true;
  }
}

export default function About() {
  const [copyPermission, updatePermission] = useState(false);

  useEffect(() => {
    async function fetchPermissions() {
      try {
        const permission = await navigator.permissions.query({
          name: 'clipboard-write' as PermissionName,
        });

        if (permission.state === 'granted') updatePermission(true);
      } catch (e: unknown) {
        console.log(getErrorMessage(e));
      }
    }
    if (typeof window !== 'undefined') {
      fetchPermissions();
    }
  }, []);

  const copiableElementCSS =
    ' hover:cursor-pointer hover:scale-110 hover:brightness-150';

  const { name, bio, email, phone, address } = data.main;
  return (
    <div className='content py-12 lg:p-28 gap-10 lg:gap-20'>
      <div className='flex flex-col xl:flex-row justify-center items-center gap-10 lg:gap-20'>
        <div className='shrink-0 size-48 xl:size-96 relative overflow-hidden'>
          <Image
            src='/images/headShot.jpg'
            alt='headshot'
            fill
            style={{ objectFit: 'cover', borderRadius: '400px' }}
            sizes='(max-width: 576px) 192px, 384px'
          />
        </div>
        <div className='text-center max-w-prose'>
          <Typography variant='h2' placeholder='about_me'>
            About Me
          </Typography>
          <Typography variant='lead' placeholder='bio'>
            {bio}
          </Typography>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20'>
        <div className='flex flex-col items-center'>
          <Typography variant='h3' placeholder='contact_details'>
            Contact Details
          </Typography>
          <Typography variant='paragraph' placeholder='name'>
            {name}
          </Typography>
          {copyPermission ? (
            <CopiableText text={phone} />
          ) : (
            <Typography
              variant='small'
              className='no-underline'
              placeholder='phone'
            >
              {phone}
            </Typography>
          )}
          <Typography
            variant='small'
            placeholder='city'
          >{`${address.city},`}</Typography>
          <Typography variant='small' placeholder='state'>
            {address.state}
          </Typography>
          {copyPermission ? (
            <CopiableText text={email} />
          ) : (
            <Typography
              variant='small'
              className='no-underline'
              placeholder='email'
            >
              {email}
            </Typography>
          )}
        </div>
        <div>
          <a href='/resume.pdf' download>
            <Button
              moreCSS='flex items-center gap-4'
              placeholder='resume_download'
              color='primary'
            >
              <FaDownload />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
