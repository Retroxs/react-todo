import { observable,action,reaction } from "mobx";

class CommonStore {
    @observable appName = "react-app"

    @action setAppName(v){
        console.log("1111")
        this.appName = v
    }
}


export default new CommonStore()