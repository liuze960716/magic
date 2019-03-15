import {CARTSURL} from "../common/AjaxUrls"
import Api from "../common/Api"

export default  {
    /**
     * 获取信息
     * @param url
     * @param cb
     */
    getData(cb){
       Api.get(CARTSURL,cb)
    }
}
