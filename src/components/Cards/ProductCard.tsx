import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Button from '../Button';
import {
  productVerticalActionStyles,
  previewBtnStyles,
} from './elements/styles';
import IconWithText from '../Icons/IconWithTextOverlay';
import ColorVariants from '../ColorVariants';
// import TagLabel from './elements/TagLabel';
import CardPrice from './elements/CardPrice';
import { ColorVariant, Product, ProductVariant } from '@/types/product';

export interface ProductCardProps extends Product {
  className?: string;
  onPreview?: () => void;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  product_variants,
  className,
  onPreview,
}) => {

  const colorVarientFilter = (varients: ProductVariant[]) => {
    let colorsvarients: ColorVariant[] = []

    varients.map((el) => {
      el?.attribute_values?.map((item) => {
        if(item?.variant_attribute?.attribute_name == "Color" || item?.variant_attribute?.attribute_name == "Colour"){
          const checkColor = colorsvarients.find(el => el.color == item.value.toLowerCase())
          !checkColor && colorsvarients.push({id: item.id, color: item.value.toLowerCase()})
        }
      })
    })

    return colorsvarients
  }

  return (
    <div className={cn('group relative mb-2.5', className)}>
      <div className="relative overflow-hidden">
        <Link href={`/products/${id}`} className="relative">
          <Image
            fill
            src={image}
            alt="Product image"
            className="!relative w-full height-auto min-h-[277px]"
            blurDataURL='/default_image.jpg'
          />
        </Link>
        {/* {name && <TagLabel label={name}/>} */}

        <Link href="#" className={productVerticalActionStyles}>
          <IconWithText
            icon={<i className="lar la-heart"></i>}
            text="Add to cart"
          />
        </Link>

        <div className={previewBtnStyles}>
          <Button
            className="w-full justify-center"
            variant="white"
            onClick={onPreview}
          >
            quick view
          </Button>
        </div>
      </div>
      <div className="pt-4 pb-5">
        <h3 className="text-sm font-extralight text-black-100 mb-[3px]">
          <Link href="/products" className="hover:text-primary">
            {name}
          </Link>
        </h3>
        <CardPrice price={price} oldPrice={0} />

        <ColorVariants variants={colorVarientFilter(product_variants)} />

        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-[0.35s] ease">
          <Link
            href="#"
            className="text-sm font-extralight text-primary hover:shadow-[0_0.1rem_0_0_#cc9966] leading-[18px]"
          >
            Add to cart<i className="las la-long-arrow-alt-right ml-2.5"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
