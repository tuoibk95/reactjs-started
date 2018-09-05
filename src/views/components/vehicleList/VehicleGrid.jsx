import React from 'react';
import Base from '../../core/Base';
import { Redirect } from 'react-router-dom'
import { translate } from 'react-i18next';
import MyUtil from '../../../actions/format';
import VehicleItems from '../vehicle/VehicleItems';

class VehicleGrid extends Base {
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
            <div className="col-md-4 col-sm-6 " key={vehicle.vhc_part_id}>
                <div className="prod">
                    <a><img src={vehicle.vhc.vhc_imgs[0].vhc_img_link} alt="vehicle_image" /></a>
                    <div className="info-prod">
                        <p className="tit2">
                            {vehicle.vhc_part_name}
                        </p>
                        <div className="stars">
                            {VehicleItems.displayStar(vehicle.vhc_part_star)}
                        </div>
                        <a className="btn btn-block" onClick={() => this.onClick(vehicle)}>{MyUtil.currencyFormat(vehicle.vhc_part_defa_prie)} {t("select_carriage.vehicle.unit")}</a>
                    </div>
                </div>

            </div>
        );
    }

    render() {
        const { t } = this.props;
        var { vehicles, isNext, vehicle } = this.state;
        if (isNext && vehicle) {
            return <Redirect push to={{
                pathname: "/chi-tiet-xe/" + MyUtil.formatVehicleName(vehicle.vhc_part_name)  ,
                state: { vehicle: vehicle }
              }}/>
        }
        return (
            <div className="row grid-view mb-xlg">
                {vehicles.map(vehicle => this.getItem(t, vehicle))}
            </div>

        );
    }


}

export default translate('common')(VehicleGrid);