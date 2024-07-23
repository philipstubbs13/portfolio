import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailsPage(props: IProps) {
  const project = projects.find((project) => project.id === props.params.id);

  if (!project) {
    return (
      <div className="flex flex-col min-h-[100dvh]">
        <h2>Not Found</h2>
        <p>Could not find project</p>
        <Link href="/">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {project.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {project.description}
              </p>
            </div>
          </div>
          <Image
            src={project.imageSrc}
            width="800"
            height="400"
            alt={project.title}
            className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover object-center"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Project Details</h2>
            <div className="grid gap-4">
              <div>
                {Boolean(project.technologies.length) && (
                  <>
                    <h3 className="text-lg font-bold">Technologies Used</h3>
                    <p className="text-muted-foreground">
                      {project.technologies.map((technology, index) => (
                        <span key={technology}>
                          {technology}
                          {index === project.technologies.length - 1 ? '' : ', '}
                        </span>
                      ))}
                    </p>
                  </>
                )}
              </div>
              {Boolean(project.features.length) && (
                <div>
                  <h3 className="text-lg font-bold">Project Features</h3>
                  <div className="text-muted-foreground">
                    {project.features.map((feature) => (
                      <div className="mt-2" key={feature}>
                        <span>- {feature}</span>
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h3 className="text-lg font-bold">Links</h3>
                <div className="flex gap-2">
                  <Link
                    href={project.href}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    target={'_blank'}
                  >
                    Live Site
                  </Link>
                  <Link
                    href={project.githubUrl}
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    target={'_blank'}
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {project.overview && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Project Overview</h2>
              <p className="text-muted-foreground">{project.overview}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
