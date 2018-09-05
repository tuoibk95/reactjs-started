import React from 'react';
import Base from '../../../core/Base';
import {translate} from 'react-i18next';
import "../css/InsurancePolicy.css";
import { Player } from 'video-react';
import HeaderSubPage from '../header/HeaderSubPage';

class InsurancePolicy extends Base {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        const t = this.props.t;
        return (
                <div className="container-page-sub">
                    <div className="row">
                        <HeaderSubPage title="BẢO HIỂM TÀI SẢN" />
                        <div style = {{height:"600px"}}></div>
                        <div className="policy-purpose">
                            <div className="des-purpose"> {t('policy.purpose.l0')} <br/> <br/> {t('policy.purpose.l1')} <br/> <br/> {t('policy.purpose.l2')}<br/> <br/> {t('policy.purpose.l3')} <br/> <br/> {t('policy.purpose.l4')} <br/> <br/> {t('policy.purpose.l5')}</div>
                            <div className="video-company">
                                <Player

                                    playsInline
                                    poster="assets/images/about/about.jpg"
                                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                />
                            </div>
                        </div>

                        <div className="body-limit">
                            <img src="assets/images/about/pexels-photo.jpg" alt="" style={{ width: "50%", marginRight: "3%", height: "100%" }} />
                            <div className="child-right">
                                <p className="title-child-policy">Phạm vi sử dụng thông tin</p>
                                <p className="text-why">{t('policy.limit.l1')}</p>
                                <p className="text-why">{t('policy.limit.l2')}</p>
                                <p className="text-why">{t('policy.limit.l3')}</p>
                                <p className="text-why">{t('policy.limit.l4')}</p>
                                <p className="text-why">{t('policy.limit.l5')}</p>
                            </div>
                        </div>

                        <div className="body-time">
                            <div className="child-right">
                                <p className="title-child-policy">Thời gian lưu giữ thông tin</p>
                                <p className="text-why">{t('policy.time')}</p>
                            </div>
                            <img src="assets/images/about/pexels-photo-862734.jpg" alt="" style={{ width: "50%", marginLeft: "10%", height: "88%" }} />
                        </div>                        
                    </div>
                </div>

        );
    }
}

export default translate('common')(InsurancePolicy);