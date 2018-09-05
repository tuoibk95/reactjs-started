import MyService from "../../service";
import db_config from "./config.json";

const ConfigApi = {
    getConfig: async () => {
        var result = null;
        // await MyService.getRequestData("/vehicles/config")
        //     .then(data => result = data)
        //     .catch(err => console.log(err));
        return db_config
    }
}

export default ConfigApi;