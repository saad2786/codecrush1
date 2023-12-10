import React from 'react'
import "./styles.css"
import BlogItem from './BlogItem/BlogItem'
const BlogList = ({blogs}) => {
  return (
    <div className='blogList-wrap'>
   {blogs && blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  )
}

export default BlogList