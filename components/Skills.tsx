'use client';

import React from 'react';
import { Typography } from '@material-tailwind/react';
import dynamic from 'next/dynamic';
import data from '@/public/resumeData.json';

export default function Skills() {
  const { skillMessage } = data.resume;
  const TextEffect = dynamic(() => import('@/components/ui/TextEffect'), {
    ssr: false,
  });
  return (
    <div className='content py-12 lg:p-28 gap-8 lg:gap-16 text-center'>
      <Typography variant='h2' placeholder='skills_header'>
        Skills
      </Typography>
      <Typography variant='lead' placeholder='skills_message'>
        {skillMessage}
      </Typography>
      <TextEffect />
    </div>
  );
}
