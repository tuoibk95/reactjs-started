import React from 'react';
import Base from '../../core/Base';
import { translate } from 'react-i18next';
import { wpt__FilterPrice, setScriptFormDateTime } from '../../../actions/handleScript';
import { reactLocalStorage } from 'reactjs-localstorage';
import BrandApi from '../../../actions/api/vehicle/BrandApi';
import CarIcon from './assets/images/ic-car.png';
import MotorIcon from './assets/images/ic-vespa.png';
import './assets/css/InfoPickCar.css';

var $ = window.$ = window.jQuery;

class InfoPickCar extends Base {
    constructor(props) {
        super(props);
        this.state = {
            type: reactLocalStorage.get("booking.type", "car"),
            location: reactLocalStorage.get("booking.location", ""),
            brands: [],
            icon: CarIcon,
            rentalDatetime: reactLocalStorage.get("booking.rental_date", ""),
            returnDatetime: reactLocalStorage.get("booking.return_date", ""),
            cities: reactLocalStorage.getObject("config.cities", [])
        }
    }

    componentDidMount = async () => {
        wpt__FilterPrice();
        setScriptFormDateTime("if_rentalDate");
        setScriptFormDateTime("if_returnDate");
        await BrandApi.getBrandByType(this.state.type)
        .then(brands => this.setState({ brands }))
        .catch(err => console.log(err))

    }

    handleSelectLocation = (e) => {
        this.setState({ location: e.target.value })
    }

    handleChooseType = async (e) => {
        var type = e.target.id;
        var brands = await BrandApi.getBrandByType(type);
        this.setState({
            type,
            brands,
            icon: type === "car" ? CarIcon : MotorIcon
        })
    }

    render() {
        const t = this.props.t;
        const { type, location, brands, icon, rentalDatetime, returnDatetime,  cities } = this.state;
        const selectStyle = {
            background: "url(" + icon + ") no-repeat 15px center"
        }

        return (
            <div className="col-lg-4 col-md-12">
                <div className="left-info">

                    <div className="shadow">
                        <div className="form-row button-radio">
                            <div className="col-xs-6 col-sm-6">
                                <div className="radio-custom radio-inline mt-none text-center">
                                    <input type="radio" id="car" name="booking" checked={type === "car"} onChange={this.handleChooseType.bind(this)} />
                                    <label htmlFor="car">
                                        <div className="car">{t("select_carriage.left.car")}</div>
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6">
                                <div className="radio-custom radio-inline mt-none text-center">
                                    <input type="radio" id="motor" name="booking" checked={type === "motor"} onChange={this.handleChooseType.bind(this)} />
                                    <label htmlFor="motor">
                                        <div className="motor">{t("select_carriage.left.motor")}</div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-12">
                                <div className="input-form select-box xe" id="select_box_xe" style={selectStyle}>
                                    <select name="cruise-line">
                                        {brands && brands.map(br =>
                                            <option value={br.vhc_bran_name} key={br.vhc_bran_id}>{br.vhc_bran_name}</option>
                                        )}
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="shadow">
                        <div className="form-row">
                            <div className="col-lg-12">
                                <div className="input-form select-box location">
                                    <select name="cruise-line" onChange={this.handleSelectLocation.bind(this)} value={location}>
                                        {cities && cities.map(city => (
                                            <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="shadow">
                        <div className="ngaylay">
                            <div className="controls input-append date form_datetime" data-date="1979-09-16T05:25:07Z"
                                data-date-format="dd/mm/yyyy  hh:ii" data-link-field="dtp_input2" id="if_rentalDate"
                                data-link-format="yyyy-mm-dd hh-ii" style={styles.controlInput}>
                                <input size="16" type="text" value={rentalDatetime}
                                    placeholder={t('background_area.quick_book.input.date_pick')}
                                    readOnly={true} ref={dt => this.rentalDatetime = dt} style={styles.input} />
                                <span className="add-on"><i className="icon-remove"></i></span>
                                <span className="add-on"><i className="icon-th"></i></span>
                            </div>
                        </div>
                        <div className="ngaytra">
                            <div className="controls input-append date form_datetime" data-date="1979-09-16T05:25:07Z"
                                data-date-format="dd/mm/yyyy  hh:ii" data-link-field="dtp_input2" id="if_returnDate"
                                data-link-format="yyyy-mm-dd hh-ii" style={styles.controlInput}>
                                <input size="16" type="text" value={returnDatetime}
                                    placeholder={t('background_area.quick_book.input.date_drop')}
                                    readOnly={true} ref={dt => this.returnDatetime = dt} style={styles.input} />
                                <span className="add-on"><i className="icon-remove"></i></span>
                                <span className="add-on"><i className="icon-th"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="shadow p-md pr-xlg">
                        <div className="tit2">{t("select_carriage.left.price_range")}</div>
                        <div className="widget-sidebar widget-price">
                            <div className="widget-content">
                                <form action="#" method="get" acceptCharset="utf-8">
                                    <div className="price search-filter-input">
                                        <div id="slider-range-2" className="price-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                            <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                            <span tabIndex="0"
                                                className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                            <span tabIndex="0"
                                                className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                        </div>
                                        <p className="amount">
                                            <input type="text" id="amount" disabled="" />
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }


}

const styles = {
    input: {
        height: "52px",
        border: "none",
        padding: 0
    },
    controlInput: {
        position: 'absolute',
        zIndex: 5,
        width: 315,
        height: 52
    }
}

export default translate('common')(InfoPickCar);