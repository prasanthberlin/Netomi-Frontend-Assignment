import './index.css'

const CardItem = props => {
  const {cardList, clickEmoji} = props
  const {id, emojiName, emojiUrl, isOpen} = cardList

  const defaultUrl =
    'https://i.pinimg.com/originals/25/42/c7/2542c7e8c0dad988ed003eb2218dc268.jpg'

  const displayImageUrl = isOpen ? emojiUrl : defaultUrl
  const altImageName = isOpen ? emojiName : 'default image card'

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img className="emoji-icon" src={displayImageUrl} alt={altImageName} />
      </button>
    </li>
  )
}

export default CardItem
