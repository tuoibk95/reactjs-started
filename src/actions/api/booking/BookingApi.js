import { reactLocalStorage } from "reactjs-localstorage";
import MyService from "../../service";
import db_booking from "./booking.json"

const BookingApi = {
    createBooking: async (options) => {
        //     + book_id
        //     + book_code
        //     + use_acc_id
        //     + cstm_name
        //     + cstm_phon
        //     + cstm_emai
        //     + cstm_deli_addr
        //     + cstm_pay_meth_id
        //     + vhc_part_id
        //     + vhc_part_name
        //     + part_id
        //     + part_name
        //     + city_id
        //     + city_name
        //     + vhc_type_id
        //     + vhc_type_name
        //     + book_rent_date
        //     + book_retun_date
        //     + book_day_num
        //     + book_exta_hour_num
        //     + book_wday_num
        //     + book_holi_num
        //     + book_deli_form_id
        //     + promo_code
        //     + promo_val
        //     + book_stt_id
        //     + book_prie_tota
        //     + book_crta
        //     + book_upda
        //     + book_del


        var customer = {
            use_acc_id: reactLocalStorage.get("user.user_id"),
            cstm_name: reactLocalStorage.get("customer_info.fullname", ""),
            cstm_emai: reactLocalStorage.get("customer_info.email", ""),
            cstm_phon: reactLocalStorage.get("customer_info.phone", ""),
            cstm_pay_meth_id: reactLocalStorage.get("customer_info.payment")
        };
        var booking = {
            vhc_type_id: reactLocalStorage.get("booking.type"),
            city_id: reactLocalStorage.get("booking.location"),
            rental_date: reactLocalStorage.get("booking.rental_date"),
            return_date: reactLocalStorage.get("booking.return_date"),
            pick_up_form: reactLocalStorage.get("booking.pick_up_form"),
            deli_address: reactLocalStorage.get("booking.deli_address"),
            promotion_code: reactLocalStorage.get("booking.promotion_code"),
            vehicle: reactLocalStorage.getObject("booking.vehicle")
        }
        var price = {
            day_num: reactLocalStorage.get("price.day_num", 0),
            default_price: reactLocalStorage.get("price.default_price", 0),
            extra_fee: reactLocalStorage.get("price.extra_fee", 0),
            sum_price: reactLocalStorage.get("price.sum_price", 0),
            deli_price: reactLocalStorage.get("price.deli_price", 0),
            extra_hour_num: reactLocalStorage.get("price.extra_hour_num", 0),
            holi_num: reactLocalStorage.get("price.holi_num", 0),
            wday_num: reactLocalStorage.get("price.wday_num", 0)
        }
        console.log({customer, booking, price});
        var booking = null;
        // await MyService.postRequestData("/booking", {customer, booking, price})
        // .then(result => {
        //     console.log(result);
        //     booking = result;
        // })
        // .catch(err => console.log(err));
        return booking

    },
    getDeliPrice: async (options) => {
        // options = {
        //     deli_address: "",
        //     vehicle: {}
        // }
        var deliPrice = null;
        await MyService.getRequestData("/booking/deli-price", options)
            .then(result => {
                console.log(result);
                deliPrice = result.data
            })
            .catch(err => console.log(err))
        return deliPrice

    },
    getPromotion: async (options) => {
        // options = {
        //     promotionCode: ""
        // }
        var promotion = null;
        await MyService.getRequestData("/booking/promotion", options)
            .then(result => {
                console.log(result);
                promotion = result.data
            })
            .catch(err => console.log(err))
        return promotion
    },
    calculatePriceBooking: async(options) => {
        options = {
            vehicle: reactLocalStorage.getObject("booking.vehicle"),
            deli_address: reactLocalStorage.get("booking.deli_address"),
            promotion_code: reactLocalStorage.get("booking.promotion_code"),
            rental_date: reactLocalStorage.get("booking.rental_date"),
            return_date: reactLocalStorage.get("booking.return_date")
        }
    },
    getBookingByCode: async(code) => {
        var booking = null;
        await MyService.getRequestData("/booking/" + code)
        .then(result => {
            console.log(result);
            booking = result.data
        })
        .catch(err => console.log(err))
        return db_booking
    }
}
export default BookingApi;