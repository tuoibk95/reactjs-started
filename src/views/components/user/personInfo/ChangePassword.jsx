import React from 'react';
import Base from '../../../core/Base'
import { translate } from 'react-i18next';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Col, FormGroup, Label, FormText } from 'reactstrap';
import { required, email, lt, password, confirm } from '../../../../actions/validate';
import Form from 'react-validation/build/form';
import Button from 'react-validation/build/button';
import Input from 'react-validation/build/input';
import '../css/ChangePassword.css'
import '../css/PersonInfo.css'

class ChangePassword extends Base {

    constructor(props) {
        super(props);
        reactLocalStorage.set("menu_default", 3)

        this.state = ({
            passold: "",
            password: "",
            confirm: ""
        })

        
    }

    componentWillMount(){
        reactLocalStorage.get("menu_default", 3);
    }

    handleChangePassword = async () => {
        var data = {
            "newPassword": this.state.password,
            "oldPassword": this.state.passold
        }

        // var token = reactLocalStorage.get("user.token");

        // var result = await MyService.postRequestDataParams("/Users/change-password", data, token);
  
        // if(result === null){
        //     alert("Mật khẩu không đúng! Vui lòng nhập lại")
        // }else{
        //     alert("Thay đổi mật khẩu thành công")
        // }
    }

    onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({ [name]: value });
      
    
    }
    handleSubmit = (event) => {
        event.preventDefault();
    
        console.log(event);
      };

    render() {
        const t = this.props.t
        return (
            <div className="right-content">
                <div className="group">
                    <div className="row">
                        <p className="title-changepass">{t('change_password.title')}</p>
                        <div style={{ width: '100%', possible: 'relative' }}>
                            <Form  ref="form" validateAll style={{ possible: 'relative' }} onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <p className="title-input form-input">{t('change_password.pass_old')}</p>
                                    <Input
                                        className="input-changpass"
                                        placeholder={t('change_password.placehodle_passold')}
                                        type="password"
                                        name="passold"
                                        validations={[required, password]}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </FormGroup>
                                <FormGroup row>

                                    <p className="title-input">{t('change_password.pass_new')}</p>
                                    <Input
                                        className="input-changpass form-input"
                                        placeholder={t('change_password.placehodle_passnew')}
                                        type="password"
                                        name="password"
                                        validations={[required, password, confirm]}
                                        onChange={this.onChange.bind(this)}
                                    />

                                </FormGroup>

                                <FormGroup row>

                                    <p className="title-input">{t('change_password.pass_confirm')}</p>
                                    <Input
                                        className="input-changpass"
                                        placeholder={t('change_password.placehodle_confirm')}
                                        type="password"
                                        name="confirm"
                                        validations={[required, password, confirm]}
                                        onChange={this.onChange.bind(this)}
                                    />

                                </FormGroup>
                                <Button  className= "btn btn-changepass" onClick={this.handleChangePassword}>{t('change_password.title')}</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('common')(ChangePassword);