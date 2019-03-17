import Axios from "axios";
const BaseUrl = "http://localhost:3000/";
const METHODS ={
    "fetch":"fetch",
    "axios":"axios"
}
/**
 * 通过fetch对象来访问
 * @constructor
 */
class FetchApi {

    /**
     *通过get方式来获取数据
     * @param url
     * @param cb
     */
    get(url,cb){
        console.log("fetch");
        fetch(`${BaseUrl}${url}`).then(res=>{
            res.json().then(data=>{
                cb(data);
            })
        })
    }

}


/**
 * 通过Axios对象来访问
 */

class AxiosApi {

    get(url,cb){
        console.log("axios");
        Axios.get(`${BaseUrl}${url}`).then(res=>{
            cb(res.data);
        })
    }
}



//工厂模式：
function ApiFactory(name){
    switch (name) {
        case METHODS.axios:
            return new AxiosApi
            break;
        case METHODS.fetch:
            return new FetchApi
            break;
        default:
            return new FetchApi
            break;
    }
}

export default  ApiFactory(METHODS.axios);
