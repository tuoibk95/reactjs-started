import React from 'react';
import Base from '../../core/Base';
import { translate } from 'react-i18next';
import VehicleItems from '../vehicle/VehicleItems';
import ConfigApi from '../../../actions/api/config/ConfigApi';
import { reactLocalStorage } from 'reactjs-localstorage';

class VehicleInfo extends Base {
    constructor(props) {
        super(props);
        this.state = {
            config: []
        }
        console.log(props)
    }

    async componentDidMount() {
        await ConfigApi.getConfig().then(
            config => {
                this.setState({ config })
                reactLocalStorage.setObject("config.vehicle_icon", config)
            }
        );
    }

    render() {
        const { t, vehicle } = this.props;
        const { config } = this.state;
        return (
            <div className="col-lg-8 col-md-8">
                <div className="left-content">
                    <div className="shadow p-lg mb-xlg">
                        <div className="model row">
                            <div className="col-sm-6">
                                <a><img src={vehicle.vhc.vhc_imgs[0].vhc_img_link} className="" /></a>
                            </div>
                            <div className="col-sm-6">
                                <div className="tit3 mt-md mb-xs">{vehicle.vhc_part_name}</div>
                                <div className="stars large mb-md">
                                    {VehicleItems.displayStar(vehicle.vhc_part_star)}
                                </div>
                                {config.length > 0 ?
                                    <div className="info mb-none">
                                        <div> <img src={config.find(c => c.vhc_conf_code === "vhc_fuel").vhc_conf_vn} className="vhc_icon" /><span>{vehicle.vhc.vhc_fuel_name}</span></div>
                                        {vehicle.vhc.vhc_egin_num ? <div> <img src={config.find(c => c.vhc_conf_code === "vhc_engine").vhc_conf_vn} className="vhc_icon" /><span>{vehicle.vhc.vhc_egin_num}</span></div> : null}
                                        {vehicle.vhc.vhc_tms_name ? <div> <img src={config.find(c => c.vhc_conf_code === "vhc_tms").vhc_conf_vn} className="vhc_icon" /><span>{vehicle.vhc.vhc_tms_name}</span></div> : null}
                                        {vehicle.vhc.vhc_seat_num ? <div> <img src={config.find(c => c.vhc_conf_code === "vhc_seat").vhc_conf_vn} className="vhc_icon" /><span>{vehicle.vhc.vhc_seat_num} chỗ</span></div> : null}
                                        {vehicle.vhc.vhc_dgn_name ? <div> <img src={config.find(c => c.vhc_conf_code === "vhc_design").vhc_conf_vn} className="vhc_icon" /><span>{vehicle.vhc.vhc_dgn_name}</span></div> : null}
                                        {vehicle.vhc.vhc_fuel_csum_num? <div> <img src={config.find(c => c.vhc_conf_code === "vhc_fuel_consumption").vhc_conf_vn} className="vhc_icon" /><span>{vehicle.vhc.vhc_fuel_csum_num} lít</span></div>: null }
                                    </div>
                                    : null}
                            </div>
                        </div>
                        <div className="row mt-xlg">
                            <div className="col-md-12">
                                <div className="mb-md">
                                    <div className="b-tit">{t("preview_price.info_left.describe")}</div>
                                    <p>{vehicle.vhc.vhc_des}</p>
                                </div>
                                <div className="mb-md">
                                    <div className="b-tit">{t("preview_price.info_left.features")}</div>
                                    <div className="row i-lg">
                                        {vehicle.vhc.vhc_opts.map(opt =>
                                            <div className="col-lg-4 col-md-6 mb-md" key={opt.vhc_opt_id}><img src={opt.vhc_opt_ico} alt={opt.vhc_opt_name} className="vhc_icon" /><span>{opt.vhc_opt_name}</span></div>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-md">
                                    <div className="b-tit">{t("preview_price.info_left.procedure")}</div>
                                    <div className="row i-lg">
                                        {vehicle.part.part_procs.map(pp =>
                                            <div className="col-lg-4 col-md-6 mb-md" key={pp.part_proc_id}>
                                                <span style={{float: "left"}}><img src={pp.proc.proc_ico} alt="procedure" className="vhc_icon" /></span>
                                                {pp.part_proc_note !== "" ? <span style={{float: "right", width: "177px"}}>{pp.proc.proc_name}: {pp.part_proc_note}</span> : <span>{pp.proc.proc_name}</span>}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-md">
                                    <div className="b-tit">{t("preview_price.info_left.payment")}</div>
                                    <div className="row i-lg">
                                        {vehicle.part.part_pay_meths.map(pth =>
                                            <div className="col-lg-4 col-md-6 mb-md" key={pth.pay_meth_id}>
                                                <span style={{float: "left"}}><img src={pth.pay_meth_ico} alt="payment" className="vhc_icon" /></span>
                                                <span style={{float: "right", width: "177px"}}>{pth.pay_meth_name}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('common')(VehicleInfo)