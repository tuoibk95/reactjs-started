import { i18next } from "./i18n";

const BASE_URL = "http://localhost:8080";

const LOGIN_URL = "";

const USER_URL = "/users";

const ERROR = {
    AUTHORIZATION_REQUIRED: "Email hoặc mật khẩu không đúng",
    LOGIN_FAILED: "Email hoặc mật khẩu không đúng",
    422: "Email đã tồn tại"
}
const LOCATION = [
    {id: "hn", name: i18next.t("common:background_area.quick_book.province.hn")}, 
    {id: "hcm", name: i18next.t("common:background_area.quick_book.province.hcm")},
    {id: "hue", name: i18next.t("common:select_carriage.left.hue")},
]

const VEHICAL_PICK_UP_FORM = [
    {id: "home", name: i18next.t("common:preview_price.info_right.at_home")},
    {id: "dealer", name: i18next.t("common:preview_price.info_right.at_dealer")}
]

const PAYMENT_METHOD = [
    {id: "0", name: "Trả sau"},
    {id: "1", name: "ATM nội địa"},
    {id: "2", name: "Thẻ thanh toán quốc tế"}
]
export {BASE_URL, LOGIN_URL, USER_URL, ERROR, LOCATION, VEHICAL_PICK_UP_FORM, PAYMENT_METHOD}