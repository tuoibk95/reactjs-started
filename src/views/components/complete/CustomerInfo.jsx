import React from 'react';
import Base from '../../core/Base';
import { translate } from 'react-i18next';
import { FormGroup } from 'reactstrap';
import "../user/css/Tabs.css"
import { reactLocalStorage } from 'reactjs-localstorage';
import {Redirect } from 'react-router-dom'

class CustomerInfo extends Base {
    constructor(props) {
        super(props);
        this.state = {
            fullname: reactLocalStorage.get("customer_info.fullname", ""),
            email: reactLocalStorage.get("customer_info.email", ""),
            phone: reactLocalStorage.get("customer_info.phone", ""),
            address: reactLocalStorage.get("customer_info.address", ""),
            isEdit: false
        }
    }

    handleClick = () => {
        this.setState({isEdit: true})
    }

    render() {
        const { t } = this.props;
        const { fullname, email, phone, address, isEdit } = this.state
        if (isEdit) return <Redirect push to="/thong-tin-khach-hang" />
        else return (
            <div className="shadow p-lg mb-xlg">
                <div className="head-title">
                    <h3 className="mb-md">{t("complete.customer.title")}</h3>
                </div>
                <form className="cap">
                    <div className="form-group  mb-none">
                        <label className=" pt-1">{t("complete.customer.fullname")}</label>
                        <p className="form-control-static pt-none">{fullname}</p>
                    </div>
                    <div className="form-group mb-none">
                        <label className=" pt-2">{t("complete.customer.phone")} </label>
                        <p className="form-control-static pt-none">{phone}</p>
                    </div>
                    <div className="form-group mb-none">
                        <label className=" pt-2">{t("complete.customer.email")} </label>
                        <p className="form-control-static pt-none">{email}</p>
                    </div>
                    <div className="form-group mb-none">
                        <label className=" pt-2">{t("complete.customer.address")} </label>
                        <p className="form-control-static pt-none">{address}</p>
                    </div>
                    <FormGroup style={{ textAlign: 'center' }}>
                        <button className="btn_back" style={{ width: "138px", height: "48px" }} onClick={this.handleClick}>{t("complete.customer.btn")}</button>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default translate('common')(CustomerInfo);