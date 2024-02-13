import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ComponentType, Children } from 'react';
import { InView } from 'react-intersection-observer';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
