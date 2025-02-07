import { FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LinkButtonProps {
  label: string;
  url: string;
  icon: string;
  className?: string;
}

const LinkButton: FC<LinkButtonProps> = ({ label, url, icon, className }) => {
  return (
    <Link
      href={url}
      className={cn(
        'group inline-flex items-center justify-center w-full text-center text-sm font-light text-black-500 hover:text-primary leading-[18px] transition-all duration-[0.35s]',
        className
      )}
    >
      <i className={cn('mr-2.5 text-primary text-base', icon)}></i>
      <span className="group-hover:shadow-[0_1px_0_0_#cc9966] whitespace-nowrap">
        {label}
      </span>
    </Link>
  );
};

export default LinkButton;
