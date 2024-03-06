import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Typography } from '@material-tailwind/react';
import StaggerText from 'react-stagger-text';
import useWindowStore, { WindowState } from '@/store/useWindowStore';
import data from '@/public/resumeData.json';

// staggers all start delays by 0.15 seconds
const determineDelay = (idx: number): number => idx * 150;

const textColors = [
  'text-primary',
  'text-secondary',
  'text-accent',
  'text-white',
  'text-red-300',
  'text-[#0077B5]',
];

const getTextColor = (idx: number): string =>
  textColors[idx % textColors.length];

const createUniqueText = (word: string, idx: number) => {
  return (
    <StaggerText
      staggerDelay={0.5}
      startDelay={determineDelay(idx)}
      staggerDuration={0.5}
    >
      {word}
    </StaggerText>
  );
};

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const largeScreenTextRange = ['h4', 'h3', 'h2', 'h1'];
const smallScreenTextRange = ['h6', 'h5', 'h4', 'h3'];

// determines skill font size based on use input 'value'
const getIdx = (value: number) => Math.floor((value / 100) * 4);

export default function TextEffect() {
  const { skills } = data.resume;
  const [isLoaded, updateLoad] = useState(false);

  useEffect(() => {
    updateLoad(true);
  }, []);

  const width = useWindowStore((state: WindowState) => state.width);

  const createTextEffect = useCallback(() => {
    // optional shuffle skills, can be removed
    skills.sort(() => (Math.random() > 0.5 ? 1 : -1));
    return (
      <div className='w-full flex flex-wrap gap-2 justify-around items-center'>
        {skills.map(({ skill, value }, idx) => {
          const textSizes =
            width > 700 ? largeScreenTextRange : smallScreenTextRange;
          const variant = textSizes[getIdx(value)] as Variant;
          const className = ` ${getTextColor(
            idx
          )} hover:scale-110 hover:brightness-125 hover:drop-shadow-lg`;
          return (
            <Typography
              variant={variant}
              className={className}
              placeholder='skill'
              key={`${skill}_${idx}`}
            >
              {createUniqueText(skill, idx)}
            </Typography>
          );
        })}
      </div>
    );
  }, [width]);
  return isLoaded ? createTextEffect() : <div></div>;
}
