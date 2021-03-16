import React from 'react'
import Logo from '../assets/imagens/OCULOSpb.png'

const Main = () => {
  const style = {
    width: 200
  };
  return(
    <div>
      <img src={Logo} style={style} />
    </div>
  )
}

export default Main