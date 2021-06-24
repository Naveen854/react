import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    // console.log(data)
    const blogsData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))
    this.setState({blogsData, isLoading: false})
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderBlogList = () => {
    const {blogsData} = this.state
    return (
      <ul className="blog-list-container">
        {blogsData.map(eachData => (
          <BlogItem blogData={eachData} key={eachData.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return <>{isLoading ? this.renderLoader() : this.renderBlogList()}</>
  }
}
export default BlogList
