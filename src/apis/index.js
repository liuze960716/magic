import Api from "./apiSelect";
export default {
    getPush(cb){
        Api.get("index",cb);
    }
}
