import React from "react";
import { translate } from 'react-i18next';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import ButtonCustome from 'react-validation/build/button';
import { email, password, required, phone, confirm } from '../../../../actions/validate';
import '../css/Tabs.css'
import { FormGroup, Button } from 'reactstrap';
import 'rc-tabs/assets/index.css';
import Base from "../../../core/Base";
import { register } from "../../../../actions/handleApi";
import OtherLogins from "./otherLogins/OtherLogins";

class Register extends Base {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: props.isLogged,
            userInfo: {
                password: "",
                email: "",
                phone: ""
            },
            message: ""
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.props.handleCloseMomal();
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        var { userInfo } = this.state;
        var result = await register(userInfo);
        if (result.message) this.setState({message: result.message})
        this.setState({
            isLogged: false,
            userInfo: result.data
        });
        result.data ? this.props.handleCloseMomal(result) : null
    };

    handleBack = () => {
        this.props.handleCloseMomal(null);
    }

    onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        var userInfo = this.state.userInfo;
        if (name === "email") userInfo.email = value;
        else if (name === "password") userInfo.password = value;
        else if (name === "phone") userInfo.phone = value;

        this.setState({ 
            [name]: value,
            message: "" 
        });
    }

    render() {
        const t = this.props.t;
        const message = this.state.message
        return (
            <div>
                <Form validateAll className="form">
                    <FormGroup>
                        <p className="title-ip-register form-input">{t("register.email.label")}</p>
                        <Input
                            className="input-tabs"
                            placeholder={t('register.email.placeholder')}
                            type="email"
                            name="email"
                            validations={[email]}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <p className="title-ip-register form-input">{t("register.phone.label") + " (*)"}</p>
                        <Input
                            className="input-tabs"
                            placeholder={t('register.phone.placeholder')}
                            type="number"
                            name="phone"
                            pattern="[0-9]*"
                            validations={[required, phone]}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <p className="title-ip-register">{t("register.password.label") + " (*)"}</p>
                        <Input
                            className="input-tabs"
                            placeholder={t("register.password.placeholder")}
                            type="password"
                            name="password"
                            validations={[required, password]}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <p className="title-ip-register">{t("register.confirm.label") + " (*)"}</p>
                        <Input
                            className="input-tabs"
                            placeholder={t("register.confirm.placeholder")}
                            type="password"
                            name="confirm"
                            validations={[required, confirm]}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <div className="text_note">
                            (*) {(t("register.note"))}
                        </div>
                    </FormGroup>
                    <FormGroup className="form-error is-visible"> {message} </FormGroup>
                    <FormGroup row style={{ textAlign: "center", marginLeft: 0, marginRight: 0 }}>
                        <ButtonCustome className='btn' style={{ width: 156, height: 48 }} onClick={this.handleSubmit.bind(this)}>{t("register.btn_register")}</ButtonCustome>
                        <button className="btn_back" style={{ width: 156, height: 48, marginLeft: '16px' }}  onClick={this.handleBack.bind(this)}>{t("login.btn_back")}</button>
                    </FormGroup>
                    {/* <FormGroup style={{ textAlign: "center", marginBottom: 24 }}>
                        <button className="btn_back" style={{ width: 156, height: 48 }}  onClick={this.handleBack.bind(this)}>{t("login.btn_back")}</button>
                    </FormGroup> */}
                </Form>
                <OtherLogins />
            </div>
        );
    }
}


export default translate('common')(Register);