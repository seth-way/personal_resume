'use client';

import * as React from 'react';
import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function About() {
  const { name, bio, email, phone, address } =
    require('@/public/resumeData.json').main;

  return (
    <Box className='flex flex-col justify-center items-center my-6 lg:my-28'>
      <Container className='flex max-lg:flex-col justify-center items-center mt-6 [&>*]:lg:mx-10'>
        <Avatar
          alt={name}
          src='/images/headshot.jpg'
          sx={{ width: 200, height: 200 }}
        />
        <Box className='text-center max-w-prose max-lg:mt-10'>
          <Typography variant='h4'>About Me</Typography>
          <Typography variant='body1'>{bio}</Typography>
        </Box>
      </Container>
      <Container className='flex max-lg:flex-col justify-center items-center lg:mt-12 mb-6 [&>*]:lg:mx-10'>
        <Box className='flex flex-col items-center mt-10'>
          <Typography variant='h4'>Contact Details</Typography>
          <Typography variant='subtitle1'>{name}</Typography>
          <Typography variant='subtitle2'>{`${address.city},`}</Typography>
          <Typography variant='subtitle2'>{address.state}</Typography>
          <Typography variant='subtitle2'>{phone}</Typography>
          <Typography variant='subtitle2'>{email}</Typography>
        </Box>
        <Box className='mt-10'>
          <Button
            variant='contained'
            startIcon={<FileDownloadIcon />}
            href='/resume.pdf'
            download
          >
            Download Resume
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
