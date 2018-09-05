import React from "react";
import { translate } from 'react-i18next';
import Base from '../../../../core/Base';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea';
import ButtonCustome from 'react-validation/build/button';
import { email, password, required, alpha, lt, phone } from '../../../../../actions/validate';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Button } from 'reactstrap';
import { runInThisContext } from "vm";
import '../../css/UserInfo.css'
import VarConf from '../../../../core/VarConf';
import { reactLocalStorage } from 'reactjs-localstorage';

class DialogChangeInfo extends Base {
    constructor(props) {
        super(props);
        var user = reactLocalStorage.getObject("user.info");

        this.state = ({
            // userName: user.username,
            // phoneNumber: user.phone,
            // userEmail: user.email
        })
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.props.handleCloseMomal();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.form.value);
    };

    onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({ [name]: value });
    }

    render() {
        const t = this.props.t

        const { isOpenMomal } = this.props;
        const {userName, userEmail, phoneNumber} = this.state;

        return (
            <div>
                <Modal isOpen={isOpenMomal} style={{ width: '378px', height: 'auto' }} toggle={this.toggle}>
                    <ModalHeader>
                    </ModalHeader>

                    <ModalBody>
                        <Form validateAll style={{ possible: 'relative', marginLeft: '24px' }} onSubmit={this.handleSubmit} ref={c => this.form = c}>
                            <p className="title-normal">Thay đổi thông tin cá nhân</p>
                            <FormGroup>
                                <p className="title-change-info">Họ tên</p>
                                <Input
                                    className="input-nomal"
                                    placeholder= "Nhập họ tên..."
                                    type="text"
                                    name="name"
                                    validations={[required]}
                                    value = {userName}/>
                            </FormGroup>
                            <FormGroup>

                                <p className="title-change-info">Số điện thoại</p>
                                <Input
                                    className="input-nomal"
                                    placeholder="Nhập số điện thoại..."
                                    type="number"
                                    name="phone"
                                    // value ={phoneNumber}
                                    validations={[phone]}
                                    
                                />

                            </FormGroup>

                            <FormGroup>

                                <p className="title-change-info">Email</p>
                                <Input
                                    className="input-nomal"
                                    placeholder="Nhập email..."
                                    type="email"
                                    name="email"
                                    validations={[required, email]}
                                    value = {userEmail}
                                />

                            </FormGroup>
                            <FormGroup row >
                                <ButtonCustome className='btn' style={{marginLeft: '35px', width: '129px !important', height: '44px', marginTop:"5px"}}><p className = "text-btn">Lưu thay đổi</p></ButtonCustome>
                                <button className='btn-white' style={{ marginLeft: '24px',  height: '44px', width:"129px", marginTop:"5px" }}><p  className = "text-btn">Quay lại</p></button>
                            </FormGroup>

                        </Form>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default translate('common')(DialogChangeInfo);