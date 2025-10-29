import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: any[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-col py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-black/5 dark:bg-white/5 flex  rounded-3xl"
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
            <div className="flex flex-col md:flex-row gap-3  rounded-xl  p-1">
              <div className="">
                <p className="text-xs w-[7rem] text-black dark:text-gray-400 uppercase">
                  {item.date}
                </p>
              </div>
              <div className="">
                <h1 className="text-xl font-bold flex flex-wrap items-end mb-1 text-black dark:text-white">
                  {item.title}
                  <span className="text-sm ml-1"> // {item.website ? (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black dark:hover:text-white transition-colors underline decoration-black/50 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}</span>
                </h1>

                <div className="flex gap-1">
                  {item.role.map((role: string, index: number) => (
                    <p
                      key={index}
                      className="text-sm capitalize text-black dark:text-gray-400"
                    >
                      {role} |
                    </p>
                  ))}
                </div>

                <p className="capitalize text-sm my-2 text-black dark:text-white flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {item.location}
                </p>
                <p className="flex flex-wrap text-sm md:text-base text-black dark:text-gray-300">
                  {item.description1}
                </p>
                <span className="flex gap-2 mt-4 flex-wrap text-sm">
                  {item.artifacts.map((artifact: string, index: number) => (
                    <p
                      key={index}
                      className="p-1 rounded-xl px-3 bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20"
                    >
                      {artifact}
                    </p>
                  ))}
                </span>
              </div>
            </div>
          </Card>
        </div>
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
