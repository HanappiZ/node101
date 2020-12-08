const fs = require('fs')
const moment = require('moment')
const todo = {
    text: 'Go shopping',
    date: moment('19.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
    id: 1,
    done: false
  }
const todoList = [{
    text: 'Go shopping',
    date: moment('19.12.2020, 16:10', 'DD.MM.YYYY, hh:mm'),
    id: 1,
    done: false
  },
  {
    text: 'start cooking',
    date: moment('19.12.2020, 18:25', 'DD.MM.YYYY, hh:mm'),
    id: 2,
    done: false
  },
  {
    text: 'Dinner is ready',
  date: moment('19.12.2020, 19:00', 'DD.MM.YYYY, hh:mm'),
  id: 3,
  done: false
},
  

]
const json = JSON.stringify(todoList)
fs.writeFileSync('todo.json', json)