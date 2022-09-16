import React from 'react'

const CardProfile = (arg) => {
  return (
    <div className='card__profile'>
        <div className='img__bx'>
        <img src={arg.src} alt="" />
        </div>
        <div className='profile__content'>
            <div className='profile__details'>
                <h2>{arg.nombre}<br/><span>{arg.titulo}</span></h2>
                <div className='profile__data'>
                    <h3><span>{arg.universidad}</span></h3>
                    <h3><span>{arg.area}</span></h3>
                </div>
                <div className='profile__btn'>
                    <button>Ver perfil</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardProfile