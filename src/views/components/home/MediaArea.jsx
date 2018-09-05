import React from 'react';
import Base from '../../core/Base';
import {translate} from 'react-i18next';

class MediaArea extends Base {
    render() {
        const t = this.props.t
        return (
            <section className="media-area bg-default text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="title">{t('media.title')}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">

                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe frameBorder="0" allowFullScreen=""
                                        src="https://www.youtube.com/embed/G3psxs3gyf8?showinfo=0&amp;wmode=opaque"></iframe>
                            </div>
                            <p>{t('media.benefit')}</p>
                        </div>
                        <div className="col-md-4">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe frameBorder="0" allowFullScreen=""
                                        src="https://www.youtube.com/embed/G3psxs3gyf8?showinfo=0&amp;wmode=opaque"></iframe>
                            </div>
                            <p>{t('media.service')}</p>
                        </div>
                        <div className="col-md-4">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe frameBorder="0" allowFullScreen=""
                                        src="https://www.youtube.com/embed/G3psxs3gyf8?showinfo=0&amp;wmode=opaque"></iframe>
                            </div>
                            <p>{t('media.holiday')}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div ref="#" className="btn">{t('media.btn')}</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default translate('common')(MediaArea);