import { Observable } from 'rxjs';
import NewsAction from '../Action/Actions';
import { api } from '../../Services/api';

class News_Requests {

    get_news = (action$) =>
        action$.ofType(NewsAction.GETNEWS)
            .switchMap(({ payload }) => {
                return api.getNews(payload)
                .switchMap(({ response }) => {
                    return Observable.of({
                        type: NewsAction.NEWS_SUCCESS,
                        payload: response
                    }
                    ).takeUntil((action$.ofType(NewsAction.CANCELLED)))
                    .catch((error) => {
                        console.log(error);
                    });
                });
            })

    get_news_by_catagories = (action$) => 
         action$.ofType(NewsAction.GETNEWS_FROM_SOURCE)
            .switchMap(({ payload }) => {
                return api.getNewsByCatagories(payload)
                .switchMap(({ response }) => {
                    return Observable.of({
                        type: NewsAction.GET_NEWS_BY_CATAGORIES,
                        payload: response
                    }
                    ).catch((error) => {
                        console.log(error);
                    });
                });
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