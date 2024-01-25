'use client';

import * as React from 'react';
import { Avatar, Box, Button, Container, Typography } from '@mui/material';

export default function Resume() {
  const { skillMessage, education, work, skills } =
    require('@/public/resumeData.json').resume;
  return (
    <Box className='flex flex-col justify-center items-center my-6 lg:my-28'>
      Resume
    </Box>
  );
}
