import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectPreview from '@/components/ui/ProjectPreview';

import data from '@/public/resumeData.json';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 750,
  centerMode: true,
  centerPadding: '60px',
  pauseOnFocus: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  className:
    '[&>.slick-list>.slick-track]:flex [&>.slick-list>.slick-track]:gap-4',
  dotsClass: 'slick-dots [&>li>button::before]:!text-white',
};

export default function CustomCarousel() {
  const { portfolio } = data;
  const { projects } = portfolio;

  return (
    <div className='w-full'>
      <Slider {...carouselSettings}>
        {projects.map(({ title, description, path }, idx) => {
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
