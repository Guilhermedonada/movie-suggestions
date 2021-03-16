import React from 'react'
import {Link} from 'react-router-dom'

const Begin = () => {

  return(
    <div className="css-card-area">
      <div className="css-movies-area">
        <div className="css-begin-area">
          <Link style={{ textDecoration: 'inherit', padding:20}}  to="/quests">
            <a role="button" className="css-begin-button">INICIAR BUSCA</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Begin