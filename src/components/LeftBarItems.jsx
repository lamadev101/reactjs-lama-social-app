import React from 'react'

const LeftBarItems = ({items}) => {
  return (
    <div className='leftItems'>
      {items.map((item) => {
        return ( 
          <div key={item.id} className="items">
            <img src={item.img} alt="" />
            <span>{item.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default LeftBarItems