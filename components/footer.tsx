import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Explore",
            links: [
                { name: "Luna ( AI )", href: "/ai" },
                { name: "Blog", href: "/blog" },
                { name: "About", href: "/about" },
                { name: "Skills", href: "/skills" },
                { name: "Work", href: "/work" },
            ]
        },
        {
            title: "Services",
            links: [
                { name: "Work Ethic", href: "/work-ethic" },
                { name: "Cloud Solutions", href: "/cloud" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Archive", href: "/archive" },
            ]
        },
        {
            title: "Connect",
            links: [
                { name: "GitHub", href: "https://github.com/yourusername" },
                { name: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
                { name: "Twitter", href: "https://twitter.com/yourusername" },
            ]
        },
        {
            title: "Technologies",
            links: [
                { name: "Go", href: "/tech/golang" },
                { name: "Python", href: "/tech/python" },
                { name: "JavaScript", href: "/tech/javascript" },
                { name: "TypeScript", href: "/tech/typescript" },
            ]
        },
        {
            title: "Personal",
            links: [
                { name: "Work Statement", href: "/statement" },
                { name: "Pet Projects", href: "/pet-projects" },
                { name: "Video Gallery", href: "/videos" },
            ]
        },
    ];

    return (
        <footer className="pt-16 pb-8">
            <div className="container mx-auto px-2">
                {/* Main footer section with columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
                    {footerLinks.map((section, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className="text-sm font-semibold mb-3">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="text-xs text-muted-foreground hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t my-8"></div>

                {/* Sub-footer with copyright, legal and language selector */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-muted-foreground">
                    <div className="mb-4 md:mb-0">
                        <p>Copyright © {currentYear} Paul Mbugua. All rights reserved.</p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0">
                        <div className="flex space-x-6 mr-6">
                            <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-gray-100">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-gray-900 dark:hover:text-gray-100">
                                Terms of Use
                            </Link>
                            <Link href="/sitemap" className="hover:text-gray-900 dark:hover:text-gray-100">
                                Site Map
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                            </svg>
                            <span className="hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">
                                Nairobi, Kenya
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;