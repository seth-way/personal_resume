import * as React from 'react';
import { Typography } from '@material-tailwind/react';

import type { Edu } from '@/components/Resume';
import type { Job } from '@/components/Resume';

interface iProps {
  education?: Edu[];
  work?: Job[];
}

const renderEdu = (edu: Edu, idx: number) => {
  const { school, degree, graduated, description } = edu;

  return (
    <div
      className='flex flex-col items-center text-center [&_*]:max-w-prose'
      key={`${school}-${idx}`}
    >
      <Typography
        className={idx > 0 ? 'mt-6' : ''}
        variant='h4'
        placeholder='school'
      >
        {school}
      </Typography>
      <Typography
        variant='small'
        className='text-red-300 mt-1'
        placeholder='school_info'
      >
        {`${degree} · ${graduated}`}
      </Typography>
      <Typography
        variant='paragraph'
        className='mt-2'
        placeholder='school_about'
      >
        {description}
      </Typography>
    </div>
  );
};

const renderJob = (job: Job, idx: number) => {
  const { company, title, years, description } = job;
  return (
    <div
      className='flex flex-col items-center text-center [&_*]:max-w-prose'
      key={`${company}-${idx}`}
    >
      <Typography
        className={idx > 0 ? 'mt-6' : ''}
        variant='h4'
        placeholder='company'
      >
        {company}
      </Typography>
      <Typography
        variant='small'
        className='text-red-300 mt-1'
        placeholder='job_info'
      >
        {`${title} · ${years}`}
      </Typography>
      <Typography variant='paragraph' className='mt-2' placeholder='job_about'>
        {description}
      </Typography>
    </div>
  );
};

export default function ResumeSection(props: iProps) {
  const { education, work } = props;
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4 w-full'>
      <Typography
        variant='h5'
        className='flex text-secondary lg:basis-1/4 lg:justify-end'
        placeholder='section_heading'
      >
        {education ? 'EDUCATION' : 'WORK'}
      </Typography>
      <div className='flex flex-col items-center lg:basis-3/4'>
        {education
          ? education.map((edu, idx) => renderEdu(edu, idx))
          : work?.map((job, idx) => renderJob(job, idx))}
      </div>
    </div>
  );
}
