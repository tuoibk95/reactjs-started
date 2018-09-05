import React from 'react';
import Base from '../../core/Base';
import {translate} from 'react-i18next';
import {FormGroup} from 'reactstrap';
import "../user/css/Tabs.css"

class VehicalDetails extends Base {
    render() {
        const {t} = this.props
        return (
            <div className="shadow p-lg">
                <div className="head-title">
                    <h3 className="mb-md">{t("complete.vehicle.title")}</h3>
                </div>
                <form className="cap">
                    <div className="form-group  mb-none">
                        <label className=" pt-1">{t("complete.vehicle.status")}</label>
                        <p className="form-control-static pt-none">Xe đã sẵn sàng</p>
                    </div>
                    <div className="form-group  mb-none">
                        <label className=" pt-1">{t("complete.vehicle.payment")}</label>
                        <p className="form-control-static pt-none">Trả sau</p>
                    </div>
                    <div className="form-group  mb-none">
                        <label className=" pt-1">{t("complete.vehicle.code")}</label>
                        <p className="form-control-static pt-none">12345</p>
                    </div>
                    <div className="form-group  mb-none">
                        <label className=" pt-1">{t("complete.vehicle.type")}</label>
                        <p className="form-control-static pt-none">Honda SH 150i</p>
                    </div>
                    <div className="form-group  mb-none">
                        <label className=" pt-1">{t("complete.vehicle.form")}</label>
                        <p className="form-control-static pt-none">Nhận tại nhà</p>
                    </div>
                    <div className="form-group mb-none">
                        <label className=" pt-2">{t("complete.vehicle.time")} </label>
                        <p className="form-control-static pt-none">04:30 05/05/2018 - 06h30 15/05/2018</p>
                    </div>
                    <FormGroup style={{textAlign: 'center'}}>
                        <button className="btn_back" style={{ width: "138px", height: "48px" }}>{t("complete.customer.btn")}</button>
                    </FormGroup>
                </form>

            </div>
        );
    }
}

export default translate('common')(VehicalDetails);