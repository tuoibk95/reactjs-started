import { reactLocalStorage } from "reactjs-localstorage";
import { VEHICAL_PICK_UP_FORM } from "./constants";
import MyUtil from "./format";

const save = (state) => {
    console.log("state booking: ", state)
    reactLocalStorage.set("booking.type", state.type);
    reactLocalStorage.set("booking.location", state.location);
    reactLocalStorage.set("booking.rental_date", state.rentalDate);
    reactLocalStorage.set("booking.return_date", state.returnDate);
}

const getPickUpFormById = (id) => {
    var result = "";
    VEHICAL_PICK_UP_FORM.map(p => {
        if (p.id === id) result = p.name;
    })
    return result;
}

const getDayNum = () => {
    var rentalDate = reactLocalStorage.get("booking.rental_date");
    var returnDate = reactLocalStorage.get("booking.return_date");

    rentalDate = MyUtil.getDateFormatEn(new Date(rentalDate));
    returnDate = MyUtil.getDateFormatEn(new Date(returnDate))

    console.log(rentalDate + ' - ' + returnDate)

    var rld = rentalDate ? new Date(rentalDate).getTime() : 0;
    var rnd = returnDate ? new Date(returnDate).getTime() : 0;
    var dayNum = (rnd - rld) / (24 * 1000 * 3600) + 1;
    return dayNum ? dayNum : 0
}

const getDays = () => {
    var rentalDate = reactLocalStorage.get("booking.rental_date");
    var returnDate = reactLocalStorage.get("booking.return_date");
    var daysOfYear = [];
    if (rentalDate && returnDate) {
        var rld = new Date(rentalDate)
        var rnd = new Date(returnDate)
        var daysOfYear = [];
        for (var d = rld; d <= rnd; d.setDate(d.getDate() + 1)) {
            daysOfYear.push(new Date(d));
        }
    }
    return daysOfYear

}

const getWdays = (partWday) => {
    var arr_days = getDays();
    var wdays = [];
    if (arr_days.length > 0 && partWday.length > 0) {
        arr_days.map(d => {
            partWday.map( pw => {
                if (d.getDay() === pw.wday.wday_indx) wdays.push(d);
            })
        })
    }
    return wdays;
}

const getHolis = (partHoli) => {
    var arr_days = getDays();
    var holis = [];

    if (arr_days.length > 0 && partHoli.length > 0) {
        arr_days.map(d => {
            var date = d.getDate();
            var month = d.getMonth();
            partHoli.map(ph => {
                var holiFrom = ph.holi.holi_day_from;
                var holiTo = ph.holi.holi_day_to;
                if (holiFrom && holiTo) {
                    var dateFrom = new Date(holiFrom);
                    var dateTo = new Date(holiTo);
                    for (var day = dateFrom; day <= dateTo; day.setDate(day.getDate() + 1)) {
                        if ((day.getDate() === date) && (day.getMonth() === month)) holis.push(d);
                    }
                }

            })
        })
    }
    return holis
}

const getDayNumHoliIsWday = (wdays, holis) => { // so ngay holi la ngay cuoi tuan

    var dayNum = 0;
    if (wdays.length > 0 && holis.length > 0){
        holis.map( h => {
            wdays.map(w => {
                if (w.getTime() === h.getTime()) dayNum ++;
            })
        })
    }
    return dayNum;
}

const getWdayExtraFee = (vehicle) => {
    if (!vehicle) return 0;
    var fee =  vehicle.part.part_wdays[0].part_wday_exta_fee;
    var price = 0;
    if (isPercent(fee)) {
        price = vehicle.vhc_part_defa_prie * fee / 100;
    } else  {
        price = fee;
    }
    return price
}


const getHoliExtraFee = (vehicle) => {
    if (!vehicle) return 0;
    var fee = vehicle.part.part_holis[0].part_holi_exta_fee;
    var price = 0;
    if (isPercent(fee)){
        price += vehicle.vhc_part_defa_prie * fee / 100
    } else price += fee
    return price
}

const getPrice = (vehicle, dayNum) =>{
    var wdays = getWdays(vehicle.part.part_wdays);
    var holis = getHolis(vehicle.part.part_holis);
    var holiIsWday = getDayNumHoliIsWday(wdays, holis);

    var wdayNum = wdays.length - holiIsWday;
    var holiNum = holis.length;
    var defaultPrice = dayNum * vehicle.vhc_part_defa_prie;
    var wdayExtraFee = getWdayExtraFee(vehicle);
    var holiExtraFee = getHoliExtraFee(vehicle);
    var extraFee = wdayExtraFee * wdayNum + holiExtraFee * holiNum; 
    var sumPrice = defaultPrice + extraFee;
    return {sumPrice, extraFee, defaultPrice}
}

const isPercent = (num) =>{
    if ( num > -100 && num < 100) return true;
    else return false
}

export { save, getPickUpFormById, getDayNum, getDays, getWdays, getHolis, getDayNumHoliIsWday, getHoliExtraFee, getWdayExtraFee, getPrice }