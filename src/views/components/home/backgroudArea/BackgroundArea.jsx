import React from 'react';
import {translate} from 'react-i18next';
import Base from '../../../core/Base';
import QuickBook from './QuickBook';
import SlideImage from './SlideImage';

class BackgroundArea extends Base {

    render() {
        const t = this.props.t
        return (
            <section className="background-area">
                <div id="slider">
                    <SlideImage />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5">
                                <div className="chungxe-tagline">
                                    <h3>{t('background_area.text')}</h3>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-7">
                                <QuickBook />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </section>

        );
    }
}

export default translate('common')(BackgroundArea);