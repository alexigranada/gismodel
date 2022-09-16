import React from 'react'

const CardPorfolio = (arg) => {
  return (
    <div className='card__portfolio'>
        <figure>
            <img src={arg.img}></img>
            <div className='capa'>
                <h2>{arg.title}</h2>
                <p>{arg.description}</p>
            </div>
        </figure>
    </div>
  )
}

export default CardPorfolio