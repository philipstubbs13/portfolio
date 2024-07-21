import { PropsWithChildren } from 'react';

interface IProps {
  href: string;
}

export const Link = (props: PropsWithChildren<IProps>) => {
  return (
    <a
      href={props.href}
      className={
        'inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-slate-600 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
      }
    >
      {props.children}
    </a>
  );
};
