'use client';

import * as React from 'react';
import Divider from '@/components/ui/Divider';
import ResumeSection from '@/components/ui/ResumeSection';

type Edu = {
  school: string;
  degree: string;
  graduated: string;
  description: string;
};

type Job = {
  company: string;
  title: string;
  years: string;
  description: string;
};

export type { Edu, Job };

export default function Resume() {
  const { skillMessage, education, work, skills } =
    require('@/public/resumeData.json').resume;
  return (
    <div className='content py-12 lg:py-28 gap-6 lg:gap-20 w-full'>
      <ResumeSection education={education as Edu[]} />
      <Divider color='primary' />
      <ResumeSection work={work as Job[]} />
    </div>
  );
}
