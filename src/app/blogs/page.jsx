import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <div className='p-24'>
            <h1 className='text-center'>Blogs</h1> 
            {
              blogs.map((blog) => (
                <div key={blog.slug} className='border-2 p-12'>
                 <h3>{blog.title}</h3>
                 <h3>{blog.description}</h3>
                 <button className='bg-red-400 rounded p-2 mt-3'><Link href={`/blogs/${blog.slug}`}>View Details</Link></button>
                </div> 
              ))
            }

        </div>
    );
};
 
const blogs = [
    {
      "slug": "introduction-to-react",
      "title": "Introduction to React",
      "description": "A beginner's guide to building interactive user interfaces using React.js."
    },
    {
      "slug": "javascript-es6-features",
      "title": "Top ES6 Features in JavaScript",
      "description": "Explore the most important ES6 features every JavaScript developer should know."
    },
    {
      "slug": "mastering-css-grid",
      "title": "Mastering CSS Grid Layout",
      "description": "Learn how to build complex and responsive web layouts with CSS Grid."
    },
    {
      "slug": "nodejs-express-introduction",
      "title": "Getting Started with Node.js and Express",
      "description": "An introductory guide to building back-end services with Node.js and Express."
    },
    {
      "slug": "mongodb-crud-tutorial",
      "title": "MongoDB CRUD Operations Tutorial",
      "description": "Learn how to perform CRUD operations in MongoDB using Node.js."
    }
  ]

export default BlogsPage;