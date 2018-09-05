import React from 'react';
import Base from '../../core/Base';
import { Redirect } from 'react-router-dom'
import { translate } from 'react-i18next';
import MyUtil from '../../../actions/format';
import VehicleItems from '../vehicle/VehicleItems';

class VehicleList extends Base {
    constructor(props) {
        super(props);
        this.state = ({
            isNext: false,
            vehicles: props.vehicles,
            vehicle: null
        })

    }

    componentWillReceiveProps(next) {
        if (next.vehicles && next.vehicles !== this.state.vehicles) this.setState({ vehicles: next.vehicles })
    }

    onClick = (vehicle) => {
        this.setState({
            isNext: true,
            vehicle
        })
    }

    getItem = (t, vehicle) => {
        if (vehicle) return (
            <div className="prod" key={vehicle.vhc_part_id}>
                <a>
                    <img src={vehicle.vhc.vhc_imgs[0].vhc_img_link} />
                </a>
                <div className="info-prod">
                    <div className="pull-left">
                        <p className="tit2">
                            {vehicle.vhc_part_name}
                        </p>
                        <div className="stars large">
                            {VehicleItems.displayStar(vehicle.vhc_part_star)}
                        </div>
                        <div className="location">{vehicle.part.part_addr}</div>
                        <div className="engine">{vehicle.vhc.vhc_tms_name}</div>
                        <div className="note">{VehicleItems.displayPayment(vehicle.part.part_pay_meths)}</div>
                    </div>
                    <div className="pull-right text-right">
                        <div className="price">{MyUtil.currencyFormat(vehicle.vhc_part_defa_prie)} {t("select_carriage.vehicle.unit")} </div>
                        <p className="note"><i className="fa fa-info-circle"></i> {t("select_carriage.vehicle.note2")}</p>
                        <a className="btn" onClick={() => this.onClick(vehicle)}>{t("select_carriage.vehicle.btn_detail")}</a>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const t = this.props.t;
        var { vehicles, isNext, vehicle } = this.state;
        console.log(vehicles)
        if (isNext && vehicle) {
            return <Redirect push to={{
                    pathname: "/chi-tiet-xe/" + MyUtil.formatVehicleName(vehicle.vhc_part_name),
                    state: { vehicle: vehicle }
                }} />
        }
        return (
            <div className="row list-view mb-xlg">
                <div className="col-md-12">
                    {vehicles.map(vehicle => this.getItem(t, vehicle))}
                </div>
            </div>
        );
    }


}

export default translate('common')(VehicleList);