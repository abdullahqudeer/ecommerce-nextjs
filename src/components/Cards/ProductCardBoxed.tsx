import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { productVerticalActionStyles } from './elements/styles';
import IconWithText from '../Icons/IconWithTextOverlay';
import ColorVariants from '../ColorVariants';
import TagLabel from './elements/TagLabel';
import CardPrice from './elements/CardPrice';
import Stars from '../Stars';
import CardActions from './elements/Actions';
import { Product } from '@/types/product';

export interface ProductCardBoxedProps extends Product {
  className?: string;
  onPreview?: () => void;
}

const ProductCardBoxed: FC<ProductCardBoxedProps> = ({
  id,
  title,
  src,
  price,
  oldPrice,
  variants,
  label,
  className,
  onPreview,
  heading,
}) => {
  const productUrl = `/products/${id}`;

  return (
    <div
      className={cn(
        'group relative mb-2.5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.05)] h-full',
        className
      )}
    >
      <div className="relative overflow-hidden">
        <Link href={productUrl} className="relative">
          <Image
            fill
            src={src}
            alt="Product image"
            className="!relative block !w-full !h-auto min-h-[277px]"
          />
        </Link>
        {label && <TagLabel label={label} />}

        <Link href="#" className={productVerticalActionStyles}>
          <IconWithText
            icon={<i className="lar la-heart"></i>}
            text="Add to whishlist"
          />
        </Link>

        <CardActions onPreview={onPreview} />
      </div>
      <div className="py-4 px-5">
        <div className="text-gray-500 text-[13px] font-light tracking-[-0.13px] leading-[15.6px] mb-[3px]">
          {heading}
        </div>
        <h3 className="text-base font-normal text-black-75 mb-[3px] tracking-[-0.16px] leading-[20px] mb-[2px]">
          <Link href={productUrl} className="hover:text-primary">
            {title}
          </Link>
        </h3>
        <CardPrice price={price} oldPrice={oldPrice} isBoxed />
        <div className="mb-[17px] mt-[13px]">
          <Stars count={5} reviewCount={2} />
        </div>
        <ColorVariants variants={variants} />
      </div>
    </div>
  );
};

export default ProductCardBoxed;
