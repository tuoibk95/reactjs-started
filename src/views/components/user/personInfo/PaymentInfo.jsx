import React from 'react'
import Base from '../../../core/Base'
import { translate } from 'react-i18next';
import { reactLocalStorage } from 'reactjs-localstorage';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { IconButton } from 'material-ui';
import '../css/PaymentInfo.css'
class PaymentInfo extends Base {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        reactLocalStorage.get("menu_default", 1);
    }

    render() {
        const t = this.props.t
        

        return (
            <div>
                <div className="right-content">
                    <div className="group">
                        <div className="row form-right">
                            <p className="title-top">{t('payment_info.title')}</p>
                            <div style={{ marginTop: '28px', display: 'block', width: '100%' }}>
                                <div className ="div-payment">
                                    <p style = {{padding: '5px', width:'70%'}}>Thẻ MasterCard đuôi 856 11/2011 </p>
                                    <div className = "type-card">Thẻ chính</div>
                                    <img src="assets/images/icon/ic-pen.png" height="18" className = "icon-payment"/>
                                    <img src ="assets/images/icon/delete-photo.png"  height="18" className = "icon-payment"/>
                                </div>
                                <button className ="btn-edit btn-payment" >{t('payment_info.btn_add')}</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default translate('common')(PaymentInfo);