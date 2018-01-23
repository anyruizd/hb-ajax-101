import { Button } from './components/Button.js'
import DataRetriever from './components/DataRetriever.js';
import CardsController from './components/CardsController.js'

const URL = 'https://jsonplaceholder.typicode.com/posts/'
const cardsController = new CardsController(document.querySelector('.card-controller'))
const b = new Button (document.querySelector('.btn'), () => {
    DataRetriever.get(URL, (data) => {
        cardsController.build(data)
    })
})