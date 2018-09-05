import React from 'react';
import Base from '../../../core/Base';
import { translate } from 'react-i18next';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select';
import ButtonCustome from 'react-validation/build/button';
import { email, required, phone } from '../../../../actions/validate';
import '../../user/css/Tabs.css';
import { FormGroup } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { PAYMENT_METHOD } from '../../../../actions/constants';
import { reactLocalStorage } from 'reactjs-localstorage';
import BookingApi from '../../../../actions/api/booking/BookingApi';

class Customer extends Base {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                fullname: reactLocalStorage.get("customer_info.fullname", ""),
                email: reactLocalStorage.get("customer_info.email", ""),
                phone: reactLocalStorage.get("customer_info.phone", "")
            },
            paymentId: reactLocalStorage.get("customer_info.payment", ""),
            isBack: false,
            isNext: false
        }
    }

    handleSubmit = async (e) => {
        alert("hi")
        e.preventDefault();
        this.save();
        await BookingApi.createBooking();
        this.setState({ isNext: true })
    };

    handleBack = () => {
        this.setState({ isBack: true })
    }

    handleSelect = (e) => {
        e.preventDefault();
        this.setState({ paymentId: e.target.value })
    }

    onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        var userInfo = this.state.userInfo;
        if (name === "email") userInfo.email = value;
        else if (name === "fullname") userInfo.fullname = value;
        else if (name === "phone") userInfo.phone = value;
        this.setState({ userInfo });
    }

    save = () => {
        var {userInfo, paymentId} = this.state;
        reactLocalStorage.set("customer_info.fullname", userInfo.fullname)
        reactLocalStorage.set("customer_info.email", userInfo.email)
        reactLocalStorage.set("customer_info.phone", userInfo.phone)
        reactLocalStorage.set("customer_info.payment", paymentId)
    }

    render() {
        const { t } = this.props;
        const { userInfo, paymentId, isBack, isNext } = this.state
        if (isBack) return <Redirect push to="/chi-tiet-xe" />
        else if (isNext) return <Redirect push to="/hoan-thanh" />
        else return (
            <div className="col-lg-8 col-md-8">
                <div className="right-content ">
                    <div className="shadow mb-xlg p-lg">
                        <Form validateAll className="form" style={{ margin: 0 }} >
                            <div className="form-group row mb-lg">
                                <div className="col-lg-12 head-title" style={styles.title}>
                                    <h3 className="mt-lg" >{t("customer_info.title.head")}</h3>
                                    <p >{t("customer_info.title.description")}</p>
                                </div>
                            </div>
                            <FormGroup row style={styles.formGroup}>
                                <label className="col-lg-4 col-md-5 col-sm-4 text-sm-right pt-2">{t("customer_info.form.fullname.label")} </label>
                                <div style={styles.input} >
                                    <Input
                                        className="input-tabs"
                                        placeholder={t("customer_info.form.fullname.placeholder")}
                                        type="text"
                                        name="fullname"
                                        validations={[required]}
                                        onChange={this.onChange}
                                        value={userInfo.fullname}
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup row style={styles.formGroup}>
                                <label className="col-lg-4 col-md-5 col-sm-4 text-sm-right pt-2">{t("customer_info.form.phone.label")} </label>
                                <div style={styles.input} >
                                    <Input
                                        className="input-tabs"
                                        placeholder={t("customer_info.form.phone.placeholder")}
                                        type="number"
                                        pattern="[0-9]*"
                                        name="phone"
                                        validations={[required, phone]}
                                        onChange={this.onChange}
                                        value={userInfo.phone}
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup row style={styles.formGroup}>
                                <label className="col-lg-4 col-md-5 col-sm-4 text-sm-right pt-2">{t("customer_info.form.email.label")} </label>
                                <div style={styles.input}  >
                                    <Input
                                        className="input-tabs"
                                        placeholder={t("customer_info.form.email.placeholder")}
                                        type="email"
                                        name="email"
                                        validations={[email]}
                                        onChange={this.onChange}
                                        value={userInfo.email}
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup row style={styles.formGroup}>
                                <label className="col-lg-4 col-md-5 col-sm-4 text-sm-right pt-2">{t("customer_info.form.payment.label")} </label>

                                <Select style={styles.select} name="payment" onChange={this.handleSelect.bind(this)} value={paymentId} validations={[required]}>
                                    <option value="">{t("customer_info.form.payment.select")}</option>
                                    {PAYMENT_METHOD.map(pm =>
                                        <option value={pm.id} key={pm.id}>{pm.name}</option>
                                    )}
                                </Select>

                            </FormGroup>
                            <FormGroup style={{ marginBottom: 16 }}>
                                <ButtonCustome className='btn' style={styles.button} onClick={this.handleSubmit.bind(this)}>{t("customer_info.form.btn_next")}</ButtonCustome>
                            </FormGroup>
                            <FormGroup >
                                <button className="btn_back" style={styles.button} onClick={this.handleBack.bind(this)}>{t("customer_info.form.btn_back")}</button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    formGroup: {
        marginBottom: '16px'
    },
    title: {
        paddingLeft: '97px'
    },
    input: {
        marginLeft: '16px'
    },
    select: {
        width: 330,
        height: 44,
        marginLeft: '16px'
    },
    button: {
        width: '330px',
        height: '48px',
        marginLeft: '232px'
    }
}

export default translate('common')(Customer);
