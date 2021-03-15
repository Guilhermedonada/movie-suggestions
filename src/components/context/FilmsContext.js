import React, {useState, createContext} from 'react'

export const FilmsContext = createContext()

export const FilmsProvider = (props) => {

    const[films, setFilms] = useState([
      {
        name_pt: 'Jamaica abaixo de zero',
        name_en: '',
        year: 1993,
        time: '01:38',
        quest_0: "NO",
        quest_1: "YES",
        quest_2: "NO",
        quest_3: "MAYBE",
        quest_4: "MAYBE",
        quest_5: "YES",
        quest_6: "NO",
        quest_7: "YES",
        quest_8: "NO",
        quest_9: "YES",
      },
      {
        name_pt: 'Forrest Gump',
        name_en: '',
        year: 1994,
        time: '02:22',
        quest_0: "MAYBE",
        quest_1: "MAYBE",
        quest_2: "MAYBE",
        quest_3: "NO",
        quest_4: "NO",
        quest_5: "YES",
        quest_6: "MAYBE",
        quest_7: "YES",
        quest_8: "NO",
        quest_9: "YES",
      },
      {
        name_pt: '500 dias com ela',
        name_en: '',
        year: 2009,
        time: '01:37',
        quest_0: "YES",
        quest_1: "YES",
        quest_2: "NO",
        quest_3: "MAYBE",
        quest_4: "MAYBE",
        quest_5: "YES",
        quest_6: "NO",
        quest_7: "MAYBE",
        quest_8: "YES",
        quest_9: "YES",
      },
      {
        name_pt: 'Dia de treinamento',
        name_en: '',
        year: 2001,
        time: '02:01',
        quest_1: "NO",
        quest_1: "NO",
        quest_2: "YES",
        quest_3: "MAYBE",
        quest_4: "NO",
        quest_5: "YES",
        quest_6: "YES",
        quest_7: "MAYBE",
        quest_8: "NO",
        quest_9: "YES",
      },
      {
        name_pt: 'Shrek 1',
        name_en: '',
        year: 2001,
        time: '01:35',
        quest_0: "MAYBE",
        quest_1: "MAYBE",
        quest_2: "NO",
        quest_3: "MAYBE",
        quest_4: "MAYBE",
        quest_5: "YES",
        quest_6: "NO",
        quest_7: "YES",
        quest_8: "NO",
        quest_9: "MAYBE",
      },
      {
        name_pt: 'Shrek 2',
        name_en: '',
        year: 2004,
        time: '01:45',
        quest_0: "MAYBE",
        quest_1: "MAYBE",
        quest_2: "NO",
        quest_3: "MAYBE",
        quest_4: "MAYBE",
        quest_5: "YES",
        quest_6: "NO",
        quest_7: "YES",
        quest_8: "NO",
        quest_9: "MAYBE",
      },
      {
        name_pt: 'Shrek 3',
        name_en: '',
        year: 2007,
        time: '01:33',
        quest_0: "MAYBE",
        quest_1: "MAYBE",
        quest_2: "NO",
        quest_3: "MAYBE",
        quest_4: "MAYBE",
        quest_5: "YES",
        quest_6: "NO",
        quest_7: "YES",
        quest_8: "NO",
        quest_9: "MAYBE",
      },
      {
        name_pt: 'Matrix 1',
        name_en: '',
        year: 1999,
        time: '02:30',
        quest_0: "MAYBE",
        quest_1: "MAYBE",
        quest_2: "MAYBE",
        quest_3: "NO",
        quest_4: "NO",
        quest_5: "YES",
        quest_6: "YES",
        quest_7: "YES",
        quest_8: "NO",
        quest_9: "YES",
      },
      {
        name_pt: 'Matrix Reloaded',
        name_en: '',
        year: 2003,
        time: '02:18',
        quest_0: "MAYBE",
        quest_1: "MAYBE",
        quest_2: "YES",
        quest_3: "NO",
        quest_4: "NO",
        quest_5: "YES",
        quest_6: "YES",
        quest_7: "MAYBE",
        quest_8: "NO",
        quest_9: "YES",
      },
      {
        name_pt: 'A origem',
        name_en: '',
        year: 2010,
        time: '02:42',
        quest_0: "MAYBE",
        quest_1: "MAYBE",
        quest_2: "MAYBE",
        quest_3: "NO",
        quest_4: "NO",
        quest_5: "YES",
        quest_6: "YES",
        quest_7: "YES",
        quest_8: "NO",
        quest_9: "YES",
      },
      {
        name_pt: 'Amnésia',
        name_en: '',
        year: 2000,
        time: '01:54',
        quest_0: "MAYBE",
        quest_1: "MAYBE",
        quest_2: "YES",
        quest_3: "NO",
        quest_4: "NO",
        quest_5: "YES",
        quest_6: "YES",
        quest_7: "YES",
        quest_8: "NO",
        quest_9: "YES",
      },
      {
        name_pt: 'Enigma',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: "MAYBE",
        quest_1: "MAYBE",
        quest_2: "NO",
        quest_3: "NO",
        quest_4: "NO",
        quest_5: "YES",
        quest_6: "YES",
        quest_7: "MAYBE",
        quest_8: "NO",
        quest_9: "YES",
      },
      {
        name_pt: 'O Jogo da Imitação',
        name_en: '',
        year: 2014,
        time: '01:54',
        quest_0: "MAYBE",
        quest_1: "MAYBE",
        quest_2: "NO",
        quest_3: "NO",
        quest_4: "NO",
        quest_5: "YES",
        quest_6: "YES",
        quest_7: "MAYBE",
        quest_8: "NO",
        quest_9: "YES",
      },
      {
        name_pt: 'O dia depois de amanhã',
        name_en: '',
        year: 2004,
        time: '02:04',
        quest_0: "MAYBE",
        quest_1: "YES",
        quest_2: "YES",
        quest_3: "MAYBE",
        quest_4: "MAYBE",
        quest_5: "YES",
        quest_6: "NO",
        quest_7: "NO",
        quest_8: "NO",
        quest_9: "MAYBE",
      },
      {
        name_pt: 'O dia que a terra parou',
        name_en: '',
        year: 2008,
        time: '01:46',
        quest_0: "MAYBE",
        quest_1: "MAYBE",
        quest_2: "YES",
        quest_3: "MAYBE",
        quest_4: "MAYBE",
        quest_5: "YES",
        quest_6: "NO",
        quest_7: "NO",
        quest_8: "NO",
        quest_9: "NO",
      },
      {
        name_pt: 'Presságio',
        name_en: '',
        year: 2009,
        time: '02:01',
        quest_0: "MAYBE",
        quest_1: "NO",
        quest_2: "YES",
        quest_3: "MAYBE",
        quest_4: "MAYBE",
        quest_5: "YES",
        quest_6: "NO",
        quest_7: "NO",
        quest_8: "NO",
        quest_9: "MAYBE",
      },
      {
        name_pt: 'O vidente',
        name_en: '',
        year: 2007,
        time: '01:36',
        quest_0: "NO",
        quest_1: "NO",
        quest_2: "YES",
        quest_3: "MAYBE",
        quest_4: "MAYBE",
        quest_5: "YES",
        quest_6: "MAYBE",
        quest_7: "NO",
        quest_8: "NO",
        quest_9: "YES",
      },
      {
        name_pt: 'Click',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Eu sou a lenda',
        name_en: '',
        year: 2007,
        time: '01:44',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Hitch conselheiro amoroso',
        name_en: '',
        year: 2005,
        time: '01:58',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'A procura da felicidade',
        name_en: '',
        year: 2006,
        time: '01:57',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Independence Day',
        name_en: '',
        year: 1996,
        time: '02:34',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
        quest_10: "MAYBE",
      },
      {
        name_pt: 'Os 7 de Chicago',
        name_en: '',
        year: 2020,
        time: '02:10',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Destacamento Blood',
        name_en: '',
        year: 2020,
        time: '02:36',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Infiltrado na Klan',
        name_en: '',
        year: 2018,
        time: '02:16',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
        quest_10: "MAYBE",
      },
      {
        name_pt: 'Borat',
        name_en: '',
        year: 2006,
        time: '01:26',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Um sonho possível',
        name_en: '',
        year: 2009,
        time: '02:09',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'A casa do lago',
        name_en: '',
        year: 2006,
        time: '01:45',
        quest_0: 1,
        quest_1: "YES",
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'A proposta',
        name_en: '',
        year: 2009,
        time: '01:48',
        quest_0: 1,
        quest_1: "YES",
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Como eu era antes de você',
        name_en: '',
        year: 2016,
        time: '01:51',
        quest_0: 1,
        quest_1: "YES",
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: 1,
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: '10 coisas que eu odeio em você',
        name_en: '',
        year: 1999,
        time: '01:39',
        quest_0: 1,
        quest_1: "YES",
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Coração de cavaleiro',
        name_en: '',
        year: 2001,
        time: '02:24',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Coração valente',
        name_en: '',
        year: 1995,
        time: '03:02',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Pulp fiction',
        name_en: '',
        year: 1994,
        time: '02:58',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Bastardos Inglórios',
        name_en: '',
        year: 2009,
        time: '02:33',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Django livre',
        name_en: '',
        year: 2012,
        time: '02:45',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Jackie Brown',
        name_en: '',
        year: 1997,
        time: '02:40',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Kill Bill - Volume 1',
        name_en: '',
        year: 2003,
        time: '01:52',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Os embalos de sábado a "no"ite',
        name_en: '',
        year: 1977,
        time: '01:59',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Dirty Dancing',
        name_en: '',
        year: 1987,
        time: '01:40',
        quest_0: 1,
        quest_1: "YES",
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Grease - "No"s tempos da brilhantina',
        name_en: '',
        year: 1978,
        time: '01:51',
        quest_0: 1,
        quest_1: "YES",
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Como perder um homem em 10 dias',
        name_en: '',
        year: 2003,
        time: '01:56',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Amizade colorida',
        name_en: '',
        year: 2011,
        time: '01:49',
        quest_0: 1,
        quest_1: "YES",
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'As panteras detonando',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: 1,
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'De repente é amor',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Sexo sem compromisso',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'A família da "no"iva',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Amor sem escalas',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Onze Homens e um Segredo',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Marley e eu',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: "YES",
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Sempre ao seu lado',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Uma linda mulher',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Malévola',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'O fragmentado',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Corpo fechado',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Esquadrão classe A',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'O lado bom da vida',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'O auto da compadecida',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Entrando numa fria',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Gigolô Por Acidente',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'O brilho eter"no" de uma mente sem lembrança',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'O Show de Truman',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'O paizão',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Náufrago',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Top Gun - Ases indomáveis',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Top gang',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'O Céu da Meia-"No"ite',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Lágrimas do Sol',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: 1,
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Corra que a Polícia Vem Aí',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'O Livro de Eli',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Amor com Data Marcada',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: '"No" Limite do Amanhã',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Dunkirk',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'E"no"la Holmes',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'A Barraca do Beijo 1',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'A Barraca do Beijo 2',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Space Jam: O Jogo do Século',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Os Incríveis 1',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Os Incríveis 2',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'O Grande Truque',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'Logan',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
      {
        name_pt: 'A ilha do medo',
        name_en: '',
        year: 2021,
        time: '02:30',
        quest_0: 1,
        quest_1: 1,
        quest_2: 1,
        quest_3: 1,
        quest_4: 1,
        quest_5: "YES",
        quest_6: 1,
        quest_7: 1,
        quest_8: 1,
        quest_9: 1,
      },
    ])
  
  return(
    <FilmsContext.Provider value={[films, setFilms]}>
      {props.children}
    </FilmsContext.Provider>
  )
}