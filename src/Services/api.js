import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

export class api {
    static getNews(source) {
        console.log(source)
        return Observable.ajax({
            url: "https://newsapi.org/v1/articles?source=" + source + "&apiKey=1aa85c6d4ceb4f91b13e487caf84eb4e",
            method: 'GET',
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
}