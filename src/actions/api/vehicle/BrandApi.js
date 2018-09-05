import MyService from "../../service";

const BandApi = {
    getBrandByType: async (typeName) => {
        var result = null;
        var typeId = 1;
        if (typeName === "motor") typeId = 2
        await MyService.getRequestData("/vehicles/brand/get-brand-vehicle-by-type", { vhc_type_id: typeId })
            .then(res => result = res.data)
            .catch(err => console.log(err));
        return result;
    }
}
export default BandApi

