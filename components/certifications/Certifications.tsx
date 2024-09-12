import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from 'lucide-react';

const certifications = [
  {
    name: 'PWAs: You Might Not Need That App Store',
    organization: 'Frontend Masters',
    date: 'September 2024',
    verificationLink: '/certificates/pwas-v2-dark.pdf',
  },
  {
    name: 'Next.js from Scratch 2024',
    organization: 'Udemy',
    date: 'September 2024',
    verificationLink: 'https://www.udemy.com/certificate/UC-79ede78f-439f-4eb7-9e1f-8121a9ba1f08/',
  },
  {
    name: 'Web Security',
    organization: 'Frontend Masters',
    date: 'August 2024',
    verificationLink: '/certificates/web-security-v2-dark.pdf',
  },
  {
    name: 'PHP Basics',
    organization: 'Frontend Masters',
    date: 'August 2024',
    verificationLink: '/certificates/php-dark.pdf',
  },
  {
    name: 'JavaScript Design Patterns for Web Apps',
    organization: 'Frontend Masters',
    date: 'August 2024',
    verificationLink: '/certificates/js-design-patterns-dark.pdf',
  },
  {
    name: 'Complete Intro to Containers',
    organization: 'Frontend Masters',
    date: 'August 2024',
    verificationLink: '/certificates/complete-intro-containers-v2-dark.pdf',
  },
  {
    name: 'Professional JS: Features You Need to Know',
    organization: 'Frontend Masters',
    date: 'August 2024',
    verificationLink: '/certificates/pro-js-features-dark.pdf',
  },
  {
    name: 'Introduction to Backend Architectures',
    organization: 'Frontend Masters',
    date: 'August 2024',
    verificationLink: '/certificates/backend-architectures-dark.pdf',
  },
  {
    name: 'Front-End System Design',
    organization: 'Frontend Masters',
    date: 'July 2024',
    verificationLink: '/certificates/frontend-system-design-dark.pdf',
  },
  {
    name: 'Headless CMSs with Next.js',
    organization: 'Frontend Masters',
    date: 'July 2024',
    verificationLink: '/certificates/headless-cms-nextjs-dark.pdf',
  },
  {
    name: 'Intermediate Next.js',
    organization: 'Frontend Masters',
    date: 'July 2024',
    verificationLink: '/certificates/intermediate-next-js-dark.pdf',
  },
  {
    name: 'Server-Side GraphQL in Next.js',
    organization: 'Frontend Masters',
    date: 'July 2024',
    verificationLink: '/certificates/server-graphql-nextjs-dark.pdf',
  },
  {
    name: 'Client-Side GraphQL with React',
    organization: 'Frontend Masters',
    date: 'July 2024',
    verificationLink: '/certificates/client-graphql-react-v2-dark.pdf',
  },
  {
    name: 'Machine Learning in JavaScript with TensorFlow.js',
    organization: 'Frontend Masters',
    date: 'June 2024',
    verificationLink: '/certificates/tensorflow-js-dark.pdf',
  },
  {
    name: 'Design Systems with Storybook',
    organization: 'Frontend Masters',
    date: 'June 2024',
    verificationLink: '/certificates/design-systems-v2-dark.pdf',
  },
  {
    name: 'Figma for Developers',
    organization: 'Frontend Masters',
    date: 'June 2024',
    verificationLink: '/certificates/figma-v2-dark.pdf',
  },
  {
    name: 'Ultimate CSS Grid & Layout Techniques',
    organization: 'Frontend Masters',
    date: 'May 2024',
    verificationLink: '/certificates/css-grid-dark.pdf',
  },
  {
    name: 'Build Go Apps That Scale on AWS',
    organization: 'Frontend Masters',
    date: 'April 2024',
    verificationLink: '/certificates/go-aws-dark.pdf',
  },
  {
    name: 'Enterprise Web App Accessiblity (feat React)',
    organization: 'Frontend Masters',
    date: 'April 2024',
    verificationLink: '/certificates/enterprise-accessibility-dark.pdf',
  },
  {
    name: 'Web App Accessiblity (feat React)',
    organization: 'Frontend Masters',
    date: 'March 2024',
    verificationLink: '/certificates/react-accessibility-dark.pdf',
  },
  {
    name: 'Angular 17+ Fundamentals',
    organization: 'Frontend Masters',
    date: 'March 2024',
    verificationLink: '/certificates/angular-fundamentals-dark.pdf',
  },
  {
    name: 'MERN Stack Front to Back: Full Stack React, Redux & Node.js',
    organization: 'Udemy',
    date: 'November 2020',
    verificationLink: 'https://www.udemy.com/certificate/UC-e8ad6270-8216-44e4-98db-7fff768d1d70/',
  },
  {
    name: 'Node.js API Masterclass with Express and MongoDB',
    organization: 'Udemy',
    date: 'June 2020',
    verificationLink: 'https://www.udemy.com/certificate/UC-a92e37fe-5647-48bc-aa62-f4b582e9ba04/',
  },
  {
    name: 'React Front to Back',
    organization: 'Udemy',
    date: 'August 2018',
    verificationLink: 'https://www.udemy.com/certificate/UC-TDQ5ITK6/',
  },
];

export const Certifications = () => {
  return (
    <div className="container mx-auto py-12" id="certifications">
      <div className="space-y-3 mb-8">
        <h1 className="text-3xl font-bold text-center">My Certifications</h1>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Staying ahead in web development means constantly evolving, learning, and growing. My
          certifications represent not only my dedication to mastering cutting-edge technologies but
          also my commitment to delivering the highest standard of work. Each one signifies
          expertise in crucial areas, ensuring that I can provide innovative, accessible, and
          reliable solutions for every project.
        </p>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Explore the certifications below to see how my skills align with the latest industry
          standards and practices.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{cert.name}</CardTitle>
              <CardDescription>{cert.organization}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Badge variant="secondary">{cert.date}</Badge>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href={cert.verificationLink} target="_blank" rel="noopener noreferrer">
                  Verify <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
