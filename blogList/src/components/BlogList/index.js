import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsData} = props
  const lastIndex = blogsData.length
  return (
    <ul className="blog-list-container">
      {blogsData.map(eachBlog => (
        <BlogItem blogData={eachBlog} lastIndex={lastIndex} key={eachBlog.id} />
      ))}
    </ul>
  )
}
export default BlogList
