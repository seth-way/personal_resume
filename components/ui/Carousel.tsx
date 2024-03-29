'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { isMobile } from 'react-device-detect';
import ProjectPreview from '@/components/ui/ProjectPreview';

import data from '@/public/resumeData.json';

export default function CustomCarousel() {
  const { portfolio } = data;
  const { projects } = portfolio;

  const [mounted, updateMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') updateMounted(true);
  }, []);

  if (!mounted) return <div></div>;

  const breakPoints = [
    { breakpoint: 1100, settings: { slidesToShow: 2 } },
    { breakpoint: 800, settings: { slidesToShow: 1 } },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '60px',
    pauseOnFocus: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: 'slick-dots [&>li>button::before]:!text-white',
    arrows: isMobile ? false : true,
    className: '[&>.slick-list>.slick-track]:gap-4',
    responsive: breakPoints,
  };

  return (
    <div className='w-full h-full'>
      <Slider {...carouselSettings}>
        {projects.map(({ title, description }, idx) => {
          return (
            <ProjectPreview
              title={title}
              description={description}
              idx={idx}
              key={`${title}_${idx}`}
            />
          );
        })}
      </Slider>
    </div>
  );
}
