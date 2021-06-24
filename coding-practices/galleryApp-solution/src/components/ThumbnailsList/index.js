import {Component} from 'react'

import './index.css'

class ThumbnailsList extends Component {
  renderThumbnails = () => {
    const {photosData, selectedThumbnailId, onClickThumbnailImage} = this.props

    return photosData.map(photo => {
      const {id, thumbnailUrl, thumbnailAltText} = photo
      const onClickThumbnail = () => {
        onClickThumbnailImage(id)
      }

      const btnClassName =
        id === selectedThumbnailId
          ? 'thumbnail-list-item selected-thumbnail-list-item'
          : 'thumbnail-list-item'

      return (
        <li key={id} className={btnClassName} onClick={onClickThumbnail}>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className="thumbnail"
          />
        </li>
      )
    })
  }

  render() {
    return (
      <div className="gallery-details-container">
        <h1 className="heading">Nature Photography</h1>
        <p className="description">Nature Photography by Rahul</p>
        <ul className="thumbnails-list-container">{this.renderThumbnails()}</ul>
      </div>
    )
  }
}

export default ThumbnailsList
