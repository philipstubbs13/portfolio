import { ProjectCardLink } from '@/components/project-card-link/ProjectCardLink';
import { projects, writingProjects } from '@/data/projects';

export default function ProjectsSlot() {
  return (
    <>
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Projects
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of the projects I&apos;ve worked on. I&apos;ve had the opportunity to
                collaborate on a variety of exciting projects using many cutting edge technologies
                across the stack.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projects.map((project) => (
              <ProjectCardLink
                description={project.description}
                href={project.href}
                imageSrc={project.imageSrc}
                key={project.href}
                title={project.title}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="writing-samples" className="w-full pb-12 md:pb-24 lg:pb-32 bg-muted">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Writing Samples
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of my writing samples, including blog posts, technical articles,
                manuals, and creative pieces.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {writingProjects.map((project) => (
              <ProjectCardLink
                description={project.description}
                href={project.href}
                imageSrc={project.imageSrc}
                key={project.href}
                title={project.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
