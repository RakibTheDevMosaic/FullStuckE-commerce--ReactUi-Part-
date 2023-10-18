import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Card.scss"

const Card = ({item}) => {
  return (
    <NavLink className="Navlink" to={`product/${item.id}`}>
      <div className='card'>
         <div className="image">
            {item.isNew && <span>New Season</span>}
            <img src={item.img} alt="" className='mainImg'/>
            <img src={item.img2} alt="" className='secondImg'/>
         </div>
         <div>
         <h2>{item.title}</h2>
         <span className="prices">
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
         </span>
         </div>
      </div>
    </NavLink>
  )
}

export default Card
