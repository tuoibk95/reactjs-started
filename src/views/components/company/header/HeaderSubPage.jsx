import React from "react";
import { translate } from 'react-i18next';
import "../css/SubPage.css"
import Base from "../../../core/Base";

class HeaderSubPage extends Base{
    render(){
    return <div className="header-page-sub">
        <div style={{ backgroundImage: "url(assets/images/about/about.jpg)" }} className="bg-page-sub">{this.props.title}</div>

    </div>
    }
}

export default translate('common')(HeaderSubPage);