import React, { Component } from 'react'

export class Counter extends Component {
  state = {
    count: 0
  }

  handleButtonClick() {
    console.log('clicked')
  }

  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick} >
          Add 1
        </button>      
      </div>
    )
  }
}

export default Counter
