import Image from 'next/image';

export default function AboutSlot() {
  return (
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
              In my free time, I enjoy exploring new technologies, reading about the latest industry
              trends, and staying active through various outdoor activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
