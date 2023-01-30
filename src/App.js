
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h2 className='text-4xl text-center mt-28 '>TOP HEADLINES</h2>

        <News pagesize={5}/> 

      </div>
    )
  }
}

