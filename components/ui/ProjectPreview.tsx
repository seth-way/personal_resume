'use client'

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
      className='flex flex-col justify-between place-items-center text-white text-center'
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
        <ButtonPicker />
      </CardFooter>
    </Card>
  );
}
