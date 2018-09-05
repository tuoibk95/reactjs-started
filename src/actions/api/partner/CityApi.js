import MyService from "../../service";

const CityApi = {
    getAll: async () => {
        var cities = null;
        await MyService.getRequestData("/partners/cities")
            .then(result => cities = result.data)
            .catch(err => console.log(err));

        console.log(cities)
        return cities 
    }
}

export default CityApi;