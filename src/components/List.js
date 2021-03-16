import React, {useContext, useEffect, useState } from 'react'
import {UserContext, UserProvider} from './context/UserContext'
import {FilmsContext, FilmsProvider} from './context/FilmsContext'

import {Link} from 'react-router-dom'

const movies_list = []
const List = () => {

  const [answer, setAnswer] = useContext(UserContext)
  const [films, setFilms] = useContext(FilmsContext)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    Funcao()
  }, [])

  
  const Funcao = () => {

    films.map(film => {
      if(film.quest_0 == answer[0]){
        movies_list.push(film)
      }
      if(film.quest_1 == answer[1]){
        movies_list.push(film)
      }
      if(film.quest_2 == answer[2]){
        movies_list.push(film)
      }
      if(film.quest_3 == answer[3]){
        movies_list.push(film)
      }
      if(film.quest_4 == answer[4]){
        movies_list.push(film)
      }
      if(film.quest_5 == answer[5]){
        movies_list.push(film)
      }
      if(film.quest_6 == answer[6]){
        movies_list.push(film)
      }
      if(film.quest_7 == answer[7]){
        movies_list.push(film)
      }
      if(film.quest_8 == answer[8]){
        movies_list.push(film)
      }
      if(film.quest_9 == answer[9]){
        movies_list.push(film)
      }
    })

    // console.log(movies_list)
    const arrayObj = []
    const  new_movie_list = []
      

    for(var i = 0; i < movies_list.length ; i ++){
      // console.log(movies_list[i])
      var index = arrayObj.findIndex(x => x.name_pt == movies_list[i].name_pt)
      if(index === -1) {
        arrayObj.push(movies_list[i]) 
        var objeto = { movie: movies_list[i], qtd: 1 }
        new_movie_list.push(objeto) 
      } else {
        // console.log("object already exists")
        for(var j = 0; j < new_movie_list.length ; j ++){
          if(new_movie_list[j].movie.name_pt == movies_list[i].name_pt){            
            new_movie_list[j].qtd += 1
          }
        }
      } 
    }
    // console.log('Lista de filmes agrupados')
    // console.log(new_movie_list)

    // ORDENAR O OBJETO
    var sorted = new_movie_list.sort(function(a, b) {
      return b.qtd - a.qtd;
    })
    // console.log(sorted)
    setMovies(sorted)
  }
  
  return(
    <div className="css-card-area">
      <div className="css-movies-area">
        { answer.length > 0 ?     
          movies.slice(0,10).map((movie,index) => (
            <div key={index}>
              <p>Filme: {movie.movie.name_pt}</p>
              <p>Ano: {movie.movie.year}</p>
              <p>Tempo: {movie.movie.time}</p>
            </div>
          )) : 
  

       
            <div className="css-begin-area">
              <Link style={{ textDecoration: 'inherit', padding:20}}  to="/quests">
                <a role="button" className="css-begin-button">NOVAS SUGESTÕES</a>
              </Link>
            </div>




        }
      
      </div>
    </div>
  )
}

export default List