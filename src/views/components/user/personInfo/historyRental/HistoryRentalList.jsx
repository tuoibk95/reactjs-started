import React from 'react'
import Base from '../../../../core/Base'
import { translate } from 'react-i18next';
import '../../css/MenuLeft.css'
import MenuHistory from './MenuHistory';
import { reactLocalStorage } from 'reactjs-localstorage';

class History extends Base {

    constructor(props) {
        super(props);
        this.state = ({
            moveToDetail: false
        })
    }

    componentWillMount(){
        reactLocalStorage.get("menu_default", 0);
    }

    handleDetailHistory = () => {

    }

    renderItemList = (t) => {
        return (
            <div className="prod his ">
                <a>
                    <img src="assets/images/product/motor1.png" className=" pt-xlg pb-lg" />
                </a>
                <div className="info-prod">
                    <div className="pull-left">
                        <p className="tit2 mt-md mb-sm">Honda SH 150i 2015</p>
                        <div className="dt">
                            <div style={{ display: '-webkit-box' }}>
                                <div style={{ width: '125px' }}>{t("history.complete.code_received")}</div>
                                <span>12345</span>
                            </div>
                            <div style={{ display: '-webkit-box' }}>
                                <div style={{ width: '125px' }}>{t("history.complete.date_book")}</div>
                                <span>12/04/2018</span>
                            </div>
                            <div style={{ display: '-webkit-box' }}>
                                <div style={{ width: '125px' }}>{t("history.complete.time")}</div>
                                <span>04:30 05/5/2018 - 06:30 15/05/2018</span>
                            </div>
                            <div style={{ display: '-webkit-box' }}>
                                <div style={{ width: '125px' }}>{t("history.complete.price_rent")}</div>
                                <span>700,000 đ</span>
                            </div>
                        </div>
                    </div>
                    <div className="pull-right text-right">
                        <a className="btn" style={{ color: '#ffffff' }} onClick={this.handleDetailHistory}>{t("history.complete.btn_detail")}</a>
                        <a className="btn light" style={{ color: '#107d82' }} data-toggle="modal" data-target="#huyxe">{t("history.complete.btn_cancel")}</a>
                    </div>
                </div>
            </div>)
    }

    render() {
        const t = this.props.t
        return (
            <div className="right-content">
                <MenuHistory />
                <div className="row list-view mb-xlg">
                    <div className="col-md-12">
                        {this.renderItemList(t)}
                        {this.renderItemList(t)}
                        {this.renderItemList(t)}
                    </div>
                </div>
            </div>)
    }
}

export default translate('common')(History);