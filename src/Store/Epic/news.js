import { Observable } from "rxjs";
import CounterAction from '../Action/Counter'
import {api} from '../../Services/api'

class News_Requests {

    get_news = (action$) =>
        action$.ofType(CounterAction.GETNEWS)
            .switchMap(({ payload }) => {
                return api.getNews(payload)
                .switchMap(({response}) => {
                    return Observable.of({
                        type: CounterAction.NEWS_SUCCESS,
                        payload: response
                    }
                    ).catch((error) => {
                        console.log(error);
                    })
                })
            })

    // decrement = (action$) =>
    //     action$.ofType(CounterAction.DECREMENT_ASYNC)
    //         .switchMap(({ payload }) => {
    //             return Observable.of({
    //                 type: CounterAction.DECREMENT,
    //                 payload: null
    //             });
    //         })
}
export let News_Request = new News_Requests();