import React from 'react'
import LeftBarItems from './LeftBarItems'
import { topItems, midItems, bottomItems } from '../data'

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <LeftBarItems items={topItems} />
      <hr />
      <div>Your Shortcuts</div>
      <LeftBarItems items={midItems} />
      <hr />
      <div>Others</div>
      <LeftBarItems items={bottomItems} />

    </div>
  )
}

export default LeftBar