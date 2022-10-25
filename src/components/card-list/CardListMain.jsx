import React, { Component } from 'react'
import './cardStyles.css'

export class CardListMain extends Component {
  render() {
    const {monsters} = this.props
    return (
      <div className='cardlist'>
        {
          monsters.map((monster) => {
            const { name, email, id } = monster;
            return (
              <div className='cardContainer' key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h1>{name}</h1>
                <p>{email}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default CardListMain