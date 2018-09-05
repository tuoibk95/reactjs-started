import MyService from "../../service";

const TypeApi = {
    getAll: async () => {
        var result = null;
        await MyService.getRequestData("/vehicles/type")
        .then(result => result = result.data)
        .catch(err => console.log(err));
        console.log(result)
        return result;
    }
}
export default TypeApi

