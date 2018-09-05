import React from 'react';
import Base from '../../core/Base';
import { translate } from 'react-i18next';
import VehicalDetails from './VehicalDetails';
import CustomerInfo from './CustomerInfo';
import Content from './Content';
import WizardProgress from '../WizardProgress';

class Complete extends Base {
    render() {
        return (
            <div>
                <WizardProgress step={4} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="left-info step2">
                                <CustomerInfo />
                                <VehicalDetails />
                            </div>
                        </div>
                        <Content />
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('common')(Complete);