import { ProjectCardLink } from '@/components/project-card-link/ProjectCardLink';
import { ComponentProps } from 'react';

export const projects: ComponentProps<typeof ProjectCardLink>[] = [
  {
    description:
      'Using a public dataset powered by the YouTube API, this project uncovers insights into trending videos for one of the largest search engines and one of the largest social media platforms.',
    href: 'https://philipstubbs13.github.io/Web-Design-Challenge/#/youtube-insights',
    imageSrc: '/youtube.png',
    title: 'Youtube Data Analysis',
  },
  {
    description:
      'Never miss a release for your favorite GitHub organizations and repositories ever again.',
    href: 'https://gh-release-monitor.vercel.app',
    imageSrc: '/gh_release_monitor.png',
    title: 'GitHub Release Monitor',
  },
  {
    description:
      'A visualization built using D3 intended to show various health risks facing particular demographics across different states in the U.S. (for example, access to healthcare vs median household income).',
    href: 'https://d3-data-journalism-9cb59.web.app/',
    imageSrc: '/d3_data_journalism.png',
    title: 'D3 Data Journalism',
  },
  {
    description:
      'The project is a mobile and web based app intended for homeless people to use in Minneapolis as a resource and intended to help streamline the process of checking into a shelter.',
    href: 'https://tcsw-homeless.firebaseapp.com/',
    imageSrc: '/sheltr-b2.svg',
    title: 'Shelter',
  },
  {
    description:
      'A memory skill application built using React. The objective of the game is to be able to go through and click each player image once.',
    href: 'https://clickme-d27eb.firebaseapp.com/',
    imageSrc: '/clickme.png',
    title: 'Click Me',
  },
  {
    description: 'A personal blog built and deployed using Next.js and Netlify.',
    href: 'https://the-mind-of-phil.vercel.app/',
    imageSrc: '/personalBlog.png',
    title: 'Next.js and Netlify Blog',
  },
  {
    description:
      'Built using JavaScript, HTML, CSS, this is a site that allows you to easily and quickly look up information about all the reported UFO sightings in the US and Canada',
    href: 'https://philipstubbs13.github.io/javascript-challenge/UFO-level-2/index.html',
    imageSrc: '/ufo-sightings.png',
    title: 'UFO Sightings',
  },
  {
    description:
      'Explore Art is a web app that allows you to search and find information about different artwork that is found in the Minneapolis Institute of Art&apos;s collection. You can also favorite artwork you like to view at a later time.',
    href: 'https://exploreartmn.firebaseapp.com/',
    imageSrc: '/explore-art.png',
    title: 'Explore Art',
  },
  {
    description:
      'A data visualization project that helps publicize and share information about the New York Citi Bike program from March 2019 to March 2020. Built using Tableau.',
    href: 'https://public.tableau.com/app/profile/phil.stubbs/viz/CitiBikeAnalytics_15879541754520/NewYorkCitiBikeAnalyticsandInsights',
    imageSrc: '/tableau.png',
    title: 'Citi Bike Analytics and Insights',
  },
  {
    description:
      'An online community created by runners, for runners. Whether you are a competitive runner, running enthusiast, or just a beginner, this site has something for you. Site built using React and Firebase.',
    href: 'https://running-with-swag.firebaseapp.com/',
    imageSrc: '/swag.png',
    title: 'Running With Swag',
  },
];

export const writingProjects: ComponentProps<typeof ProjectCardLink>[] = [
  {
    description: '',
    href: '/M971932A001A_view.pdf',
    imageSrc: '/mycarelink-relay-qsg.png',
    title: 'MyCareLink Relay Home Communicator Quick Start Guide',
  },
  {
    description: '',
    href: '/M971931A001B_view.pdf',
    imageSrc: '/mycarelink-relay-patient-manual.png',
    title: 'MyCareLink Relay Home Communicator Patient Manual',
  },
  {
    description: '',
    href: '/inggt_12212.pdf',
    imageSrc: '/installing-goldengate-studio.png',
    title: 'Installing Oracle GoldenGate studio',
  },
  {
    description: '',
    href: '/inoam_11123.pdf',
    imageSrc: '/installing-oracle-iam.png',
    title: 'Installation Guide for Oracle Identity and Access Management',
  },
  {
    description: '',
    href: '/asins_12212.pdf',
    imageSrc: '/asins_12212.png',
    title: 'Planning an Installation of Oracle Fusion Middleware',
  },
  {
    description: '',
    href: '/carelink_integration_software_install.pdf',
    imageSrc: '/carelink_integration_software_install.png',
    title:
      'Mainspring Data Express CareLink Integration Software Installation and Configuration Manual',
  },
  {
    description: '',
    href: '/rcuug_12212.pdf',
    imageSrc: '/rcuug_12212.png',
    title: 'Creating Schemas with the Repository Creation Utility',
  },
  {
    description: '',
    href: '/opatc_12212.pdf',
    imageSrc: '/opatc_12212.png',
    title: 'Patching with OPatch',
  },
];
