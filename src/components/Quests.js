import React, {useEffect, useState, useContext} from 'react'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import { useHistory } from "react-router-dom";




import {UserContext, UserProvider} from './context/UserContext'


var array_answer = []

const Quests = () => {

  const [answer, setAnswer] = useContext(UserContext)

  const quests = [
    {
      'id': 0,
      'quest': 'Está chovendo?', 
      'answer_1': 'sim',
      'answer_2': 'não',
      'answer_3': 'talvez',
    },
    {
      'id': 1,
      'quest': 'Está frio?',
      'answer_1': 'sim',
      'answer_2': 'não',
      'answer_3': 'talvez',
    },
    {
      'id': 2,
      'quest': 'Gosta de violência?',
      'answer_1': 'sim',
      'answer_2': 'não',
      'answer_3': 'talvez',
    },
    {
      'id': 3,
      'quest': 'Você está bebendo?',
      'answer_1': 'sim',
      'answer_2': 'não',
      'answer_3': 'talvez',
    },
    {
      'id': 4,
      'quest': 'Já está bêbado?',
      'answer_1': 'sim',
      'answer_2': 'não',
      'answer_3': 'talvez',
    },
    {
      'id': 5,
      'quest': 'Você odeia o presidente?',
      'answer_1': 'sim',
      'answer_2': 'sim',
      'answer_3': 'sim',
    },
    {
      'id': 6,
      'quest': 'Quer pensar?',
      'answer_1': 'sim',
      'answer_2': 'não',
      'answer_3': 'talvez',
    },
    {
      'id': 7,
      'quest': 'Trilha sonora é importante?',
      'answer_1': 'sim',
      'answer_2': 'não',
      'answer_3': 'talvez',
    },
    {
      'id': 8,
      'quest': 'Quer ficar mais triste ?',
      'answer_1': 'sim',
      'answer_2': 'não',
      'answer_3': 'talvez',
    },
  	{
      'id': 9,
      'quest': 'Você realmente quer ver o filme?',
      'answer_1': 'sim',
      'answer_2': 'não',
      'answer_3': 'talvez',
    },
  ]
  

  const [quest, setQuest] = useState({
    id: quests[0].id,
    quest: quests[0].quest,
    answer_1: quests[0].answer_1,
    answer_2: quests[0].answer_2,
    answer_3: quests[0].answer_3,
  })

  let history = useHistory()

  const changeQuest = (e) => {
    e.preventDefault();

    if((e.target.dataset.index) == quests.length - 1){
      console.log('acabou as perguntass')
      setAnswer(array_answer)
      history.push("/movies")
    } else {      
      setQuest(quests[parseInt(e.target.dataset.index) + 1])
      //monta array de resposta
      array_answer.push(e.target.dataset.answer)  
      // console.log(e.target.dataset.answer)
      console.log(array_answer)
    }
    
  }

  return(
    <div className="css-area-quest flex-column d-flex">
      <div className="d-flex flex-row justify-content-between">
        <p>{quest.quest}</p> 
      </div>
      <div className="d-flex flex-row justify-content-between css-area-checkbox">
        <div className="d-flex">
          <input id="c1" type="checkbox" onClick={changeQuest} data-index={quest.id} data-answer={'YES'}/>
          <label for="c1"></label>
          <p>{quest.answer_1}</p> 
        </div>       
        <div className="d-flex">
          <input type="checkbox" id="c3" onClick={changeQuest} data-index={quest.id} data-answer={'MAYBE'}/>
          <label for="c3"></label>
          <p>{quest.answer_3}</p>
        </div>
        <div className="d-flex">
          <input type="checkbox" id="c0" onClick={changeQuest} data-index={quest.id} data-answer={'NO'}/>
          <label for="c0"></label>
          <p>{quest.answer_2}</p>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-end">
        <p className="f-12 mb-0">{quest.id + 1}/10</p>
      </div>
    </div>
  )
}


export default Quests