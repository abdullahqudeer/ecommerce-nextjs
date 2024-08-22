import { cn } from "@/lib/utils";
import { FC } from "react";

interface HeroProps {
  title: string;
  subTitle: string;
  className?: string;
  customBg?: string;
  textColor?: string;
}

const heroBaseStyles =
  "flex flex-col items-center justify-center pt-[46px] pb-[50px] bg-[url('/products/category-bg.jpg')] bg-cover bg-center";

const Hero: FC<HeroProps> = ({
  title,
  subTitle,
  className,
  customBg,
  textColor,
}) => {
  return (
    <div
      className={cn(heroBaseStyles, className)}
      style={{ backgroundImage: `url(${customBg})` }}
    >
      <h1
        className={`text-[32px] sm:text-[40px] ${
          textColor ? textColor : "text-black-75"
        } tracking-[-1px] leading-[44px]`}
      >
        {title}
      </h1>
      <h3
        className={`text-base sm:text-xl font-light ${
          textColor ? textColor : "text-primary"
        } tracking-[-1px] mt-[5px]`}
      >
        {subTitle}
      </h3>
    </div>
  );
};

export default Hero;
