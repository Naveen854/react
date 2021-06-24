import './index.css'

const BlogItem = props => {
  const {blogData, lastIndex} = props
  const {id, title, description, publishedDate} = blogData
  const renderHorizontalRule = () => (lastIndex === id ? null : <hr />)
  return (
    <li className="blog-item-container">
      <div className="blog-item-header">
        <h2 className="title">{title}</h2>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      {renderHorizontalRule()}
    </li>
  )
}

export default BlogItem
