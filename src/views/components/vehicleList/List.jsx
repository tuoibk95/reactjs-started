import React from 'react';
import Base from '../../core/Base';
import {translate} from 'react-i18next';
import InfoPickCar from './InfoPickCar';
import OptionView from './OptionView';
import VehicleGrid from './VehicleGrid';
import VehicleList from './VehicleList';
import WizardProgress from '../WizardProgress'
import VehicleApi from '../../../actions/api/vehicle/VehicleApi';

class List extends Base {
    constructor(props) {
        super(props);
        this.state = ({
            viewGrid: true,
            vehicles: []
        })

        this.onChangeOptionView = this.onChangeOptionView.bind(this);
    }

    async componentDidMount(){
        window.scrollTo(0, 0);
        await VehicleApi.getVehicles().then(
            vehicles =>  this.setState({vehicles})
        );
    }

    onChangeOptionView(value) {
        this.setState({viewGrid: value});
    }

    render() {
        var {vehicles} = this.state;
        console.log(vehicles)
        return (
            <div>
                <WizardProgress step={1}/>
                <div className="container">
                    <div className="row">
                        <InfoPickCar/>
                        <div className="col-lg-8 col-md-12">
                            <div className="right-content">
                                <OptionView
                                    changeOptionView={this.onChangeOptionView}
                                    isGridView={this.state.viewGrid}
                                />
                                {this.state.viewGrid ? <VehicleGrid vehicles={vehicles}/> : <VehicleList vehicles={vehicles}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default translate('common')(List);