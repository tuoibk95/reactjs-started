import React from "react";
import { translate } from 'react-i18next';
import Base from '../../../core/Base';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { password, required, emailAndPhone } from '../../../../actions/validate';
import '../css/Tabs.css';
import ButtonCustome from 'react-validation/build/button';
import { FormGroup } from 'reactstrap';
import { login, getUserById } from "../../../../actions/handleApi";
import OtherLogins from "./otherLogins/OtherLogins";
import { Link } from "react-router-dom";
import { reactLocalStorage } from 'reactjs-localstorage'

class Login extends Base {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: props.isLogged,
            email: "",
            password: "",
            message: ""
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        var { email, password } = this.state;
        var user = null;

        var result = await login({ email, password })
        if (result.message)
            this.setState({ message: result.message })
        else {
            user = await getUserById(result.data);
            this.props.handleCloseMomal(user.data);
        }
        

    };

    handleBack = () => {
        this.props.handleCloseMomal(null);
    }

    onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value,
            message: ""
        });
    }

    render() {
        const { t } = this.props;
        var { message } = this.state;
        return (
            <div>
                <Form validateAll className="form" styles={{ position: "relative" }}>
                    <FormGroup style={styles.formGroup} >
                        <p className="title-ip-register form-inputr">{t("login.email.label")}</p>
                        <Input
                            className="input-tabs"
                            placeholder={t("login.email.placeholder")}
                            type="text"
                            name="email"
                            validations={[required, emailAndPhone]}
                            onChange={this.onChange.bind(this)}
                        />
                    </FormGroup>
                    <FormGroup style={styles.formGroup}>
                        <p className="title-ip-register">
                            {t("login.password.label")} </p>
                        <Input
                            className="input-tabs"
                            placeholder={t("login.password.placeholder")}
                            type="password"
                            name="password"
                            validations={[required, password]}
                            onChange={this.onChange.bind(this)}
                        />

                    </FormGroup>
                    <FormGroup className="form-error is-visible" style={{ textTransform: 'capitalize' }}> {message} </FormGroup>
                    <FormGroup style={styles.text}>
                        {t("login.password.forget")}
                    </FormGroup>
                    <FormGroup style={styles.formGroup}>
                        <ButtonCustome className='btn' style={styles.button} onClick={this.handleSubmit.bind(this)}>{t("login.btn_login")}</ButtonCustome>
                    </FormGroup>
                </Form>
                <OtherLogins />
                <FormGroup style={{ textAlign: "center", marginBottom: 24 }}>
                    <button className="btn_back" onClick={this.handleBack.bind(this)}>{t("login.btn_back")}</button>
                </FormGroup>
            </div>
        );
    }
}

const styles = {
    text: {
        textAlign: "center",
        color: "#107d82"
    },
    button: {
        width: 330,
        height: 48,
        textAlign: "center"
    },
    formGroup: {
        width: '330px'
    }
}
export default translate("common")(Login)