"use client";

import { Tabs } from "@/components/ui/tabs";

export function ProjectsBento() {
    const tabs = [
        {
            title: "Ticketing System",
            value: "Eventhero",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-12 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-violet-800 via-indigo-800 to-purple-800">
                    <p>Eventhero</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Ecommerce",
            value: "Futurehive",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-12 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-violet-800 via-indigo-800 to-purple-800">
                    <p>Futurehive</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Management System",
            value: "Agapelife",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-12 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-violet-800 via-indigo-800 to-purple-800">
                    <p>Agape Life</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Company Website",
            value: "Makingsents",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-12 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-violet-800 via-indigo-800 to-purple-800">
                    <p>Making Sents</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Book Showcase",
            value: "Leer Bookshop",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-12 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-violet-800 via-indigo-800 to-purple-800">
                    <p>Leer Bookshop</p>
                    <DummyContent />
                </div>
            ),
        },
    ];

    return (
        <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-center my-2">
            <Tabs containerClassName="h-24 flex-wrap  md:h-max " tabs={tabs} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <img
            src="https://images.unsplash.com/photo-1720962158858-5fb16991d2b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
