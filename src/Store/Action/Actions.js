export default class NewsAction {

    static GETNEWS = "GET_NEWS";
    static NEWS_SUCCESS = "NEWS_SUCCESS"
    static GET_NEWS_BY_CATAGORIES = "GET_NEWS_BY_CATAGORIES"
    static GETNEWS_FROM_SOURCE = "GETNEWS_FROM_SOURCE"
    static CANCELLED = "CANCELLED"


    static getNews(data){
        return { 
            type: NewsAction.GETNEWS,
            payload:data
        }
    }

    static cancelledRequest()
    {
        return {
            type: NewsAction.CANCELLED
        }
    }

    static getNewsFromSource(data){
        return { 
            type: NewsAction.GETNEWS_FROM_SOURCE,
            payload:data
        }
    }

}