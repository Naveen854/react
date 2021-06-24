import './index.css'

const ThumbnailsList = props => {
  const {thumbnailData, changeGalleryImage, selectedImageId} = props
  const {
    thumbnailUrl,
    thumbnailAltText,
    imageUrl,
    imageAltText,
    id,
  } = thumbnailData

  const changeGalleryPic = () => {
    changeGalleryImage({id, imageUrl, imageAltText})
  }
  return (
    <li className="thumbnail-image-item">
      <button className="thumbnail-button" onClick={changeGalleryPic}>
        <img
          className={`thumbnail-image ${
            selectedImageId !== id ? 'apply-opacity' : 'remove-opacity'
          }`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailsList
