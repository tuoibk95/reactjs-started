import React from 'react';
import Base from '../../core/Base';
import {translate} from 'react-i18next';

class UsefulArea extends Base {
    render() {
        const t = this.props.t;
        return (
            <section className="useful-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="title">{t("useful_area.title")}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="opt">
                                <img src="assets/images/icon/icon1.png"/>
                                <div className="tit">{t("useful_area.opt.title")}</div>
                                <p>{t("useful_area.opt.content")}</p>
                            </div>
                            <div className="opt">
                                <img src="assets/images/icon/icon2.png"/>
                                <div className="tit">{t("useful_area.convenient.title")}</div>
                                <p>{t("useful_area.convenient.content")}</p>
                            </div>
                            <div className="opt">
                                <img src="assets/images/icon/icon3.png"/>
                                <div className="tit">{t("useful_area.price.title")}</div>
                                <p>{t("useful_area.price.content")}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="opt">
                                <img src="assets/images/icon/icon4.png"/>
                                <div className="tit">{t("useful_area.trust.title")}</div>
                                <p>{t("useful_area.trust.content")}</p>
                            </div>
                            <div className="opt">
                                <img src="assets/images/icon/icon5.png"/>
                                <div className="tit">{t("useful_area.support.title")}</div>
                                <p>{t("useful_area.support.content")}</p>
                            </div>
                            <div className="opt">
                                <img src="assets/images/icon/icon6.png"/>
                                <div className="tit">{t("useful_area.security.title")}</div>
                                <p>{t("useful_area.security.content")}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        );
    }
}

export default translate('common')(UsefulArea)