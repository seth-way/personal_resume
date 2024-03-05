'use client';

import React, { useState, useEffect, MouseEvent } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import Button from '@/components/ui/Button';
// import { Link } from 'react-scroll';
import useProjectStore, { ProjectState } from '@/store/useProjectStore';
import useWindowStore, { WindowState } from '@/store/useWindowStore';

interface iProps {
  title: string;
  description: string;
  idx: number;
  key: string;
}

export default function ProjectPreview({ title, description, idx }: iProps) {
  const visible = useProjectStore((state: ProjectState) => state.visible);
  const setVisible = useProjectStore((state: ProjectState) => state.setVisible);
  const updateActive = useProjectStore(
    (state: ProjectState) => state.updateActive
  );
  const width = useWindowStore((state: WindowState) => state.width);

  // determines size of preview header font
  // based on slider breakpoints / available space
  const deploySmallFonts = () => {
    if (width < 600) return true;
    if (width < 800) return false;
    if (width < 1200) return true;
    return false;
  };

  const [usingSmallFonts, setToSmall] = useState(deploySmallFonts());

  useEffect(() => {
    setToSmall(deploySmallFonts());
  }, [width]);

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    setVisible(true);
    updateActive(idx);
  };

  return (
    <Card
      variant='gradient'
      color='gray'
      className='flex flex-col align-center text-white text-center h-[400px] px-4'
      placeholder={`${title}_preview`}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color='transparent'
        placeholder='card_header'
        className='flex flex-col flex-none h-1/4 justify-center align-center rounded-none border-b border-white/10 text-white !m-0'
      >
        <Typography
          variant={usingSmallFonts ? 'h4' : 'h3'}
          placeholder={`${title}_header`}
          className='mb-2'
        >
          {title}
        </Typography>
      </CardHeader>
      <CardBody
        className='p-3 h-full flex flex-col justify-center items-center'
        placeholder={`${title}_body`}
      >
        <Typography
          variant={usingSmallFonts ? 'paragraph' : 'lead'}
          placeholder={`${title}_description`}
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter
        className='flex flex-col justify-center h-20 pb-3'
        placeholder={`${title}_footer`}
      >
        <Button onClick={e => handleClick(e)}>Show More</Button>
      </CardFooter>
    </Card>
  );
}
