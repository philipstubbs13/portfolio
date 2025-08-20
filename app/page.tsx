import { About } from '@/components/about/About';
import { Certifications } from '@/components/certifications/Certifications';
import { Contact } from '@/components/contact/Contact';
import { Link } from '@/components/link/Link';
import { Projects } from '@/components/projects/Projects';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className={'w-full pt-12 pb-12 bg-primary'}>
        <div className={'container space-y-10 xl:space-y-16 px-4 md:px-6'}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            <Link href={'#projects'}>View Projects</Link>
            <Link href={'#contact'}>Contact Me</Link>
            <Link href={'#certifications'}>Certifications</Link>
          </div>
          <div className={'grid gap-4 md:grid-cols-2 md:gap-16'}>
            <div>
              <h1
                className={
                  'lg:leading-tighter text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-[4.5rem] 2xl:text-[5rem] text-primary-foreground'
                }
              >
                Web Developer Solving Complex Problems
              </h1>
              <p className={'mx-auto max-w-[700px] text-primary-foreground md:text-xl mt-5'}>
                Hi, I&apos;m Phil Stubbs — a web developer who builds with purpose.
              </p>
              <p className={'mx-auto max-w-[700px] text-primary-foreground md:text-xl mt-5'}>
                I have a strong interest and curiosity in finding ways to incorporate AI into the
                web development and coding space.
              </p>
              <p className={'mx-auto max-w-[700px] text-primary-foreground md:text-xl mt-5'}>
                I specialize in crafting accessible, user-centered experiences with modern tools
                like React, TypeScript, and Next.js. Whether I&apos;m collaborating in Figma,
                testing with Vitest, or documenting in Storybook, I focus on creating clean,
                scalable UI with empathy baked in. My approach is shaped not just by my experience,
                but by personal values—like making the web work better for everyone, including
                people with disabilities.
              </p>
              <p className={'mx-auto max-w-[700px] text-primary-foreground md:text-xl mt-5'}>
                I also share what I learn through dev-focused content on YouTube and TikTok, and
                love connecting with others who care about thoughtful design, inclusive development,
                and continuous growth. Let&apos;s build something that matters.
              </p>
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
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}
