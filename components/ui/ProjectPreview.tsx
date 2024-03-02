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
import { Link } from 'react-scroll';
import { useProjectStore } from '@/store/useProjectStore';
import { useShallow } from 'zustand/react/shallow';

interface iProps {
  title: string;
  description: string;
  idx: number;
  key: string;
}

export default function ProjectPreview({ title, description, idx }: iProps) {
  const [visible, toggleVisible, updateActive] = useProjectStore(
    useShallow(state => [
      state.visible,
      state.toggleVisible,
      state.updateActive,
    ])
  );

  const handleClick = () => {
    toggleVisible();
    updateActive(idx);
  };

  const ButtonPicker = () =>
    visible ? (
      <Button onClick={handleClick}>Show Less</Button>
    ) : (
      <Link to='OPEN_PROJECT' smooth={true} offset={-30} duration={500}>
        <Button onClick={handleClick}>See More</Button>
      </Link>
    );

  return (
    <Card
      variant='gradient'
      color='gray'
      className='p-3 flex flex-col align-center text-white text-center h-[400px]'
      placeholder={`${title}_preview`}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color='transparent'
        placeholder='card_header'
        className='flex flex-col flex-none max-h-36 justify-center align-center rounded-none border-b border-white/10 text-white !m-0'
      >
        <Typography variant='h2' placeholder={`${title}_header`} className='mb-2'>
          {title}
        </Typography>
      </CardHeader>
      <CardBody
        className='p-3 h-full flex flex-col justify-center items-center'
        placeholder={`${title}_body`}
      >
        <Typography variant='lead' placeholder={`${title}_description`}>
          {description}
        </Typography>
      </CardBody>
      <CardFooter
        className='flex flex-col justify-center max-h-12'
        placeholder={`${title}_footer`}
      >
        <ButtonPicker />
      </CardFooter>
    </Card>
  );
}
