import Link from 'next/link';
import { ReactNode } from 'react';
import { SocialIcon } from './FooterSocialLink.constants';
import { GithubIcon } from '../github-icon/GithubIcon';
import { TwitterIcon } from '../twitter-icon/TwitterIcon';
import { LinkedinIcon } from '../linkedin-icon/LinkedinIcon';
import { InstagramIcon } from '../instagram-icon/InstagramIcon';
import { YoutubeIcon } from '../youtube-icon/YoutubeIcon';

interface IProps {
  href: string;
  icon: SocialIcon;
  label: string;
}

const socialIcons: Record<SocialIcon, ReactNode> = {
  Github: <GithubIcon />,
  Twitter: <TwitterIcon />,
  Linkedin: <LinkedinIcon />,
  Instagram: <InstagramIcon />,
  Youtube: <YoutubeIcon />,
};

export const FooterSocialLink = (props: IProps) => {
  const icon = socialIcons[props.icon];

  return (
    <Link
      href={props.href}
      className={'text-muted-foreground hover:text-foreground'}
      prefetch={false}
      target={'_blank'}
    >
      {icon}
      <span className={'sr-only'}>{props.label}</span>
    </Link>
  );
};
