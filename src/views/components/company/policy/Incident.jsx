import React from 'react';
import Base from '../../../core/Base';
import {translate} from 'react-i18next';
import '../css/Incident.css';
import { Player } from 'video-react';
import HeaderSubPage from '../header/HeaderSubPage';

class Incident extends Base {
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
                <HeaderSubPage title="SỰ CỐ & KHIẾU NẠI"/>
                <div style={ { height: "275px" } }></div>
                <div className="policy-incident">
                    <div className="des-incident">{t('policy.incident.l0')} <br/> <br/> {t('policy.incident.l1')} <br/> <br/> {t('policy.incident.l2')}</div>
                </div>

                <div className="body-incident">
                    <p className="title-child-incident">Sự cố & khiếu nại</p>
                    <p className="text-why">{t('policy.incident.l3')}</p>
                    <p className="text-why">{t('policy.incident.l4')}</p>
                    <p className="text-why">{t('policy.incident.l5')}</p>
                    <p className="text-why">{t('policy.incident.l51')}</p>
                    <p className="text-why">{t('policy.incident.l52')}</p>
                    <p className="text-why">{t('policy.incident.l6')}</p>
                    <p className="text-why">{t('policy.incident.l61')}</p>
                    <p className="text-why">{t('policy.incident.l62')}</p>
                    <p className="text-why">{t('policy.incident.l7')}</p>
                    <p className="text-why">{t('policy.incident.l71')}</p>
                    <p className="text-why">{t('policy.incident.l72')}</p>
                    <p className="text-why">{t('policy.incident.l8')}</p>
                    <p className="text-why">{t('policy.incident.l9')}</p>
                    <p className="text-why">{t('policy.incident.l10')}</p>
                </div>
            </div>
        )
    }
}

export default translate('common')(Incident);