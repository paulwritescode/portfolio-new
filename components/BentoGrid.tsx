import { cn } from "@/lib/utils";
import { IconBrandGithub } from '@tabler/icons-react';
import React from 'react';

interface BentoGridProjectsProps {
    className?: string;
    [key: string]: any;
}
const BentoGridProjects: React.FC<BentoGridProjectsProps> = ({ className, ...props }) => {
    return (
        <section className={cn("bg-white p-4 rounded-3xl text-black", className)} {...props}>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Project Title</h2>
                <p className="text-gray-700">Project description goes here. This is a brief overview of the project.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:underline text-xs">
                        <IconBrandGithub size={22} className="inline-block mr-1 bg-black text-white rounded-full p-1" />
                        GitHub repo name
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">View Project</a>
                </div>
            </div>
        </section >
    )
}
export default BentoGridProjects
