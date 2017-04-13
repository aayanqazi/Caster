export default class CounterAction {

    static INCREMENT = "INCREMENT";
    static DECREMENT = "DECREMENT";
    static GETNEWS = "GET_NEWS";
    static NEWS_SUCCESS = "NEWS_SUCCESS"

    static increment(){
        return { 
            type: 'INCREMENT'
        }
    }

    static decrement(){
        return { 
            type: 'DECREMENT' 
        }
    }

    // static req_Success(news){
    //     return { 
    //         type: CounterAction.NEWS_SUCCESS,
    //         payload: news
    //     }
    // }

    static getNews(data){
        return { 
            type: CounterAction.GETNEWS,
            payload:data
        }
    }

}