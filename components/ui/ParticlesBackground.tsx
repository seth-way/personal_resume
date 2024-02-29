'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Container, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  const loadParticles = async () => {
    await initParticlesEngine(async engine => {
      await loadSlim(engine);
    });
    setInit(true);
  };

  useEffect(() => {
    loadParticles();
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {};

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      pauseOnOutsideViewport: true,
      fpsLimit: 120,
      background: {
        color: 'transparent',
      },
      particles: {
        color: {
          value: [
            'hsl(326, 27%, 50%)',
            'hsl(83, 37%, 63%)',
            'hsl(24, 66%, 67%)',
          ],
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'out',
          random: false,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
    }),
    []
  );

  return init ? (
    <Particles
      id='tsparticles'
      particlesLoaded={particlesLoaded}
      options={options}
      className='h-full w-full absolute top-0 left-0 -z-10'
    />
  ) : (
    <></>
  );
}
