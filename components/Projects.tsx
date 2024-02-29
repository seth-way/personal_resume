import React, { useState, useEffect } from 'react';
import { Typography } from '@material-tailwind/react';
import Carousel from '@/components/ui/Carousel';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
  return (
    <div className='content py-12 lg:py-28 gap-6 lg:gap-20 w-full'>
      <Typography variant='h2' placeholder='projects'>
        PROJECTS
      </Typography>
      <Carousel />
      <ProjectCard />
    </div>
  );
}
