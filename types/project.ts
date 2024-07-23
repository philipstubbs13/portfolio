import { ProjectCardLink } from '@/components/project-card-link/ProjectCardLink';
import { ComponentProps } from 'react';

export interface IProject extends ComponentProps<typeof ProjectCardLink> {
  githubUrl: string;
  id: string;
  features: string[];
  overview: string;
  technologies: string[];
}
