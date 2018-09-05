import React from 'react';
import Base from '../core/Base';
import {translate} from 'react-i18next';

class WizardProgress extends Base {
    constructor(props) {
        super(props);
        this.state = {
            steps: [
                {id: 1, value: "", text: props.t("process.one")},
                {id: 2, value: "", text: props.t("process.two")},
                {id: 3, value: "", text: props.t("process.three")},
                {id: 4, value: "", text: props.t("process.four")}]
        }
    }

    componentWillMount = () => {
        var activeStep = this.props.step;
        var steps = this.state.steps;

        steps.map((s) => {
            (s.id < activeStep) ? s.value = "completed" : (s.id == activeStep) ? s.value = "active" : s.value = ""
        })

        this.setState({steps})
    }

    render() {
        const steps = this.state.steps;
        var step = parseInt(this.props.step);
        var width = step / 4 * 100 + "%";

        return (
            <div className="container">
                <div className="row  mt-xlg mb-md">
                    <div className="col-lg-7 col-md-9 m-auto">
                        <div className="wizard-progress ">
                            <div className="steps-progress">
                                <div className="progress-indicator" style={{width: width}}></div>
                            </div>
                            <ul className="nav wizard-steps">
                                {steps.map((s) =>
                                    <li className={"nav-item " + s.value} key={s.id}>
                                        <a className="nav-link"><span>{s.id}</span><i
                                            className="icon-check"></i> {s.text} </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('common')(WizardProgress);
