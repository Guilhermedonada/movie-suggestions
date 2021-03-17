import React, {useState, useEffect} from 'react'
import Logo from '../assets/imagens/OCULOSpb.png'

const Main = () => {

  const [time, setTime] = useState(3)

  useEffect(() => {
    counter()
  },[])

  var temp = 3
  const counter = () => {
    var timer = setTimeout(() => {
      temp = temp - 1
      setTime(temp)
      if(temp == 0){
        temp = 3
        setTime(temp)
      }
      counter()
    },2000 )
  }


  return(
    <div className="css-main">
        <div className="css-icon">
          <div className="css-icon-s1"></div>
          <div className="css-icon-s2"></div>
          <div className="css-icon-s3"></div>
          <div className="css-icon-s4"></div>
          <div className="css-icon-r0">
            <div className="css-icon-r1 key-css-hide">
              <span>{time}</span>
            </div>
          </div>
        </div>
      
        <h1>MUUVIE</h1>
        <h5 className="f-14">Dicas de filmes e nada mais.</h5>      
    </div>
  )
}

export default Main