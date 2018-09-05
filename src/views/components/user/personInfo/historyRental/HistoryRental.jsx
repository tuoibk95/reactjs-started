import React from 'react'
import Base from '../../../../core/Base'
import { translate } from 'react-i18next';
import '../../css/MenuLeft.css'

class HistoryRental extends Base {

    constructor(props) {
        super(props);

    }

    render() {
        const t = this.props.t
        return (
            <div className="right-content">
                <div className="row mb-xlg">
                    <div className="col-md-12">
                        <div className="shadow p-lg mb-xlg">
                            <div className="model row">
                                <div className="col-sm-5">
                                    <a><img src="assets/images/product/car1.png" className="mt-md" /></a>
                                </div>
                                <div className="col-sm-7">
                                    <div className="tit3 mt-md mb-xs">Minicopper 3</div>
                                    <div className="clear">
                                        <div className="stars large mb-sm pull-left">
                                            <img src="assets/images/icon/star-on.png" />
                                            <img src="assets/images/icon/star-on.png" />
                                            <img src="assets/images/icon/star-on.png" />
                                            <img src="assets/images/icon/star-on.png" />
                                            <img src="assets/images/icon/star-on.png" />
                                        </div>
                                        <a className="pull-left ml-md edit"><img src="assets/images/icon/ic-pen.png"
                                            height="18" /></a>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <textarea className="form-control"
                                                placeholder={t('history_rental.placehodle_comment')}></textarea>
                                        </div>
                                        <a href="#" className="btn"><b>{t('history_rental.btn_comment')}</b></a>
                                    </form>
                                </div>
                            </div>
                            <div className="luuy pt-sm pb-sm m-xs mt-xlg">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="text-default mb-md mt-lg"><b>{t('history_rental.info_custome')}</b></p>
                                        <form className="cap">
                                            <div className="form-group  mb-none">
                                                <label className=" pt-1">{t('history_rental.name')}</label>
                                                <p className="form-control-static pt-none">Đặng Minh Phương</p>
                                            </div>
                                            <div className="form-group mb-none">
                                                <label className=" pt-2">{t('history_rental.phone')}</label>
                                                <p className="form-control-static pt-none">0963339999</p>
                                            </div>
                                            <div className="form-group mb-none">
                                                <label className=" pt-2">{t('history_rental.email')} </label>
                                                <p className="form-control-static pt-none">phuong90@gmail.com</p>
                                            </div>
                                            <div className="form-group mb-none">
                                                <label className=" pt-2">{t('history_rental.location_received')}</label>
                                                <p className="form-control-static pt-none">166 Phố Huê, Hai Bà Trưng</p>
                                            </div>
                                            <div className="form-group mb-none">
                                                <label className=" pt-2">{t('history_rental.payment_form')}</label>
                                                <p className="form-control-static pt-none">Nhận xe tại nhà</p>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="text-default mb-md mt-lg"><b>{t('history_rental.detail_reservation')}</b></p>
                                        <form className="cap">
                                            <div className="form-group  mb-none">
                                                <label className=" pt-1">{t('history_rental.status')}</label>
                                                <p className="form-control-static pt-none">Hoàn tất</p>
                                            </div>
                                            <div className="form-group  mb-none">
                                                <label className=" pt-1">{t('history_rental.payment_form')}</label>
                                                <p className="form-control-static pt-none">Trả sau</p>
                                            </div>
                                            <div className="form-group  mb-none">
                                                <label className=" pt-1">{t('history_rental.code_received')}</label>
                                                <p className="form-control-static pt-none">12345</p>
                                            </div>

                                            <div className="form-group  mb-none">
                                                <label className=" pt-1">{t('history_rental.value_tax')}</label>
                                                <p className="form-control-static pt-none">700,000 đ</p>
                                            </div>
                                            <div className="form-group mb-none">
                                                <label className=" pt-2">{t('history_rental.time_rental')}</label>
                                                <p className="form-control-static pt-none">04:30 05/05/2018 - 06h30
                                                    15/05/2018</p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <a href="#" className="btn mt-md">{t('history_rental.btn_back')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default translate('common')(HistoryRental);