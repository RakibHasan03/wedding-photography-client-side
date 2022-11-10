import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-sky-500 dark:text-gray-100 w-11/12 mx-auto mt-12 rounded-lg">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl text-center mb-3">Question To Answer Section</h2>

                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl">Difference between SQL and NoSQL</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white text-md">
                                SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. SQL databases are table based databases	NoSQL databases can be document based, key-value pairs, graph databases
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl">What is JWT, and how does it work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white text-md">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.This information can be verified and trusted because it is digitally signed. </p>



                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl">
                                How does NodeJS handle multiple requests at the same time?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl"> What is Node? How does Node work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;