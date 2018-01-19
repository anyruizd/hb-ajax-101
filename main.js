import { Button } from './components/Button.js'
import DataRetriever from './components/DataRetriever.js';

const URL = 'https://jsonplaceholder.typicode.com/posts/'

b = new Button (node, DataRetriever.get(URL, function () {
    console.log (this.ResponseText)
}))