export default class DataRetriever {
    static get (url, callback) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', callback);
    oReq.responseType = 'json'
    oReq.open('GET', url);
    oReq.send();
    }
}
