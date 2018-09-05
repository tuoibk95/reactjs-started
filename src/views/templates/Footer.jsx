import React from 'react';
import Base from '../core/Base';
import { translate, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'

class Footer extends Base {

    changeLanguage

    render() {
        const { t } = this.props;
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 ft">
                            <div className="widget-footer">
                                <div className="widget-contact">
                                    <h4> {t('footer.contact.title')}</h4>
                                    <ul className="contact-list">
                                        <li className="contact-email">
                                            <a href="mailto:support@chungxe.vn">{t('footer.contact.email')}</a>
                                        </li>
                                        <li className="contact-phone">
                                            <a href="callto:19006022">{t('footer.contact.phone')}</a>
                                        </li>
                                    </ul>
                                    <div className="social">
                                        <div>
                                            <a href="" title="Facebook">
                                                <i className="icon-facebook-3"></i>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="" title="Youtube">
                                                <i className=" icon-youtube"></i>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="" title="Instagram">
                                                <i className="icon-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 ft">
                            <div className="widget-footer">
                                <div className="widget-quicklink">
                                    <div className="title-wd-ft">
                                        <h4>{t('footer.introduction.title', { framework: "react-i18next" })}</h4>
                                    </div>
                                    <div>
                                        <ul className="menu-ft">
                                            <li>
                                                <Link to="/introduction/about">{t('footer.introduction.about')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/introduction/partner">{t('footer.introduction.partner')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/introduction/recruitment">{t('footer.introduction.recruitment')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/introduction/news">{t('footer.introduction.news')}</Link>
                                            </li>

                                        </ul>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 ft">
                            <div className="widget-footer">
                                <div className="widget-quicklink">
                                    <div className="title-wd-ft">
                                        <h4>{t('footer.policy.title')}</h4>
                                    </div>
                                    <div>
                                        <ul className="menu-ft">
                                            <li>
                                                <Link to="/policy/insurance">{t('footer.policy.insurance')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/policy/partner">{t('footer.policy.partner')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/policy/service">{t('footer.policy.service')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/policy/incident">{t('footer.policy.incident')}</Link>
                                            </li>

                                        </ul>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 ft">
                            <div className="widget-footer">
                                <div className="widget-quicklink">
                                    <div className="title-wd-ft">
                                        <h4>{t('footer.support.title')}</h4>
                                    </div>
                                    <div>
                                        <ul className="menu-ft">
                                            <li>
                                                <Link to="/support/car_rental">{t('footer.support.car_rental')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/support/use">{t('footer.support.use')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/support/questions">{t('footer.support.questions')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/support/handbook">{t('footer.support.handbook')}</Link>
                                            </li>
                                            
                                        </ul>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 text-center copyright">
                            <p>{t('footer.copyright.content')}</p>
                            <a>{t('footer.copyright.regulations')} </a> | <a> {t('footer.copyright.rules')}</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default translate('common')(Footer);