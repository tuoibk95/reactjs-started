import Base from "../../../core/Base";
import React from 'react';
import { translate } from 'react-i18next';
import { Redirect } from 'react-router-dom'
import { i18next } from "../../../../actions/i18n";
import { reactLocalStorage } from "reactjs-localstorage";
import { save } from "../../../../actions/handlerBooking";
import { setScriptFormDateTime } from "../../../../actions/handleScript";
import './Slides.css'

var $ = window.$ = window.jQuery;

class QuickBook extends Base {
    constructor(props) {
        super(props);
        this.state = {
            type: reactLocalStorage.get("booking.type", "car"),
            location: reactLocalStorage.get("booking.location", ""),
            rentalDate: reactLocalStorage.get("booking.rental_date", ""),
            returnDate: reactLocalStorage.get("booking.return_date", ""),
            isRedirect: false,
            error: "",
            cities: reactLocalStorage.getObject("config.cities")
        }
    }


    handleChooseType = (e) => {
        this.setState({ type: e.target.id })
    }

    handleSelectLocation = (e) => {
        this.setState({ location: e.target.value })
    }

    handleClick = () => {
        var { rentalDate, returnDate, type, location } = this.state
        rentalDate = this.rentalDate.value;
        returnDate = this.returnDate.value;
        var check = this.check({ rentalDate, returnDate, type, location });
        if (check) {
            save({ rentalDate, returnDate, type, location })
            this.setState({ isRedirect: true })
        }
    }

    check = (state) => {
        if (!(state && state.type && state.location && state.rentalDate && state.returnDate)) {
            this.setState({ error: i18next.t("common:validate.quick_book") })
            return false
        } else {
            this.setState({ error: "" })
            return true
        }
    }

    handleFocusRentalDate = () => {
        var rentalDate = null;
        setScriptFormDateTime("qb_rentalDate")
        $('#qb_rentalDate').datetimepicker().on('changeDate', function (ev) {
            rentalDate = ev.date;
            $('#qb_returnDate').datetimepicker('setStartDate', rentalDate);
        });
        this.setState({ rentalDate })
    }

    handleFocusReturnDate = () => {
        var returnDate = null;
        setScriptFormDateTime("qb_returnDate")
        $('#qb_returnDate').datetimepicker().on('changeDate', function (ev) {
            returnDate = ev.date;
            // $('#qb_rentalDatetime').datetimepicker('setEndDate', returnDate);
        });
        this.setState({ returnDate })
    }

    render() {
        const { t } = this.props;
        const { type, location, rentalDate, returnDate, isRedirect, error, cities } = this.state;
        var typeId = type === "car" ? 1 : 2
        console.log(this.state)
        if (isRedirect) return <Redirect push to={"/tim-xe/" + typeId + "/" + location + "/" + rentalDate + "/" + returnDate }  />
        else return (
            <div className="quick-book">
                <div className="box-content input-info-search">
                    <h4 className="text-center">{t('background_area.quick_book.title')}</h4>
                    <form>
                        <div className="form-row button-radio">
                            <div className="form-group col-xs-6 col-sm-6">
                                <div className="radio-custom radio-inline text-center">
                                    <input type="radio" id="car" name="booking" checked={type === "car"} onChange={this.handleChooseType.bind(this)} />
                                    <label htmlFor="car">
                                        <div className="car">{t('background_area.quick_book.type.car')}</div>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group col-xs-6 col-sm-6">
                                <div className="radio-custom radio-inline text-center">
                                    <input type="radio" id="motor" name="booking" checked={type === "motor"} onChange={this.handleChooseType.bind(this)} />
                                    <label htmlFor="motor">
                                        <div className="motor">{t('background_area.quick_book.type.motor')}</div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-row button-radio">
                            <div className="form-group col-lg-12">
                                <div className="input-form select-box location">
                                    <select name="cruise-line" onChange={this.handleSelectLocation.bind(this)} value={location}>
                                        <option value="">{t('background_area.quick_book.province.title')}</option>
                                        {cities && cities.length > 0 && cities.map(city => (
                                            <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="form-row button-radio">
                            <div className="form-group col">
                                <div className="two-column">
                                    <div className="box-date ">
                                        <div className="controls input-append date form_datetime" data-date={rentalDate}
                                            id="qb_rentalDate"
                                            data-date-format="dd/mm/yyyy  hh:ii"
                                            data-link-field="dtp_input2"
                                            data-link-format="yyyy-mm-dd hh-ii">
                                            <input size="16" type="text" defaultValue={rentalDate} style={styles.input_datatime}
                                                placeholder={t('background_area.quick_book.input.date_pick')} onFocus={this.handleFocusRentalDate}
                                                ref={pd => this.rentalDate = pd} />
                                            <span className="add-on"><i className="icon-remove"></i></span>
                                            <span className="add-on"><i className="icon-th"></i></span>
                                        </div>
                                    </div>
                                    {/* <div className="box-time  select-box input-form">
                                        <div className="controls input-append date  form_time"
                                            data-date="" data-date-format="hh:ii" id="rentalTime"
                                            data-link-field="dtp_input3" data-link-format="hh:ii">
                                            <input size="16" type="text" value={rentalTime}
                                                placeholder={t('background_area.quick_book.input.time_pick')}
                                                ref={pt => this.rentalTime = pt}
                                                readOnly={true}/>
                                            <span className="add-on"><i className="icon-remove"></i></span>
                                            <span className="add-on"><i className="icon-th"></i></span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="form-row button-radio">
                            <div className="form-group col">
                                <div className="two-column">
                                    <div className="box-date">
                                        <div className="controls input-append date form_datetime" data-date={returnDate}
                                            id="qb_returnDate"
                                            data-date-format="dd/mm/yyyy  hh:ii"
                                            data-link-field="dtp_input2"
                                            data-link-format="yyyy-mm-dd hh-ii">
                                            <input size="16" type="text" defaultValue={returnDate} style={styles.input_datatime}
                                                placeholder={t('background_area.quick_book.input.date_drop')} onFocus={this.handleFocusReturnDate}
                                                ref={dd => this.returnDate = dd} />
                                            <span className="add-on"><i className="icon-remove"></i></span>
                                            <span className="add-on"><i className="icon-th"></i></span>
                                        </div>
                                    </div>
                                    {/* <div className="box-time select-box input-form">
                                        <div className="controls input-append date  form_time" id="returnTime"
                                            data-date="" data-date-format="hh:ii"
                                            data-link-field="dtp_input3" data-link-format="hh:ii">
                                            <input size="16" type="text" value={returnTime}
                                                placeholder={t('background_area.quick_book.input.time_drop')}
                                                ref={dt => this.returnTime = dt}
                                                readOnly={true} />
                                            <span className="add-on"><i className="icon-remove"></i></span>
                                            <span className="add-on"><i className="icon-th"></i></span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <span className="form-error is-visible">{error}</span>
                        <div className="form-row button-radio">
                            <div className="form-group col">
                                <div className="btn btn-block" onClick={this.handleClick.bind(this)}>{t('background_area.quick_book.input.btn')}</div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

const styles = {
    input_datatime: {
        paddingLeft: '45px'
    }
}
export default translate('common')(QuickBook);