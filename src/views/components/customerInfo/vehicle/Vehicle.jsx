import React from 'react';
import Base from '../../../core/Base';
import { translate } from 'react-i18next';
import { getPickUpFormById } from '../../../../actions/handlerBooking';
import { reactLocalStorage } from 'reactjs-localstorage';
import MyUtil from '../../../../actions/format';

class Vehicle extends Base {
    constructor(props) {
        super(props);
        this.state = {
            pickUpForm: getPickUpFormById(reactLocalStorage.get("booking.pick_up_form", "")),
            time: reactLocalStorage.get("booking.rental_date") + " - " + reactLocalStorage.get("booking.return_date"),
            vehicle: reactLocalStorage.getObject("booking.vehicle", null),
            price: {
                dayNum: reactLocalStorage.get("price.day_num", 0),
                defaultPrice: reactLocalStorage.get("price.default_price", 0),
                extraFee: reactLocalStorage.get("price.extra_fee", 0),
                sumPrice: reactLocalStorage.get("price.sum_price", 0),
                deliPrice: reactLocalStorage.get("price.deli_price", 0)
            }
        }
    }

    render() {
        const t = this.props.t;
        const { pickUpForm, time, vehicle, price } = this.state;
        console.log(price)
        const config = reactLocalStorage.getObject("config.vehicle_icon", []);
        return (
            <div className="col-lg-4 col-md-4">
                <div className="left-info step2">
                    <div className="shadow p-lg">
                        <div className="model">
                            <div >
                                <img src={vehicle.vhc.vhc_imgs[0].vhc_img_link}  />
                            </div>
                            <div className="tit3">{vehicle.vhc_part_name}</div>
                            {config.length > 0 ?
                                <div className="info">
                                    <div> <img src={config.find(c => c.vhc_conf_code === "vhc_fuel").vhc_conf_vn} className="vhc_icon" /><span>{vehicle.vhc.vhc_fuel_name}</span></div>
                                    {vehicle.vhc.vhc_egin_num ? <div> <img src={config.find(c => c.vhc_conf_code === "vhc_engine").vhc_conf_vn} className="vhc_icon" /><span>{vehicle.vhc.vhc_egin_num}</span></div> : null}
                                    {vehicle.vhc.vhc_tms_name ? <div> <img src={config.find(c => c.vhc_conf_code === "vhc_tms").vhc_conf_vn} className="vhc_icon" /><span>{vehicle.vhc.vhc_tms_name}</span></div> : null}
                                    {vehicle.vhc.vhc_seat_num ? <div> <img src={config.find(c => c.vhc_conf_code === "vhc_seat").vhc_conf_vn} className="vhc_icon" /><span>{vehicle.vhc.vhc_seat_num} chỗ</span></div> : null}
                                    {vehicle.vhc.vhc_dgn_name ? <div> <img src={config.find(c => c.vhc_conf_code === "vhc_design").vhc_conf_vn} className="vhc_icon" /><span>{vehicle.vhc.vhc_dgn_name}</span></div> : null}
                                    {vehicle.vhc.vhc_fuel_csum_num ? <div> <img src={config.find(c => c.vhc_conf_code === "vhc_fuel_consumption").vhc_conf_vn} className="vhc_icon" /><span>{vehicle.vhc.vhc_fuel_csum_num} lít</span></div> : null}
                                </div>
                                : null}
                        </div>
                        <form className="cap">
                            <div className="form-group  mb-none">
                                <label className=" pt-1">{t("preview_price.info_right.mode")}</label>
                                <p className="form-control-static pt-none">{pickUpForm}</p>
                            </div>
                            <div className="form-group mb-none">
                                <label className=" pt-2">{t("preview_price.info_right.time")} </label>
                                <p className="form-control-static pt-none">{time}</p>
                            </div>
                            <div className="form-group mb-none">
                                <label className="pt-1">{t("preview_price.info_right.limit_distance")}</label>
                                <p className="form-control-static pt-none">Tối đa {vehicle.part.part_lim_km}km/ngày, phụ trội {MyUtil.currencyFormat(vehicle.part.part_over_km_fee)} đ/km</p>
                            </div>
                            <div className="form-group mb-none">
                                <label className="pt-2">{t("preview_price.info_right.price_detail")}</label>
                                <p className="form-control-static p-none">{t("preview_price.info_right.price")} <span>{MyUtil.currencyFormat(vehicle.vhc_part_defa_prie)} đ</span></p>
                                <p className="form-control-static pt-none">{t("preview_price.info_right.day")} <span>{price.dayNum} ngày</span></p>
                                {price.extraFee > 0 || price.deliPrice > 0  ?
                                    <div className="price-detail">
                                        <p className="form-control-static pt-none">Giá cơ bản <span>{MyUtil.currencyFormat(price.defaultPrice)} đ </span></p>
                                        {price.extraFee > 0 ? <p className="form-control-static pt-none">Giá phụ trội <span>{MyUtil.currencyFormat(price.extraFee)} đ</span></p> : null}
                                        {price.deliPrice > 0 ?<p className="form-control-static pt-none">Giá giao xe <span>{MyUtil.currencyFormat(price.deliPrice)} đ</span></p> : null}
                                    </div> : null}
                            </div>
                            <div className="sum ">
                                <p className="pull-left text-left">{t("preview_price.info_right.total")}</p>
                                <p className="pull-right text-right"> {MyUtil.currencyFormat(price.sumPrice)} đ</p>
                            </div>

                        </form>

                    </div>
                </div>
            </div >
        );
    }
}

export default translate('common')(Vehicle);
