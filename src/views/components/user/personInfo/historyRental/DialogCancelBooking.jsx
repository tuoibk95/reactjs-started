import React from "react";
import { translate } from 'react-i18next';
import Base from '../../../../core/Base';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import ButtonCustome from 'react-validation/build/button';
import { email, required, phone } from '../../../../../actions/validate';
import { Modal, ModalBody, FormGroup } from 'reactstrap';
import '../../css/UserInfo.css'
class DialogCancelBooking extends Base {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.props.handleCloseMomal();
    }

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        const t = this.props.t

        const { isOpenMomal } = this.props;

        return (
            <div>
                <Modal isOpen={isOpenMomal} style={{ width: '618px', height: 'auto' }} toggle={this.toggle}>

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
                </Modal>
            </div>
        );
    }
}

export default translate('common')(DialogCancelBooking);