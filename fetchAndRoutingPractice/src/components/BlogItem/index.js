import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <li className="blog-item-container">
        <img className="blog-item-image" src={imageUrl} alt={topic} />
        <div className="blog-info">
          <p className="topic">{topic}</p>
          <h2 className="title">{title}</h2>
          <div className="author-info">
            <img className="user-pic" src={avatarUrl} alt={author} />
            <p className="username">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
