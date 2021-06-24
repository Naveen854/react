import {Component} from 'react'
import ThumbnailsList from '../ThumbnailsList'
import './index.css'

class Gallery extends Component {
  constructor(props) {
    super(props)
    const {photosData} = props
    this.state = {
      initialPhotosData: photosData,
      galleryImage: photosData[0].imageUrl,
      altText: photosData[0].imageAltText,
      selectedImageId: 0,
    }
  }

  changeGalleryImage = imageObject => {
    const {id, imageUrl, imageAltText} = imageObject
    console.log(id)
    const {galleryImage} = this.state
    if (imageUrl !== galleryImage) {
      this.setState({
        galleryImage: imageUrl,
        altText: imageAltText,
        selectedImageId: id,
      })
    }
  }

  render() {
    const {
      initialPhotosData,
      galleryImage,
      altText,
      selectedImageId,
    } = this.state
    return (
      <div className="gallery-image-container">
        <img className="gallery-image" src={galleryImage} alt={altText} />
        <h1 className="heading">Nature Photography</h1>
        <p className="description">Nature Photography by Rahul</p>
        <ul className="thumbnail-items-container">
          {initialPhotosData.map(eachData => (
            <ThumbnailsList
              key={eachData.id}
              thumbnailData={eachData}
              selectedImageId={selectedImageId}
              changeGalleryImage={this.changeGalleryImage}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Gallery
