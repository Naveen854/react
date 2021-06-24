import {Component} from 'react'

import ThumbnailsList from '../ThumbnailsList'

import './index.css'

class Gallery extends Component {
  state = {
    selectedThumbnailId: 0,
  }

  updateSelectedImageUrl = id => {
    this.setState({
      selectedThumbnailId: id,
    })
  }

  renderSelectedImage = () => {
    const {photosData} = this.props
    const {selectedThumbnailId} = this.state
    const {imageUrl, imageAltText} = photosData[selectedThumbnailId]

    return <img src={imageUrl} className="selected-image" alt={imageAltText} />
  }

  render() {
    const {photosData} = this.props
    const {selectedThumbnailId} = this.state

    return (
      <div className="app-container">
        <div className="gallery-container">
          {this.renderSelectedImage()}
          <ThumbnailsList
            photosData={photosData}
            selectedThumbnailId={selectedThumbnailId}
            onClickThumbnailImage={this.updateSelectedImageUrl}
          />
        </div>
      </div>
    )
  }
}

export default Gallery
