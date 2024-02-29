'use client'

import * as React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import { Link } from 'react-scroll';
import { useProjectStore } from '@/store/useProjectStore';
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
  const [visible, project, markdown, toggleVisible] = useProjectStore(
    useShallow(state => [
      state.visible,
      state.project,
      state.markdown,
      state.toggleVisible,
    ])
  );
  if (!visible) return <div id='OPEN_PROJECT'></div>;

  const handleClick = () => {
    setTimeout(() => toggleVisible(), 1200);
  };

  const { title } = project;
  return (
    <div id='OPEN_PROJECT' className='content gap-8'>
      <Divider />
      <Card
        variant='gradient'
        color='gray'
        placeholder='project_card'
        className='flex flex-col justify-between gap-8 px-8 py-4 place-items-center text-white text-center'
      >
        <CardHeader
          floated={false}
          shadow={false}
          color='transparent'
          placeholder='project_card_header'
          className='rounded-none border-b border-white/10 text-white pb-8'
        >
          <Typography variant='h2' placeholder={`${title}_project_header`}>
            {title}
          </Typography>
        </CardHeader>
        <CardBody placeholder='project_card_body'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={MarkdownComponents}
        >
          {markdown}
        </ReactMarkdown></CardBody>
        <CardFooter placeholder='project_card_footer'>
          <Link to='PROJECTS' smooth={true} offset={-70} duration={500}>
            <Button onClick={handleClick}>Close Project</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

// update see more to onClick => update idx
