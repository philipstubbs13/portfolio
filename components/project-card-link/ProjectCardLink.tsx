import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

interface IProps {
  description: string;
  href: string;
  id?: string;
  imageSrc: string;
  title: string;
}

export const ProjectCardLink = (props: IProps) => {
  const href = props.id ? `/projects/${props.id}` : props.href;
  const target = props.id ? undefined : '_blank';

  return (
    <Link className={'group'} href={href} prefetch={true} target={target}>
      <Card className={'h-full w-full'}>
        <CardContent
          className={'flex aspect-[4/3] items-center justify-center overflow-hidden rounded-t-xl'}
        >
          <Image
            src={props.imageSrc}
            width={400}
            height={300}
            alt={props.title}
            className={'h-full w-full object-cover transition-all group-hover:scale-105'}
          />
        </CardContent>
        <CardFooter className={'bg-card p-4 pt-0 flex flex-col'}>
          <h3 className={'text-lg font-semibold text-card-foreground'}>{props.title}</h3>
          <p className={'text-sm text-muted-foreground'}>{props.description}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};
