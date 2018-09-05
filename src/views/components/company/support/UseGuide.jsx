import React from 'react';
import Base from '../../../core/Base';
import {translate} from 'react-i18next';
import '../css/UseGuide.css';
import { Player } from 'video-react';
import HeaderSubPage from '../header/HeaderSubPage';

class UseGuide extends Base {
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
                <HeaderSubPage title="HƯỚNG DẪN CHO THUÊ XE"/>
                <div className="row">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('common')(UseGuide);