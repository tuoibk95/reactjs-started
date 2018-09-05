import MyService from "../../service";
import { reactLocalStorage } from "reactjs-localstorage";

const UserApi = {
    login: async (data) => {
        var result = null;
        result = await MyService.postRequestData("/users/login", data)
        if (result.data) {
            reactLocalStorage.set("user.token", result.data.id);
        }
        return result
    },
    register: async (data) => {
        var result = null;
        result = await MyService.postRequestData("/users", data);
        if (result.data) {
            // reactLocalStorage.setObject("user.info", result);
        }
        return result
    },
    getUserById : async (user) => {
        var result = null;
        result = await MyService.getRequestData("/users/" + user.userId)
        if (result.data) {
    
            var languageUser = reactLocalStorage.get("user.language");
            languageUser = (languageUser=== undefined || languageUser =="vi") ? "vi":"en";
    
            reactLocalStorage.set("language", languageUser);
            reactLocalStorage.setObject("user.info", result.data);
        }
        return result
    },
    logout: async () => {
        var result = null;
        result = await MyService.postRequestData("/users/logout");
    
        if (!result.message ) {
    
            reactLocalStorage.set("user.token", "")
            reactLocalStorage.setObject("user.info", null)
            
            return true
        } 
        return false
    }
}

export default UserApi;