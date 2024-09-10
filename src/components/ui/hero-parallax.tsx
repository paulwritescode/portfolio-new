"use client";
import { IconHandClick } from "@tabler/icons-react";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export const HeroParallax = ({
  products,
}: {
  products: {
    id: number;
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 700]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 600]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-10 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse  space-x-5 mb-5  md:mb-10 md:space-x-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-5 mb-5  md:mb-10 md:space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-20 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        <img className="w-60" src="/tajiri-whitetxt.svg" alt="" />
        Design Studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8  dark:text-neutral-200 group">
        Bringing ideas to life through stunning visuals and innovative design.
        With a deep passion for both aesthetics and functionality, we merge
        artistry and technology to deliver impactful, high-quality products that
        resonate with your audience.
        <span className=" group-hover:text-emerald-400  flex items-center text-base">
          Scroll and click image for detailed view.
          <IconHandClick className="inline-block ml-2 group-hover:animate-ping" />
        </span>
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    id: number;
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product w-[10rem] h-[10rem]  md:h-[30rem] md:w-[30rem] relative flex-shrink-0"
    >
      <Link
        to={`/design/${product.id}`}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          className="object-cover  object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute text-3xl font-bold bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
