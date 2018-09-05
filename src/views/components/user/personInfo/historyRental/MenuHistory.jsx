import React from 'react'
import Base from '../../../../core/Base'
import { translate } from 'react-i18next';

class MenuHistory extends Base {

    constructor(props) {
        super(props);
    }

    render() {
        const t = this.props.t
        return (
            <div className="row">
                <div className="col-md-7 cf">
                    <div className="shadow min cc">
                        <div className="btn-group d-flex" role="group">
                            <a className="btn btn-default w-100" role="button">{t('history.menu.complete')}</a>
                            <a className="btn btn-default w-100 active" role="button">{t('history.menu.upcoming')}</a>
                            <a className="btn btn-default w-100" role="button">{t('history.menu.hiring')}</a>
                            <a className="btn btn-default w-100" role="button">{t('history.menu.cancelled')}</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">

                    <div className="shadow min cc pull-right">
                        <div className="form-row button-radio min">
                            <div className="col-xs-6 col-sm-6 pr-none">
                                <div className="radio-custom radio-inline mt-none text-center">
                                    <input type="radio" id="grid" name="viewmode" />
                                    <label htmlFor="grid">
                                        <div className="car">{t('history.menu.type.car')}</div>
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 pl-none">
                                <div className="radio-custom radio-inline mt-none text-center">
                                    <input type="radio" id="list" name="viewmode" defaultChecked />
                                    <label htmlFor="list">
                                        <div className="motor">{t('history.menu.type.motor')}</div>
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default translate('common')(MenuHistory);