'use client';
import { useState } from 'react';

export default function BlogPostLinks() {
    const [filter, setFilter] = useState('all');

    const blogPosts = [
        {
            title: "Building Serverless Applications with AWS Lambda and API Gateway",
            date: "April 17th, 2025",
            category: "serverless",
            url: "/blog/serverless-applications-aws-lambda",
            readTime: "8 min read"
        },
        {
            title: "Implementing CI/CD Pipelines with GitHub Actions for Modern Web Apps",
            date: "April 2nd, 2025",
            category: "devops",
            url: "/blog/github-actions-cicd-pipelines",
            readTime: "12 min read"
        },
        {
            title: "Optimizing React Performance: Practical Techniques for Production Apps",
            date: "March 21st, 2025",
            category: "frontend",
            url: "/blog/react-performance-optimization",
            readTime: "15 min read"
        },
        {
            title: "The Power of DynamoDB: A NoSQL Database That Scales with Your Needs",
            date: "February 4th, 2025",
            category: "database",
            url: "/blog/power-of-dynamodb-nosql",
            readTime: "10 min read"
        },
        {
            title: "Kubernetes for Developers: From Local Development to Production",
            date: "January 28th, 2025",
            category: "devops",
            url: "/blog/kubernetes-development-to-production",
            readTime: "14 min read"
        },
        {
            title: "Securing Microservices with OAuth 2.0 and JWT Authentication",
            date: "January 15th, 2025",
            category: "security",
            url: "/blog/microservices-oauth-jwt-security",
            readTime: "11 min read"
        },
        {
            title: "Building Email Templating Systems with AWS S3, Cognito and Lambda",
            date: "January 3rd, 2025",
            category: "serverless",
            url: "/blog/email-templating-aws-s3-lambda",
            readTime: "9 min read"
        },
        {
            title: "GraphQL vs REST: Choosing the Right API Architecture",
            date: "December 12th, 2024",
            category: "backend",
            url: "/blog/graphql-vs-rest-api-architecture",
            readTime: "13 min read"
        }
    ];

    const filteredPosts = filter === 'all'
        ? blogPosts
        : blogPosts.filter(post => post.category === filter);

    return (
        <div className="w-full max-w-3xl mx-auto py-8">
            <div className="flex flex-wrap gap-2 mb-6">
                <button
                    onClick={() => setFilter('all')}
                    className={`px-3 py-1 text-sm rounded-full ${filter === 'all' ? 'dark:bg-blue-800/20 border border-blue-500/50 rounded-xl text-white' : 'bg-muted'}`}>
                    All
                </button>
                {['serverless', 'devops', 'frontend', 'backend', 'database', 'security'].map(category => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-3 py-1 text-sm rounded-full capitalize ${filter === category ? 'dark:bg-blue-800/20 border border-blue-500/50 rounded-xl text-white' : 'bg-muted'}`}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                    <a
                        key={index}
                        href={post.url}
                        className="block p-4 border rounded-lg hover:dark:bg-blue-800/20  hover:border-blue-500/50  transition-colors">
                        <div className="flex flex-col">
                            <p className="max-w-lg text-base font-semibold">
                                &mdash; {post.title}
                            </p>
                            <div className="flex items-center mt-2 text-muted-foreground">
                                <span className="text-xs font-mono">
                                    {post.date}
                                </span>
                                <span className="mx-2 text-xs">•</span>
                                <span className="text-xs capitalize bg-muted px-2 py-0.5 rounded">
                                    {post.category}
                                </span>
                                <span className="mx-2 text-xs">•</span>
                                <span className="text-xs">
                                    {post.readTime}
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}