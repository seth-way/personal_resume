'use client';

import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';

import IconButton from '@/components/ui/IconButton';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function AboveTheFold() {
  const { name, description, linkedIn, github } =
    require('@/public/resumeData.json').main;
  const firstName = name.split(' ')[0];

  return (
    <Box
      id='HOME'
      className='flex flex-col flex-1 shrink-0  justify-center items-center min-h-screen'
    >
      <Typography variant='h1'>{`${firstName}.`}</Typography>
      <Container className='max-w-prose'>
        <Typography variant='body1' className='text-center'>
          {description}
        </Typography>
      </Container>
      <Container className='flex justify-center'>
        <IconButton href={linkedIn} variant='linkedin'>
          <LinkedInIcon />
        </IconButton>
        <IconButton href={github} variant='github'>
          <GitHubIcon />
        </IconButton>
      </Container>
    </Box>
  );
}
