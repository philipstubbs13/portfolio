import { ProjectCardLink } from '@/components/project-card-link/ProjectCardLink';
import { IProject } from '@/types/project';
import { ComponentProps } from 'react';

export const projects: IProject[] = [
  {
    description:
      'A custom video player component built using React and the Wistia JavaScript Player API.',
    githubUrl: 'https://github.com/philipstubbs13/wistia-video-player',
    storybookUrl: 'https://66aa07fde316cf9b3445ce6d-wzfdwyrtml.chromatic.com/',
    features: [
      'Embed Wistia videos using their video IDs.',
      'Responsive design for various screen sizes.',
      'Easy integration of Wistia into any React application.',
      'Quick access to Wistia video data.',
    ],
    href: 'https://wistia-video-player.vercel.app/',
    imageSrc: '/wistia-video-player.png',
    overview:
      'Custom video player component built using React and the Wistia Player API. A playground (built using Next.js) is available for trying out and testing your different Wistia videos.',
    technologies: [
      'Storybook',
      'Chromatic',
      'TypeScript',
      'React.js',
      'Next.js',
      'Wistia JavaScript Player API',
      'Tailwind',
    ],
    title: 'Wistia Video Player',
    id: '12',
  },
  {
    description:
      'A web app that was created specifically to help the average basketball fan quickly and effectively visualize and organize complex market data for their favorite nba players and teams.',
    githubUrl: 'https://github.com/philipstubbs13/swish-analytics-challenge',
    features: [
      'Visualize player market data represented as a table. Each row of the table represents a market. For each market, included is the low and high lines for that market from the alternates dataset. For example, for Westbrook’s points, there are columns for his low (18.5) and high (20.5).',
      'Filter data by position, stat type, and or market status (suspended or not).',
      'An indication of whether a market is suspended or not.',
      'Manually suspend or release.',
    ],
    href: 'https://swish-analytics-challenge.vercel.app/',
    imageSrc: '/beat-the-odds.png',
    overview:
      'A web app that takes complex, technical market data (in json format) for nba players and transforms that data in a way so that the average basketball fan can visualize and understand.',
    technologies: [
      'TypeScript',
      'React.js',
      'shadcn/ui',
      'TanStack Table',
      'Next.js',
      'Vitest',
      'Tailwind',
    ],
    title: 'Beat the Odds',
    id: '1',
  },
  {
    description:
      'Using a public dataset powered by the YouTube API, this project uncovers insights into trending videos for one of the largest search engines and one of the largest social media platforms.',
    href: 'https://philipstubbs13.github.io/Web-Design-Challenge/#/youtube-insights',
    imageSrc: '/youtube.png',
    title: 'Youtube Data Analysis',
    githubUrl: 'https://github.com/philipstubbs13/team_hopper',
    technologies: ['YouTube API', 'Jupyter Notebook', 'Python', 'Pandas', 'Matplotlib'],
    overview:
      'YouTube is one of the largest search engines and one of the largest social media platforms. It is used by people all over the US and around the world. People use YouTube for a variety of reasons, such as watching music videos, learning how to do something new, watching sports highlights, or just watching random videos for entertainment. Because of the popularity of YouTube, we decided to dig a little deeper into some of the characteristics that videos (in particular, trending videos) share. After gathering the information, we used that data to uncover some observations into what makes up a trending video and some insights for how a YouTube creator can improve their viewer engagement (likes, comments, dislikes, etc).',
    features: [
      'Used a public kaggle dataset. This dataset is powered by the YouTube API. It includes various information about trending videos in the US from 2017 - 2018 and includes video information for several other countries as well.',
      'Project primarily looks at the US but does compare the US vs OUS for a couple of the visualizations/research questions.',
      'The data includes a lot of useful information about each video, such as publish time, number of views, number of likes, and the tags associated with each video.',
    ],
    id: '2',
  },
  {
    description:
      'Never miss a release for your favorite GitHub organizations and repositories ever again.',
    githubUrl: 'https://github.com/philipstubbs13/gh-release-monitor',
    features: [],
    href: 'https://gh-release-monitor.vercel.app',
    imageSrc: '/gh_release_monitor.png',
    overview:
      "Have you ever found it difficult to keep up with the growing number of open source libraries and projects on GitHub? Tons of new, interesting projects are being added to GitHub daily, and existing projects are constantly being updated at a rapid pace. Keeping track of all the releases for all the repositories we might contribute to, use, and/or rely on for our own projects is an overwhelming task. That's why I created this tool, GitHub Release Monitor, so you would never have to miss another release for your favorite GitHub organizations and repositories again.",
    technologies: ['Next.js', 'Material UI', 'React', 'IndexedDB', 'GitHub API', 'TypeScript'],
    title: 'GitHub Release Monitor',
    id: '3',
  },
  {
    description:
      'A visualization built using D3 intended to show various health risks facing particular demographics across different states in the U.S. (for example, access to healthcare vs median household income).',
    githubUrl: 'https://github.com/philipstubbs13/D3-challenge',
    features: [
      'Each circle on the visualization represents a different state in the U.S.',
      'To see the actual values for a particular state, you can hover over the circle for that state to see a tooltip, which contains the actual data values based on the currently selected x and y axis labels.',
      'The dataset used for this project is based on 2014 ACS 1-year estimates. It includes data on rates of income, obesity, poverty, etc. by state. The information comes from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.',
    ],
    href: 'https://d3-data-journalism-9cb59.web.app/',
    imageSrc: '/d3_data_journalism.png',
    overview:
      'The visualization is intended to show various health risks facing particular demographics across different states in the U.S. (for example, access to healthcare vs median household income). To compare different factors or data variables, you can click on the x and/or y labels to change the view of the visualization.',
    technologies: ['D3.js', 'React'],
    title: 'D3 Data Journalism',
    id: '4',
  },
  {
    description:
      'The project is a mobile and web based app intended for homeless people to use in Minneapolis as a resource and intended to help streamline the process of checking into a shelter.',
    githubUrl: 'https://github.com/philipstubbs13/tcsw-sheltrus',
    features: [
      'Sign up/login using email/password or Google',
      'The My profile page is a basic profile page for you that includes your name and photo for identification purposes. This page helps shelters identify you quickly at check in and provides you with another form of identification if you lose or misplace your primary id.',
      'The app provides a list of shelters that you can use to quickly look up homeless shelters in Minneapolis.',
      'When you are ready to check into a shelter, you go to the Check in page.',
    ],
    href: 'https://tcsw-homeless.firebaseapp.com/',
    imageSrc: '/sheltr-b2.svg',
    overview:
      'This project hopes to solve and slow down the rapidly growing homeless crisis in Minneapolis. The project is a mobile and web based app intended for homeless people to use as a resource and intended to help streamline the process of checking into a shelter. The short term goal of this app is to get homeless people into a shelter easily and quickly each night. The long term goal of this app is to provide an opportunity for homeless people to rebuild their lives and get off the streets for good.',
    technologies: ['React', 'Material UI', 'Google Maps', 'Twilio API', 'Express', 'Firebase'],
    title: 'Shelter',
    id: '5',
  },
  {
    description:
      'A memory skill application built using React. The objective of the game is to be able to go through and click each player image once.',
    href: 'https://clickme-d27eb.firebaseapp.com/',
    imageSrc: '/clickme.png',
    title: 'Click Me',
    githubUrl: 'https://github.com/philipstubbs13/ClickMe',
    features: [
      'When you open the application, you will see 12 players. To start the game, click a player. Each player in the players.json file has a property named clicked.',
      'By default, each player starts out with a clicked value of false. When you click a player, the clicked value for that player is set to true.',
      'The object of the game is to click every player once. When you click a player for the first time, your score goes up by one. But, if you click a player more than once (that is, click a player with a clicked value of true), the score will reset, and you have to start over.',
    ],
    overview:
      'Test your memory of NBA players with the ClickMe game. ClickMe is a memory skill application built using React. The objective of the game is to be able to go through and click each player once.',
    technologies: ['React', 'Jest', 'React Testing Library', 'Bootstrap'],
    id: '6',
  },
  {
    description: 'A personal blog built and deployed using Next.js and Netlify.',
    href: 'https://the-mind-of-phil.vercel.app/',
    imageSrc: '/personalBlog.png',
    title: 'Next.js and Netlify Blog',
    githubUrl: 'https://github.com/philipstubbs13/next-netlify-blog',
    features: ['Blog built using Next.js and deployed to Netlify.'],
    overview:
      "A personal blog to share what's going on inside the mind of phil. Built and deployed using next and netlify.",
    technologies: ['React', 'Next.js', 'Netlify'],
    id: '7',
  },
  {
    description:
      'Built using JavaScript, HTML, CSS, this is a site that allows you to easily and quickly look up information about all the reported UFO sightings in the US and Canada',
    href: 'https://philipstubbs13.github.io/javascript-challenge/UFO-level-2/index.html',
    imageSrc: '/ufo-sightings.png',
    title: 'UFO Sightings',
    githubUrl: 'https://github.com/philipstubbs13/javascript-challenge',
    features: [
      'Do a quick search for UFO sightings and filter those search results by a specific date a UFO sighting was reported.',
      'Set multiple filters and do a more advanced search on specific criteria, including date, city, state, country, and shape.',
    ],
    overview:
      'A website that allows you to easily and quickly look up information about all the reported UFO sightings in the US and in Canada',
    technologies: ['D3.js', 'HTML', 'CSS', 'JavaScript'],
    id: '8',
  },
  {
    description:
      'Explore Art is a web app that allows you to search and find information about different artwork that is found in the Minneapolis Institute of Art&apos;s collection. You can also favorite artwork you like to view at a later time.',
    href: 'https://exploreartmn.firebaseapp.com/',
    imageSrc: '/explore-art.png',
    title: 'Explore Art',
    githubUrl: 'https://github.com/philipstubbs13/pollywog-challenge',
    features: [
      'Explore art',
      'View art details',
      'Listen to art audio (if available)',
      'Favorite certain pieces of art to easily view and look up at a later time.',
    ],
    overview:
      "Explore Art is a web app that allows you to search and find information about different artwork that is found in the Minneapolis Institute of Art's collection. You can also favorite artwork you like to view at a later time.",
    technologies: ['React', 'Material UI', 'IndexedDB', 'ElasticSearch API'],
    id: '9',
  },
  {
    description:
      'A data visualization project that helps publicize and share information about the New York Citi Bike program from March 2019 to March 2020. Built using Tableau.',
    href: 'https://public.tableau.com/app/profile/phil.stubbs/viz/CitiBikeAnalytics_15879541754520/NewYorkCitiBikeAnalyticsandInsights',
    imageSrc: '/tableau.png',
    title: 'Citi Bike Analytics and Insights',
    githubUrl: 'https://github.com/philipstubbs13/tableau-challenge',
    features: [
      'The purpose of this storyboard is to not only help publicize the data but also to help find ways to improve the bike program in the future.',
      'The data used to build the Tableau visualizations comes from the Citi Bike webpage and is available from the webpage as csv files',
      'An analysis on the phenomenons uncovered by the data is available within the Tableau story board. Each dashboard is accompanied by a short analysis.',
    ],
    overview:
      "The New York Citi Bike program is the largest bike sharing program in the United States. Since 2013, the Citi Bike program has implemented a robust infrastructure for collecting data on the program's utilization. Through the team's efforts, each month bike data is collected, organized, and made public on the Citi Bike webpage.",
    technologies: ['Tableau'],
    id: '10',
  },
  {
    description:
      'An online community created by runners, for runners. Whether you are a competitive runner, running enthusiast, or just a beginner, this site has something for you. Site built using React and Firebase.',
    href: 'https://running-with-swag.firebaseapp.com/',
    imageSrc: '/swag.png',
    title: 'Running With Swag',
    githubUrl: 'https://github.com/philipstubbs13/running-with-swag',
    features: [
      'Log in with Google',
      'The About page contains an overview of the app and why I created it.',
      'The Races page displays race stories that I or other users have provided using the form on this page.',
      'The Blog page displays a list of blog entries from my Tumblr blog.',
      'The Swag page includes reviews of different running products I have purchased to help me train for upcoming races.',
    ],
    overview:
      'I created this site because I love to run. Running is my passion. Running has been a big part of my life ever since I was a kid. I not only created this site to share my running adventures and experiences, but I also want to create an online community for runners to learn more about different running topics, find out about upcoming running events, and just have a place where runners can come together to share and exchange information with one another.',
    technologies: ['React', 'Node.js', 'Firebase', 'Tumblr API'],
    id: '11',
  },
];

export const writingProjects: ComponentProps<typeof ProjectCardLink>[] = [
  {
    description: '',
    href: '/M971932A001A_view.pdf',
    imageSrc: '/mycarelink-relay-qsg.png',
    title: 'MyCareLink Relay Home Communicator Quick Start Guide',
    id: '1',
  },
  {
    description: '',
    href: '/M971931A001B_view.pdf',
    imageSrc: '/mycarelink-relay-patient-manual.png',
    title: 'MyCareLink Relay Home Communicator Patient Manual',
    id: '2',
  },
  {
    description: '',
    href: '/paceart_optima_install_manual.pdf',
    imageSrc: '/paceart_optima_install_manual.png',
    title: 'Paceart Optima System Software Installation and Configuration Instructions',
    id: '3',
  },
  {
    description: '',
    href: '/inggt_12212.pdf',
    imageSrc: '/installing-goldengate-studio.png',
    title: 'Installing Oracle GoldenGate studio',
    id: '4',
  },
  {
    description: '',
    href: '/inoam_11123.pdf',
    imageSrc: '/installing-oracle-iam.png',
    title: 'Installation Guide for Oracle Identity and Access Management',
    id: '5',
  },
  {
    description: '',
    href: '/asins_12212.pdf',
    imageSrc: '/asins_12212.png',
    title: 'Planning an Installation of Oracle Fusion Middleware',
    id: '6',
  },
  {
    description: '',
    href: '/carelink_integration_software_install.pdf',
    imageSrc: '/carelink_integration_software_install.png',
    title:
      'Mainspring Data Express CareLink Integration Software Installation and Configuration Manual',
    id: '7',
  },
  {
    description: '',
    href: '/paceart_optima_user_manual.pdf',
    imageSrc: '/paceart_optima_user_manual.png',
    title: 'Paceart Optima System Software User Manual',
    id: '8',
  },
  {
    description: '',
    href: '/rcuug_12212.pdf',
    imageSrc: '/rcuug_12212.png',
    title: 'Creating Schemas with the Repository Creation Utility',
    id: '9',
  },
  {
    description: '',
    href: '/opatc_12212.pdf',
    imageSrc: '/opatc_12212.png',
    title: 'Patching with OPatch',
    id: '10',
  },
  {
    description: '',
    href: '/ouirf_12212.pdf',
    imageSrc: '/ouirf_12212.png',
    title: 'Installing Software with the Oracle Universal Installer',
    id: '11',
  },
  {
    description: '',
    href: '/idmck_11123.pdf',
    imageSrc: '/idmck_11123.png',
    title: 'Verifying Your Oracle Identity and Access Management Environment',
    id: '12',
  },
  {
    description: '',
    href: '/lcmcg_12212.pdf',
    imageSrc: '/lcmcg_12212.png',
    title: 'Configuring Oracle Fusion Middleware Using the Lifecycle Management Tools',
    id: '13',
  },
  {
    description: '',
    href: '/mainspring_data_express_connectivity_guide.pdf',
    imageSrc: '/mainspring_data_express_connectivity_guide.png',
    title: 'Mainspring Data Express Connectivity Guide',
    id: '14',
  },
  {
    description: '',
    href: '/lcmhp_12212.pdf',
    imageSrc: '/lcmhp_12212.png',
    title: 'FMW Composer Online Help',
    id: '15',
  },
  {
    description: '',
    href: '/M988746A001A_view.pdf',
    imageSrc: '/M988746A001A_view.png',
    title: 'CareLink Express Online Help',
    id: '16',
  },
  {
    description: '',
    href: '/M980686A001A_view.pdf',
    imageSrc: '/M980686A001A_view.png',
    title: 'Reveal LINQ Mobile Manager Online Help',
    id: '17',
  },
  {
    description: '',
    href: '/rninf_12212.pdf',
    imageSrc: '/rninf_12212.png',
    title: 'Release Notes for Oracle Fusion Middleware Infrastructure',
    id: '18',
  },
  {
    description: '',
    href: '/m978456a001a_view.pdf',
    imageSrc: '/m978456a001a_view.png',
    title: 'Software Errata Sheet for the MSW001 Reveal LINQ Mobile Manager Application',
    id: '19',
  },
  {
    description: '',
    href: '/m978458a001a_view.pdf',
    imageSrc: '/m978458a001a_view.png',
    title: 'Software Errata Sheet for the MSW002 Reveal LINQ Mobile Manager Application',
    id: '20',
  },
];
