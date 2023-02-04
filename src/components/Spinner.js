import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div className='mt-32 ml-[50vw] w-10'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default spinner
