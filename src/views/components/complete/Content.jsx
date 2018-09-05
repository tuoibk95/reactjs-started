import React from 'react';
import Base from '../../core/Base';
import {translate} from 'react-i18next';
import {Link} from 'react-router-dom';
import {FormGroup} from 'reactstrap';
import "../user/css/Tabs.css"
import { reactLocalStorage } from 'reactjs-localstorage';
import {Redirect} from 'react-router-dom'

class Content extends Base {
    constructor(props){
        super(props);
        this.state = {
            isCancel: false
        }
    }

    handleCancel = () => {
        this.clear();
        this.setState({isCancel: true})
    }

    clear = () => {
        reactLocalStorage.set("customer_info.fullname", "");
        reactLocalStorage.set("customer_info.email", "");
        reactLocalStorage.set("customer_info.phone", "");
        reactLocalStorage.set("customer_info.address", "");
        reactLocalStorage.set("customer_info.payment", "");
        reactLocalStorage.set("booking.type", "");
        reactLocalStorage.set("booking.location", "");
        reactLocalStorage.set("booking.rental_date", "");
        reactLocalStorage.set("booking.rental_time", "");
        reactLocalStorage.set("booking.return_date", "");
        reactLocalStorage.set("booking.return_time", "");
        reactLocalStorage.set("booking.pick_up_form", "");
        reactLocalStorage.set("booking.promotion_code", "");
    }

    render() {
        const {t} = this.props
        const {isCancel} = this.state
        if (isCancel) return <Redirect push to="/" />
        else return (
            <div className="col-lg-8 col-md-8">
                <div className="right-content ">
                    <div className="shadow mb-xlg p-lg">
                        <div className="text-center">
                            <img src="assets/images/icon/step3.png" width="180" className="mt-md mb-sm"/>
                            <div className="head-title sm">
                                <h3 className="mb-lg">{t("complete.content.title")}</h3>
                            </div>
                            <p>{t("complete.content.text.line1")}</p>
                            <p>{t("complete.content.text.line2")}</p>
                            <p>{t("complete.content.text.line3")}</p>
                            <Link to="/" className="btn mt-lg mb-lg" style={{width: "138px", height: "48px"}} >{t("complete.content.btn_home")}</Link>
                            <FormGroup >
                                <button className="btn_back" style={{width: "138px", height: "48px"}} onClick={this.handleCancel}>{t("complete.content.btn_cancel")}</button>
                            </FormGroup>
                        </div>
                        <div className="luuy pt-md pb-lg m-xs">
                            <p className="text-default mb-sm"><b>{t("complete.content.note")}</b></p>
                            <p>{t("complete.content.content_note.line1")}</p>
                            <p>{t("complete.content.content_note.line2")}</p>
                            <p>{t("complete.content.content_note.line3")}</p>
                            <p>{t("complete.content.content_note.line4")}</p>
                            <p>{t("complete.content.content_note.line5")}</p>
                            <p>{t("complete.content.content_note.line6")}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('common')(Content);