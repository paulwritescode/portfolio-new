import Link from "next/link";

const BlogShowcase = () => {
    const blogPosts = [
        {
            title: "Building Serverless Applications with AWS Lambda and API Gateway",
            date: "April 17th, 2025",
            url: "/blog/serverless-applications-aws-lambda",
        },
        {
            title: "Implementing CI/CD Pipelines with GitHub Actions for Modern Web Apps",
            date: "April 2nd, 2025",
            url: "/blog/github-actions-cicd-pipelines",
        },
        {
            title: "Optimizing React Performance: Practical Techniques for Production Apps",
            date: "March 21st, 2025",
            url: "/blog/react-performance-optimization",
        },
        {
            title: "The Power of DynamoDB: A NoSQL Database That Scales with Your Needs",
            date: "February 4th, 2025",
            url: "/blog/power-of-dynamodb-nosql",
        },

    ];

    return (
        <section className="relative my-20 w-full flex flex-col container">
            <div className="flex flex-col gap-10 justify-center items-center">
                <h2 className="text-3xl font-bold">Posts I&apos;ve written</h2>
                <div className="flex flex-wrap gap-6 w-full justify-center">
                    {blogPosts.map((post, index) => (
                        <Link
                            key={index}
                            href={post.url}
                            className="flex flex-col hover:dark:bg-blue-800/20  hover:border-blue-500/50  p-3 rounded-lg transition-colors">
                            <p className="max-w-lg text-base font-semibold">
                                &mdash; {post.title}
                            </p>
                            <span
                                className="text-xs text-muted-foreground font-geist-mono mt-1">
                                {post.date}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogShowcase