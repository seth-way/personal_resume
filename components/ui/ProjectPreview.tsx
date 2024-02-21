'use client';

import * as React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import Button from '@/components/ui/Button';

interface iProps {
  title: string;
  description: string;
  path: string;
  key: string;
}

// title
// description
//

export default function ProjectPreview({
  title,
  description,
  path,
  key,
}: iProps) {
  return (
    <Card
      key={key}
      variant='gradient'
      color='gray'
      className='flex flex-col justify-between py-4 place-items-center text-white text-center bg-gray-900'
      placeholder={`${title}_preview`}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color='transparent'
        placeholder='card_header'
        className='rounded-none border-b border-white/10 text-white pb-8'
      >
        <Typography variant='h2' placeholder={`${title}_header`}>
          {title}
        </Typography>
      </CardHeader>
      <CardBody
        className='p-12 h-full flex flex-col gap-[5%] lg:gap-[15%] justify-start items-center'
        placeholder={`${title}_body`}
      >
        <Typography variant='lead' placeholder={`${title}_description`}>
          {description}
        </Typography>
      </CardBody>
      <CardFooter placeholder={`${title}_footer`}>
        <Button>See More</Button>
      </CardFooter>
    </Card>
  );
}
