import React from 'react'
import ContextHook from './UseContext/ContextHook'
import ReducerHook from './UseReducer/ReducerHook'
import "./App.css"
import RefHook from './UseRef/RefHook'
import EffectHook from './UseEffect/EffectHook'
import StateHook from './UseState/StateHook'

const App = () => {
  return (
    <div>
      <ContextHook />
      <hr />
      <ReducerHook />
      <hr />
      <RefHook />
      <hr />
      <EffectHook />
      <hr />
      <StateHook />
    </div>
  )
}

export default App