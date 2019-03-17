import {CARTSURL} from "../common/AjaxUrls"
import Api from "../common/Api"

export default  {
    getData(cb){
       Api.get(CARTSURL,cb)
    }
}
