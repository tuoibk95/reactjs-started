import React from 'react';
import Base from '../../../core/Base';
import {translate} from 'react-i18next';

class InfoRecruitment extends Base {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        const t = this.props.t;
        return (
                <div className="container">
                    <div className="row">
                        <div style = {{height:"600px"}}>{t('footer.introduction.recruitment')}</div>
                    </div>
                </div>

        );
    }


}

export default translate('common')(InfoRecruitment);