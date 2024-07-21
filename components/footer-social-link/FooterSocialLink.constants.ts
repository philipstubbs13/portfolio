import { ComponentProps } from 'react';
import { FooterSocialLink } from '@/components/footer-social-link/FooterSocialLink';

export enum SocialIcon {
  Github = 'Github',
  Twitter = 'Twitter',
  Linkedin = 'Linkedin',
  Instagram = 'Instagram',
  Youtube = 'Youtube',
}

export const socialLinks: ComponentProps<typeof FooterSocialLink>[] = [
  {
    href: 'https://github.com/philipstubbs13',
    icon: SocialIcon.Github,
    label: 'GitHub',
  },
  {
    href: 'https://x.com/iamPhilStubbs',
    icon: SocialIcon.Twitter,
    label: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/in/philipjstubbs/',
    icon: SocialIcon.Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/philipstubbs13/',
    icon: SocialIcon.Instagram,
    label: 'Instagram',
  },
  {
    href: 'https://www.youtube.com/@thoughtsofphil',
    icon: SocialIcon.Youtube,
    label: 'YouTube',
  },
];
