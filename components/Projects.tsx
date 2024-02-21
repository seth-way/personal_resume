'use client';

import * as React from 'react';
import { Typography } from '@material-tailwind/react';
import Carousel from '@/components/ui/Carousel';
import ProjectPreview from '@/components/ui/ProjectPreview';

const cards = ['1', '2', '3', '4'];
import * as data from '@/public/resumeData.json';

export default function Resume() {
  const { projects } = data.portfolio;
  return (
    <div className='content py-12 lg:py-28 gap-6 lg:gap-20 w-full'>
      <Typography variant='h2' placeholder='projects'>
        Projects
      </Typography>
      <Carousel />
    </div>
  );
}
