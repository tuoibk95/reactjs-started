import React from 'react';
import Base from '../../core/Base';
import { translate } from 'react-i18next';
import { Redirect, Link } from 'react-router-dom'
import { reactLocalStorage } from 'reactjs-localstorage';
import { save } from '../../../actions/handlerBooking';
import { i18next } from '../../../actions/i18n';
import { LOCATION } from '../../../actions/constants';
import { setScriptFormDateTime } from '../../../actions/handleScript';
//Load Jquery from public
var navbar;
var sticky;

class BookingFix extends Base {

    constructor(props) {
        super(props);
        this.state = {
            type: reactLocalStorage.get("booking.type", "car"),
            location: reactLocalStorage.get("booking.location", ""),
            rentalDatetime: reactLocalStorage.get("booking.rental_date", ""),
            returnDatetime: reactLocalStorage.get("booking.return_date", ""),
            isRedirect: false,
            error: "",
            cities: reactLocalStorage.getObject("config.cities", [])
        }
        console.log(this.state)
    }
    
    componentDidMount = () => {
        window.onscroll = () => {
            this.handleScroll()
        };

        navbar = document.getElementById("booking-fix");
        sticky = navbar.offsetTop;
        setScriptFormDateTime("bf_rentalDate");
        setScriptFormDateTime("bf_returnDate");
    }

    handleScroll() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

    handleChooseType = (e) => {
        var type = e.target.id;
        type = type.substr(0, type.length - 1)
        this.setState({ type })
    }

    handleSelectLocation = (e) => {
        this.setState({ location: e.target.value })
    }

    handleClick = () => {
        var { rentalDatetime, returnDatetime, type, location } = this.state
        rentalDatetime = this.rentalDatetime.value;
        returnDatetime = this.returnDatetime.value;
        var check = this.check({ rentalDatetime,  returnDatetime,  type, location });
        if (check) {
            save({ rentalDatetime,  returnDatetime,  type, location })
            this.setState({rentalDatetime, returnDatetime, type, location, isRedirect: true })
        } else alert("Ban chua nhap du thong tin")
    }

    check = (state) => {
        if (!(state && state.type && state.location && state.rentalDatetime  && state.returnDatetime)) {
            this.setState({ error: i18next.t("common:validate.quick_book") })
            return false
        } else {
            this.setState({ error: "" })
            return true
        }
    }


    render() {
        const t = this.props.t
        const { type, location, rentalDatetime, returnDatetime,  isRedirect, error, cities } = this.state;

        if (isRedirect) return <Redirect push  to="/tim-xe" />
        return (
            <div id="booking-fix">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="logo" className="logo">
                                <Link to="/" title="Chung xe">
                                    <img src="assets/images/logo.png" alt="" />
                                </Link>
                            </div>
                            <div className="navigation">
                                <div className="input-info-search">
                                    <form>
                                        <div className="button-radio">
                                            <div className="radio-custom radio-inline text-center">
                                                <input type="radio" id="car2" name="booking" checked={type === "car"} onChange={this.handleChooseType.bind(this)} />
                                                <label htmlFor="car2">
                                                    <div className="car">{t('background_area.quick_book.type.car')}</div>
                                                </label>
                                            </div>
                                            <div className="radio-custom radio-inline text-center">
                                                <input type="radio" id="motor2" name="booking" checked={type === "motor"} onChange={this.handleChooseType.bind(this)} />
                                                <label htmlFor="motor2">
                                                    <div className="motor">{t('background_area.quick_book.type.motor')}</div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="input-form select-box location">
                                            <select name="cruise-line" onChange={this.handleSelectLocation.bind(this)} value={location}>
                                                <option value="">{t('background_area.quick_book.province.title')}</option>
                                                {cities && cities.length > 0  &&cities.map(city => (
                                                    <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="box-date ">
                                            <div className="controls input-append date form_datetime" id="bf_rentalDate" data-date="1979-09-16T05:25:07Z" 
                                            data-date-format="dd/mm/yyyy  hh:ii" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd hh-ii">
                                                <input size="16" type="text" value={rentalDatetime} 
                                                    placeholder={t('background_area.quick_book.input.date_pick')}
                                                    readOnly={true} ref={dt => this.rentalDatetime = dt}/>
                                                <span className="add-on"><i className="icon-remove"></i></span>
                                                <span className="add-on"><i className="icon-th"></i></span>
                                            </div>
                                        </div>

                                        <div className="box-date">
                                            <div className="controls input-append date form_datetime" id="bd_returnDate" data-date="1979-09-16T05:25:07Z" 
                                            data-date-format="dd/mm/yyyy  hh:ii" data-link-field="dtp_input3" data-link-format="yyyy-mm-dd hh-ii" start-date={rentalDatetime}>
                                                <input size="16" type="text" value={returnDatetime}
                                                    placeholder={t('background_area.quick_book.input.date_drop')}
                                                    readOnly={true} ref={dt => this.returnDatetime = dt} />
                                                <span className="add-on"><i className="icon-remove"></i></span>
                                                <span className="add-on"><i className="icon-th"></i></span>
                                            </div>
                                        </div>
                                        <div className="btn" onClick={this.handleClick} style={{height: 42, padding: 10}}>{t('background_area.quick_book.input.btn')}</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('common')(BookingFix);