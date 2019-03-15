import Axios from "axios"
/**
 * fetch对象来访问
 * @constructor
 */
const BaseUrl = "http://localhost:8080"
const REQUESTMETHODS = {"fetch":"fetch","axios":"axios"};
class FetchApi {
    constructor() {
        this.install = null;
    }
    /**
     * 通过get方式来获取数据
     * @param url
     * @param cb
     */
    get(url,cb){
        console.log("fetch");
        fetch(`${BaseUrl}/${url}`).then(res=>{
            res.json().then(data=>{
                cb(data)
            })
        })
    }
    static getInstance(){
        //singlton
        return this.instance || (this.instance = new FetchApi())
    }
}
/**
 * 通过axios的模块来调用 api
 */
class AxiosApi {
    get(url,cb){
       console.log("axios");
       Axios.get(`${BaseUrl}/${url}`).then(res=>{
           cb(res.data)
       })
    }
}

class WebSocketApi {

}

function ApiFactory(name) {
   switch (name) {
       case REQUESTMETHODS.axios:
           return new AxiosApi();
           break;
       case REQUESTMETHODS.fetch:
           return FetchApi.getInstance();
           break;
       default:
           return new FetchApi();
           break;
   }
}

export default ApiFactory(REQUESTMETHODS.fetch)
