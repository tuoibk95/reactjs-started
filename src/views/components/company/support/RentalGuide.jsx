import React from 'react';
import Base from '../../../core/Base';
import {translate} from 'react-i18next';
import "../css/RentalGuide.css";
import HeaderSubPage from '../header/HeaderSubPage';

class RentalGuide extends Base {
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
                        <HeaderSubPage title="HƯỚNG DẪN THUÊ XE" /> 
                        <div className="guide-owner">
                        
                        </div>

                        <div className="body-owner">
                            <img src="assets/images/about/pexels-photo.jpg" alt="" style={{ width: "50%", marginRight: "3%", height: "100%" }} />
                            <div className="child-right">
                                <p className="title-child-owner">Hướng dẫn dành cho chủ xe</p>
                                <p className="text-why">{t('guide.owner.l1')}</p>
                                <p className="text-why">{t('guide.owner.l2')}</p>
                                <p className="text-why">{t('guide.owner.l3')}</p>
                                <p className="text-why">{t('guide.owner.l4')}</p>
                            </div>
                        </div>

                        <div className="body-rental">
                            <div className="child-left">
                                <p className="title-child-owner">Hướng dẫn cho thuê xe</p>
                                <p className="text-why">{t('guide.rental.l1')}</p>
                                <p className="text-why">{t('guide.rental.l2')}</p>
                                <p className="text-why">{t('guide.rental.l3')}</p>
                                <p className="text-why">{t('guide.rental.l31')}</p>
                                <p className="text-why">{t('guide.rental.l32')}</p>
                                <p className="text-why">{t('guide.rental.l33')}</p>
                                <p className="text-why">{t('guide.rental.l34')}</p>
                                <p className="text-why">{t('guide.rental.l35')}</p>
                                <p className="text-why">{t('guide.rental.l4')}</p>
                                <p className="text-why">{t('guide.rental.l5')}</p>
                                <p className="text-why">{t('guide.rental.l6')}</p>
                                <p className="text-why">{t('guide.rental.l7')}</p>
                                <p className="text-why">{t('guide.rental.l8')}</p>


                            </div>
                            <img src="assets/images/about/pexels-photo-862734.jpg" alt="" style={{ width: "40%", marginLeft: "2%", height: "100%" }} />

                        </div>
                    </div>
                </div>

        );
    }


}

export default translate('common')(RentalGuide);