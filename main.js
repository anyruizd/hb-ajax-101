import { Button } from './components/Button.js'
import DataRetriever from './components/DataRetriever.js';

const URL = 'https://jsonplaceholder.typicode.com/posts/'

const b = new Button (document.querySelector('.btn'), DataRetriever.get(URL, function () {
    console.log ('DataRetriever!')
}))