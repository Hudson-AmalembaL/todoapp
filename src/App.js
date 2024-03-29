import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import MainContent from "./components/MainContent";

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    )
  }
}
