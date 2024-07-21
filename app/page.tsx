import { ContactForm } from '@/components/contact-form/ContactForm';
import { FooterSocialLink } from '@/components/footer-social-link/FooterSocialLink';
import { socialLinks } from '@/components/footer-social-link/FooterSocialLink.constants';
import { Link } from '@/components/link/Link';
import { ProjectCardLink } from '@/components/project-card-link/ProjectCardLink';
import { projects, writingProjects } from '@/data/projects';
import Image from 'next/image';

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className={'flex flex-col min-h-dvh'}>
      <section className={'w-full pt-12 pb-12 md:pt-24 lg:pt-32 bg-primary'}>
        <div className={'container space-y-10 xl:space-y-16 px-4 md:px-6'}>
          <div className={'grid gap-4 md:grid-cols-2 md:gap-16'}>
            <div>
              <h1
                className={
                  'lg:leading-tighter text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-[4.5rem] 2xl:text-[5rem] text-primary-foreground'
                }
              >
                Hungry & Driven Engineer Solving Complex Problems
              </h1>
              <p className={'mx-auto max-w-[700px] text-primary-foreground md:text-xl mt-5'}>
                I&apos;m Phil, a driven backend, frontend, and full stack engineer. I thrive on
                tackling complex problems through innovative coding solutions. My passion for both
                independent and collaborative work ensures that your project will be handled with
                expertise and dedication. Let&apos;s turn your challenges into successes!
              </p>
              <div className="mt-6 space-x-4">
                <Link href={'#projects'}>View Projects</Link>
                <Link href={'#contact'}>Contact Me</Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src={'/profile.jpeg'}
                width={'550'}
                height={'550'}
                alt={'Hero'}
                className={'mx-auto aspect-square overflow-hidden rounded-xl object-cover'}
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={'w-full py-12 md:py-24 lg:py-32 bg-white text-black'}>
        <div className={'container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16'}>
          <div>
            <Image
              src={'/phil-with-dog-friday.jpeg'}
              width={'550'}
              height={'550'}
              alt={'About'}
              className={'mx-auto aspect-square overflow-hidden rounded-xl object-cover'}
            />
          </div>
          <div>
            <div className={'space-y-4'}>
              <h2 className={'text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'}>
                About Me
              </h2>
              <p className={'text-muted-foreground md:text-xl'}>
                I&apos;m a passionate developer with a focus on creating beautiful and functional
                digital experiences. I have a strong passion for and background in user experience
                design, frontend development, and data visualization
              </p>
              <p className={'text-muted-foreground md:text-xl'}>
                In my free time, I enjoy exploring new technologies, reading about the latest
                industry trends, and staying active through various outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </section>
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
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <Image
              src="/contact-image.jpg"
              width="550"
              height="550"
              alt="Contact"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
          <div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="text-muted-foreground md:text-xl">
                I&apos;d love to hear from you! Feel free to reach out with any questions, comments,
                or opportunities.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-4 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted text-muted-foreground">
        <div className="flex items-center gap-4">
          {socialLinks.map((socialLink) => (
            <FooterSocialLink
              href={socialLink.href}
              icon={socialLink.icon}
              key={socialLink.href}
              label={socialLink.label}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {year} Phil Stubbs Development. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
