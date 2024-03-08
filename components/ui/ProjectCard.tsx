'use client';

import React, { useEffect, useRef, MouseEvent } from 'react';
import { Typography } from '@material-tailwind/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import useProjectStore, { ProjectState } from '@/store/useProjectStore';
import useWindowStore, { WindowState } from '@/store/useWindowStore';
import { useShallow } from 'zustand/react/shallow';

const MarkdownComponents: object = {
  p: (paragraph: { children?: boolean; node?: any }) => {
    const { node } = paragraph;

    if (node.children[0].tagName === 'img') {
      const image = node.children[0];
      const metastring = image.properties.alt;
      const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
      const metaWidth = metastring.match(/{([^}]+)x/);
      const metaHeight = metastring.match(/x([^}]+)}/);
      const width = metaWidth ? metaWidth[1] : '768';
      const height = metaHeight ? metaHeight[1] : '432';
      const isPriority = metastring?.toLowerCase().match('{priority}');
      const hasCaption = metastring?.toLowerCase().includes('{caption:');
      const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

      return (
        <div className='postImgWrapper'>
          <Image
            src={image.properties.src}
            width={width}
            height={height}
            className='postImg'
            alt={alt}
            priority={isPriority}
          />
          {hasCaption ? (
            <div className='caption' aria-label={caption}>
              {caption}
            </div>
          ) : null}
        </div>
      );
    }
    return (
      <Typography
        variant='lead'
        placeholder={'project_info'}
        className='max-w-prose'
      >
        {paragraph.children}
      </Typography>
    );
  },
};

export default function ProjectCard() {
  const [visible, project, markdown, setVisible] = useProjectStore(
    useShallow((state: ProjectState) => [
      state.visible,
      state.project,
      state.markdown,
      state.setVisible,
    ])
  );
  const width = useWindowStore((state: WindowState) => state.width);

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);

  const { title, url } = project;

  return (
    <div
      className={
        ' fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (visible
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all delay-500 opacity-0 translate-x-full  ')
      }
    >
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className={
          ' w-screen max-w-2xl rounded-l-lg right-0 absolute h-full bg-gradient-to-r from-gray-700 from-1% via-gray-900 via-5% to-background to-50% shadow-xl delay-400 duration-500 ease-in-out transition-all transform ' +
          (visible ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <div
          className={
            'drawer relative w-screen max-w-2xl pb-10 flex flex-col space-y-6 items-center overflow-y-scroll h-full' +
            (width > 600 ? ' p-8' : ' p-2')
          }
        >
          <button
            className='ml-auto h-6 w-6 text-inherit'
            onClick={e => handleClick(e)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <Typography variant='h4' placeholder='project_title'>
            {title}
          </Typography>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={MarkdownComponents}
          >
            {markdown}
          </ReactMarkdown>
          {url && (
            <div>
              <span>Checkout the code on </span>
              <span className='text-secondary'>
                <a href={url} target='_blank'>
                  Github
                </a>
              </span>
              <span>!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
