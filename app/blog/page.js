import React from 'react';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import fs from "fs"
import matter from "gray-matter"

const dirContent = fs.readdirSync("content", "utf-8")

const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    
    return data
})

// const blogs = [
//   {
//     title: 'First Blog Post',
//     description: 'This is the description for the first blog post.',
//     slug: 'first-blog-post',
//     date: '2023-10-01',
//     author: 'Author One',
//     image: 'https://via.placeholder.com/300',
//   },
//   {
//     title: 'Second Blog Post',
//     description: 'This is the description for the second blog post.',
//     slug: 'second-blog-post',
//     date: '2023-10-02',
//     author: 'Author Two',
//     image: 'https://via.placeholder.com/300',
//   },
//   {
//     title: 'Third Blog Post',
//     description: 'This is the description for the second blog post.',
//     slug: 'Third-blog-post',
//     date: '2023-10-02',
//     author: 'Author Two',
//     image: 'https://via.placeholder.com/300',
//   },

// ];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.slug} className="rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <p className="text-sm m-5">{`By ${blog.author} on ${new Date(blog.date).toLocaleDateString()}`}</p>

              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Click here</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;