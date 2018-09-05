import React from 'react';
import Base from '../../../../core/Base';
import "../../css/Tabs.css";
import {translate} from 'react-i18next';

class OtherLogins extends Base {

    render() {
        const {t} = this.props
        return (
            <div>
                <div className="path">
                    <div className="path1"> </div>
                    <div className="path_text">{t("login.path")} </div>
                    <div className="path2"> </div>
                </div>
                <div className="others_login">
                    <div className="others_login_img"> <img src="assets/images/icon/gg_active.png" alt="gg"  /></div>
                    <div className="others_login_img"> <img src="assets/images/icon/fb_active.png" alt="fb"  /></div>
                    <div className="others_login_img"> <img src="assets/images/icon/tw_active.png" alt="tw"  /></div>
                </div>
            </div>
        );
    }
}
export default translate("common")(OtherLogins);