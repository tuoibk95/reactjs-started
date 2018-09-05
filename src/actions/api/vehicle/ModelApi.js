import MyService from "../../service";

const ModelApi = {
    getModelByBrand: async (brand) => {
        var result = null;
        // await MyService.getRequestData("vehicles/models", {brand}).then(data => result = data).catch(err => console.log(err));
        if (brand === "car") {
            result = ["Volvo", "Mitsubishi", "Mahindra", "Mercedes"]
        } else if (brand === "motor"){
            result = ["Xe số", "Xe tay ga", "Xe tay côn"]
        }
        return result;
    }
}
export default ModelApi

