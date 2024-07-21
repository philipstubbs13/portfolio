import { Link } from '@/components/link/Link';
import Image from 'next/image';

export default function Home() {
  return (
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
  );
}
