import {Component} from 'react'

import CardItem from '../CardItem'

import './index.css'

class CardItemList extends Component {
  state = {}

  /*
  clickEmoji = id => {
    const {cardListDetails} = this.props

      cardListDetails.map(item => { 
        if(item.id === id){
            item.isOpen = true
        }  
    }
  }
*/
  render() {
    const {cardListDetails} = this.props

    return (
      <div className="app-container">
        <ul className="card-list-items">
          {cardListDetails.map(eachCard => (
            <CardItem
              key={eachCard.id}
              cardList={eachCard}
              clickEmoji={this.clickEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CardItemList
