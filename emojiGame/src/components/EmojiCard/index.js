import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emoji
  const onClickEmojiCard = () => onClickEmoji(id)

  return (
    <li className="emoji-item" onClick={onClickEmojiCard}>
      <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
    </li>
  )
}

export default EmojiCard
