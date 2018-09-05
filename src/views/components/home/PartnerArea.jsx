import React from 'react';
import Base from '../../core/Base';
import listParner from '../../../actions/api/partner/partner.json'
import {translate} from 'react-i18next';
import { setScriptPartner } from '../../../actions/handleScript';
var $ = window.$ = window.jQuery;

class PartnerArea extends Base {

    constructor(props) {
        super(props);
        this.state = ({
            listParner: listParner
        })
    }
    componentDidMount(){
        setScriptPartner();

    }
    render() {
        const t = this.props.t
        return (
            <section className="partner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="title">{t("partner_area.title")}</h3>
                            <ul className="slide-partner owl-carousel-partner" data-columns='4'>
                                {this.state.listParner.map((partner) => {
                                    return (
                                        <li key={partner.part_id}>
                                            <div><img src={partner.part_logo} alt={partner.part_name}/></div>
                                        </li>
                                    );
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default translate('common')(PartnerArea);