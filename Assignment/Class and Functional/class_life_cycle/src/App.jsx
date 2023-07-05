import React, { Component } from 'react'
import Counter from './Component/Counter';

export default class App extends Component {

  constructor() {
    super();
    console.log("This will render before page render");
    this.state = {
      number: 0,
    }
  }

  componentDidMount() {
    console.log("This will be the first one to render after the page rendered");
  }

  componentWillUnmount() {
    console.log('Component unmounted');
  }

  increment() {
    this.setState({ number: this.state.number + 1 })
  }

  decrement() {
    this.setState({ number: this.state.number - 1 })
  }

  render() {
    console.log("this is inside render method");
    return (
      <div>
        <button onClick={() => { this.decrement() }}> Decrement </button>
        <Counter number={this.state.number} />
        <button onClick={this.increment.bind(this)}> Increment </button>
      </div>
    )
  }
}
