import React from 'react';
import Base from '../../core/Base';
import {translate} from 'react-i18next';

class HowitWorkArea extends Base {
    render() {
        const t = this.props.t
        return (
            <section className="howitwork-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="title">{t('howitwork_area.title')}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="assets/images/icon/step1.png"/>
                            <div className="tit">{t('howitwork_area.step1.title')}</div>
                            <p>{t('howitwork_area.step1.content')}</p>
                        </div>
                        <div className="col-md-4">
                            <img src="assets/images/icon/step2.png"/>
                            <div className="tit">{t('howitwork_area.step2.title')}</div>
                            <p>{t('howitwork_area.step2.content')}</p>
                        </div>
                        <div className="col-md-4">
                            <img src="assets/images/icon/step3.png"/>
                            <div className="tit">{t('howitwork_area.step3.title')}</div>
                            <p>{t('howitwork_area.step3.content')}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="btn">{t('howitwork_area.btn')}</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default translate('common')(HowitWorkArea);