import {useState} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

const CoinToss = () => {
  const [headsCount, setHeadsCount] = useState(0)
  const [tailsCount, setTailsCount] = useState(0)
  const [coinFace, setCoinFace] = useState('heads')

  const imgSrc = coinFace === 'heads' ? HEADS_IMG_URL : TAILS_IMG_URL

  const onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      setCoinFace('heads')
      setHeadsCount(headsCount + 1)
    } else {
      setCoinFace('tails')
      setTailsCount(tailsCount + 1)
    }
  }

  return (
    <div className="app-container">
      <div className="coin-toss-card">
        <h1 className="heading">Coin Toss Game</h1>
        <p className="paragraph">Heads (or) Tails</p>
        <img className="heads-or-tails-image" src={imgSrc} alt="toss result" />
        <button type="button" className="toss-coin-button" onClick={onTossCoin}>
          Toss Coin
        </button>
        <div className="heads-tails-counts-container">
          <p>Total: {headsCount + tailsCount}</p>
          <p>Heads: {headsCount}</p>
          <p>Tails: {tailsCount}</p>
        </div>
      </div>
    </div>
  )
}

export default CoinToss
