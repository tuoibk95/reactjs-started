import React from 'react';
import Base from '../../core/Base';
import {translate} from 'react-i18next';
import WizardProgress from '../WizardProgress';
import Vehicle from './vehicle/Vehicle';
import Customer from './customer/Customer';

class CustomerInfo extends Base {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <WizardProgress step={3}/>
                <div className="container">
                    <div className="row">
                        <Vehicle />
                        <Customer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('common')(CustomerInfo);
