import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    date: string;
    role: string;
    location: string;
    icon: React.ReactNode;
    artifacts: string[];
    description1: string;
    company: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-col py-10", className)}>
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-purple-400/5 dark:bg-slate-800/[0.8] flex  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex flex-col md:flex-row gap-3  rounded-xl  ">
              <div className="">
                <p className="text-sm w-[7rem] text-slate-400 uppercase">
                  {item.date}
                </p>
              </div>
              <div className="">
                <h1 className="text-xl font-bold flex flex-wrap items-end mb-1">
                  {item.title}
                  <span className="text-sm ml-1"> // {item.company}</span>
                </h1>
                <p className="text-sm capitalize text-slate-400 gap-2 flex">
                  {item.role}
                </p>
                <p className="capitalize text-sm mb-2 text-teal-500 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {item.location}
                </p>
                <p className="flex flex-wrap text-sm md:text-base text-slate-400">
                  {item.description1}
                </p>
                <span className="flex gap-2 mt-4 flex-wrap text-sm">
                  {item.artifacts.map((artifact, index) => (
                    <p
                      key={index}
                      className="p-1 rounded-xl px-3 bg-teal-200/10 text-teal-400"
                    >
                      {artifact}
                    </p>
                  ))}
                </span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full  overflow-hidden bg-slate-1000  relative z-20",
        className
      )}
    >
      <div className="relative z-50 p-2">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <h4 className={cn("text-white font-bold tracking-wide mt-4", className)}>
//       {children}
//     </h4>
//   );
// };
// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "mt-1 text-orange-400 tracking-wide leading-relaxed text-",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };
