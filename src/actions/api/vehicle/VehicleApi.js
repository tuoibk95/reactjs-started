import MyService from "../../service";
import { reactLocalStorage } from "reactjs-localstorage";
import db_vehicles from "./vehicles.json";
import db_vehicle from "./vehicle.json";

const VehicleApi = {
    getVehicles: async (options) => {
        var request = {
            vhc_type_id: reactLocalStorage.get("booking.vehicle.type"),
            vhc_bran_id: reactLocalStorage.get("booking.vehicle.brand"),
            rental_date: reactLocalStorage.get("booking.rental_date"),
            return_date: reactLocalStorage.get("booking.return_date"),
            city_id: reactLocalStorage.get("booking.location"),
            price_from: options ? options.price_from : 300000,
            price_to: options ? options.price_to : 1500000 
        };
        // return await MyService.getRequestData("/vehicles", req);
        return db_vehicles;
    },
    getVehicleByName:  async(name) => {
        // return await MyService.getRequestData("/vehicles/:" + name );
        return db_vehicle;
    }
}

export default VehicleApi;