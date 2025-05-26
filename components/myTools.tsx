import React from "react";
import {
    DraggableCardBody,
    DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function MyTools() {
    const items = [
        {
            title: "AWS",
            image: "/aws.svg",
            className: "absolute top-10 left-[20%] rotate-[-5deg]",
        },
        {
            title: "NEXTJS",
            image: "/nextjs.svg",
            className: "absolute top-40 left-[25%] rotate-[-7deg]",
        },
        {
            title: "GITHUB",
            image: "/github.svg",
            className: "absolute top-12 left-[40%] rotate-[8deg]",
        },
        {
            title: "ATLASIAN",
            image: "/atlassian.svg",
            className: "absolute top-10 left-[60%] rotate-[5deg]",
        },
        {
            title: "NEOVIM",
            image: "/vim.svg",
            className: "absolute top-20 left-[70%] rotate-[6deg]",
        },
        {
            title: "PYTHON",
            image: "/python.svg",
            className: "absolute top-30 left-[12%] rotate-[-8deg]",
        },
        {
            title: "DOCKER",
            image: "/docker.svg",
            className: "absolute top-32 left-[55%] rotate-[10deg]",
        },
        {
            title: "GOLANG",
            image: "/go.svg",
            className: "absolute top-24 left-[45%] rotate-[-7deg]",
        },
        {
            title: "REACT",
            image: "/react.svg",
            className: "absolute top-8 left-[30%] rotate-[4deg]",
        },
    ];
    return (
        <DraggableCardContainer className="relative flex min-h-[50vh] w-full items-center justify-center overflow-clip">
            <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                Tools I use to build amazing stuff!
            </p>
            {items.map((item, idx) => (
                <DraggableCardBody key={idx} className={item.className}>
                    <img

                        src={item.image}
                        alt={item.title}
                        className="pointer-events-none relative z-10 h-32 w-32 object-cover rounded-t-lg scale-95"
                    />
                    <h3 className="px-1 font-bold text-black">
                        {item.title}
                    </h3>
                </DraggableCardBody>
            ))}
        </DraggableCardContainer>
    );
}
