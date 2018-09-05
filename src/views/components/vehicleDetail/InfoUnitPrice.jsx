import React from 'react';
import Base from '../../core/Base';
import { Redirect, Link } from 'react-router-dom'
import { translate } from 'react-i18next';
import { VEHICAL_PICK_UP_FORM } from '../../../actions/constants';
import { reactLocalStorage } from 'reactjs-localstorage';
import { i18next } from '../../../actions/i18n';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select';
import ButtonCustome from 'react-validation/build/button';
import { FormGroup } from 'reactstrap';
import { required, address } from '../../../actions/validate';
import MyUtil from '../../../actions/format';
import { getDayNum, getPrice } from '../../../actions/handlerBooking';
import { CustomInput } from '../../templates/autoComplete/CustomInput';

var $ = window.$ = window.jQuery;

class InfoUnitPrice extends Base {
    constructor(props) {
        super(props);
        this.state = ({
            isNext: false,
            pickUpForm: reactLocalStorage.get("booking.pick_up_form", ""),
            isDisplayAddr: reactLocalStorage.get("booking.pick_up_form") === "home",
            deliAddress: reactLocalStorage.get("booking.deli_address", ""),
            promotionCode: reactLocalStorage.get("booking.promotion_code", ""),
            error: "",
            dayNum: getDayNum(),
            rentalDate: reactLocalStorage.get("booking.rental_date"),
            returnDate: reactLocalStorage.get("booking.return_date"),
            sumPrice: 0,
            defaultPrice: 0,
            extraFee: 0,
            deliPrice: 0,
            promoPrice: 0,
            isLoadding: false
        });
    }

    componentDidMount() {
        var dayNum = getDayNum();
        var vehicle = this.props.vehicle;
        var { defaultPrice, extraFee, sumPrice } = getPrice(vehicle, dayNum);
        // reactLocalStorage.set("price.day_num", dayNum);
        // reactLocalStorage.set("price.default_price", defaultPrice);
        // reactLocalStorage.set("price.extra_fee", extraFee);
        // reactLocalStorage.set("price.sum_price", sumPrice);
        this.setState({ dayNum, defaultPrice, extraFee, sumPrice })
    }

    handleDatetime = (e) => {
        var rentalDate = reactLocalStorage.get("booking.rental_date")
        var returnDate = reactLocalStorage.get("booking.return_date")
        var options = {
            startDate: rentalDate ? new Date(rentalDate) : new Date(),
            endDate: returnDate ? new Date(returnDate) : new Date(),
            minDate: new Date(),
            maxDate: "",
            autoApply: true,
            timePicker: true,
            locale: {
                separator: ' ~ ',
                format: 'DD/MM/YYYY  HH:mm'
            },
            linkedCalendars: true,
            autoUpdateInput: true,
            opens: "right",
            timePickerIncrement: 5,
        }

        console.log(options)
        $('#date-time-all').daterangepicker(options, (start, end, label) => {
            console.log(start.format('DD/MM/YYYY  HH:mm') + ' - ' + end.format('DD/MM/YYYY  HH:mm'))
            reactLocalStorage.set("booking.rental_date", start.format('DD/MM/YYYY  HH:mm'))
            reactLocalStorage.set("booking.return_date", end.format('DD/MM/YYYY  HH:mm'))
            var dayNum = getDayNum();
            var vehicle = this.props.vehicle;
            var { defaultPrice, extraFee, sumPrice } = getPrice(vehicle, dayNum);
            this.setState({ dayNum, defaultPrice, extraFee, sumPrice })
        }).click();
    }

    moveToCustomerInfo = () => {
        var check = this.check();
        if (check) {
            this.save();
            this.setState({
                isNext: true,
                dayNum: 0
            })
        }
    }

    handlePickUpForm = (e) => {
        var pickUpForm = e.target.value;
        console.log(pickUpForm)
        var isDisplayAddr = false;
        if (pickUpForm === "home") isDisplayAddr = true;
        this.setState({ pickUpForm: e.target.value, isDisplayAddr })

    }

    handleChangeAddress = (address) => {
        this.setState({ deliAddress: address })
    }

    handlePromotionCode = (e) => {
        this.setState({ promotionCode: e.target.value })
    }

    check = () => {
        var { pickUpForm, promotionCode, error } = this.state;
        if (!pickUpForm) {
            error = i18next.t("common:validate.quickbook");
            this.setState({ error })
            return false
        } else return true
    }

    save = () => {
        var { pickUpForm, promotionCode, deliAddress, rentalDate, returnDate, dayNum, defaultPrice, extraFee, sumPrice, deliPrice, promoPrice } = this.state;
        reactLocalStorage.set("booking.pick_up_form", pickUpForm);
        reactLocalStorage.set("booking.promotion_code", promotionCode);
        reactLocalStorage.set("booking.deli_address", deliAddress);
        reactLocalStorage.set("booking.rental_date", rentalDate);
        reactLocalStorage.set("booking.returnDate", returnDate);
        reactLocalStorage.set("price.day_num", dayNum);
        reactLocalStorage.set("price.default_price", defaultPrice);
        reactLocalStorage.set("price.extra_fee", extraFee);
        reactLocalStorage.set("price.sum_price", sumPrice);
        reactLocalStorage.set("price.deli_price", deliPrice);
        reactLocalStorage.set("price.promo_price", promoPrice);
    }


    render() {
        const { t, vehicle } = this.props;
        const { pickUpForm, isNext, promotionCode, dayNum, rentalDate, returnDate, defaultPrice, extraFee, sumPrice, deliPrice, isDisplayAddr, deliAddress, isLoadding } = this.state;

        var datetimeDefault = rentalDate && returnDate ? rentalDate + " - " + returnDate : ""

        if (isNext) {
            return <Redirect push to='/thong-tin-khach-hang' />
        }
        return (
            <div className="col-lg-4 col-md-4">
                <div className="right-info ">
                    <div className="shadow mb-xlg p-lg">
                        <div className="pr text-center">GIÁ VÀ THỦ TỤC</div>
                        <Form className="cap">
                            <FormGroup className="form-group">
                                <label className=" text-sm-right pt-2">{t("preview_price.info_right.mode")}</label>
                                <div className="input-form select-box ">
                                    <Select name="cruise-line" onChange={this.handlePickUpForm} value={pickUpForm} validations={[required]}>
                                        <option value="">{t("preview_price.info_right.placeholder")}</option>
                                        {VEHICAL_PICK_UP_FORM.map(a => (
                                            <option key={a.id} value={a.id}>{a.name}</option>
                                        ))}
                                    </Select>
                                </div>
                            </FormGroup>
                            {isDisplayAddr ?
                                <FormGroup className="form-group" >
                                    <label className=" text-sm-right pt-2">{t("customer_info.form.address.label")} </label>
                                    <div >
                                        <CustomInput
                                            onChange={this.handleChangeAddress}
                                            validations={[required, address]}
                                            value={deliAddress}
                                            name="address"
                                            handleChange={this.handleChangeAddress}
                                        />
                                    </div>
                                    
                                {isLoadding ? <label></label> : null}
                                </FormGroup> : null}
                            <FormGroup className="form-group">
                                <label className=" pt-2">{t("preview_price.info_right.time")}</label>
                                <Input type="text" id="date-time-all" className="form-control"
                                    placeholder="Nhập thời gian nhận - trả xe"
                                    // onChange={this.handleDatetime}
                                    value={datetimeDefault}
                                    onFocus={this.handleDatetime}
                                />
                            </FormGroup>
                            <FormGroup className="form-group ">
                                <label className="pt-2">{t("preview_price.info_right.promotion_code")} </label>
                                <Input type="text" name="code" className="form-control"
                                    placeholder={t("preview_price.info_right.placeholder_promotion")}
                                    onChange={this.handlePromotionCode}
                                    value={promotionCode}
                                />
                            </FormGroup>

                            <FormGroup className="form-group ">
                                <label className="pt-1">{t("preview_price.info_right.limit_distance")}</label>
                                <p className="form-control-static pt-none">Tối đa {vehicle.part.part_lim_km}km/ngày, phụ trội {MyUtil.currencyFormat(vehicle.part.part_over_km_fee)} đ/km</p>
                            </FormGroup>
                            <FormGroup className="form-group mb-none">
                                <label className="pt-2">{t("preview_price.info_right.price_detail")}</label>
                                <p className="form-control-static p-none">{t("preview_price.info_right.price")} <span>{MyUtil.currencyFormat(vehicle.vhc_part_defa_prie)} đ</span></p>
                                <p className="form-control-static pt-none">{t("preview_price.info_right.day")} <span>{dayNum} ngày</span></p>
                                {extraFee > 0 || deliPrice > 0 ?
                                    <div className="price-detail">
                                        <p className="form-control-static pt-none">Giá cơ bản <span>{MyUtil.currencyFormat(defaultPrice)} đ </span></p>
                                        {extraFee > 0 ?<p className="form-control-static pt-none">Giá phụ trội <span>{MyUtil.currencyFormat(extraFee)} đ</span></p> : null}
                                        {deliPrice > 0 ?<p className="form-control-static pt-none">Giá giao xe <span>{MyUtil.currencyFormat(deliPrice)} đ</span></p> : null}
                                    </div> : null}
                            </FormGroup>
                            <div className="sum ">
                                <p className="pull-left text-left">{t("preview_price.info_right.total")}</p>
                                <p className="pull-right text-right"> {MyUtil.currencyFormat(sumPrice)} đ</p>
                            </div>
                            <ButtonCustome className="btn btn-block mt-md" onClick={this.moveToCustomerInfo}>
                                {t("preview_price.info_right.btn_continue")}
                            </ButtonCustome>
                            <p className="text-center mt-lg"><Link to="/tim-xe" className="link">{t("preview_price.info_right.btn_back")}</Link></p>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('common')(InfoUnitPrice)