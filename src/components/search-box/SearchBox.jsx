import React, { Component } from 'react'
import './searchStyles.css'

export class SearchBox extends Component {
  render() {
    return (
        <div>
        <input
          className={`searchbox ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
        </div>
    )
  }
}

export default SearchBox