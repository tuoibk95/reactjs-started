import React from 'react';
import Base from '../../core/Base';
import { translate } from 'react-i18next';
import InfoUnitPrice from './InfoUnitPrice';
import WizardProgress from '../WizardProgress'
import VehicleInfo from './VehicleInfo';
import VehicleApi from '../../../actions/api/vehicle/VehicleApi';
import MyUtil from '../../../actions/format';
import { reactLocalStorage } from 'reactjs-localstorage';

class VehicleDetail extends Base {
    constructor(props) {
        super(props);
        this.state = ({
            vehicle: null,
            vehicle_name: MyUtil.getVehicleName(props.match.params.name)
        })
        console.log(props)
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        var name = this.state.vehicle_name;
        if (name) await VehicleApi.getVehicleByName(name).then(
            vehicle => {
                reactLocalStorage.setObject("booking.vehicle", vehicle)
                this.setState({ vehicle })
            }
        ).catch(err => console.log(err));

    }

    render() {
        const { vehicle } = this.state;
        return (
            <div>
                <WizardProgress step={2} />
                {vehicle ?
                    <div className="container">
                        <div className="row">
                            <VehicleInfo vehicle={vehicle} />
                            <InfoUnitPrice vehicle={vehicle}  />
                        </div>
                    </div>
                    : null}
            </div>
        );
    }
}

export default translate('common')(VehicleDetail)