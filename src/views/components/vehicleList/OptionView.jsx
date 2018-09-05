import React from 'react';
import Base from '../../core/Base';
import {translate} from 'react-i18next';

class OptionView extends Base {
    constructor(props) {
        super(props);

        this.state = ({
            isCheckedGrid: props.isGridView
        })
    }

    onChangeListView = (e) => {
        this.props.changeOptionView(false);
        this.setState({isCheckedGrid: false})
    }

    onChangeGridView = (e) => {
        this.props.changeOptionView(e.target.checked);
        this.setState({isCheckedGrid: true})
    }


    render() {
        const {t} = this.props;

        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="shadow">
                        <div className="form-row">
                            <div className="col-lg-12">
                                <div className="input-form select-box loc">
                                    <select name="cruise-line">
                                        <option value="">{t("select_carriage.options.range")}</option>
                                        <option value="">{t("select_carriage.options.increase")}</option>
                                        <option value="">{t("select_carriage.options.reduction")}</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">

                    <div className="shadow">
                        <div className="form-row button-radio">
                            <div className="col-xs-6 col-sm-6 pr-none">
                                <div className="radio-custom radio-inline mt-none text-center">
                                    <input
                                        type="radio"
                                        id="grid"
                                        name="viewmode"
                                        onClick={this.onChangeGridView}
                                        defaultChecked/>
                                    <label htmlFor="grid">
                                        <div className="grid">{t("select_carriage.options.grid")}</div>
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 pl-none">
                                <div className="radio-custom radio-inline mt-none text-center">
                                    <input
                                        type="radio"
                                        id="list"
                                        name="viewmode"
                                        onClick={this.onChangeListView}
                                    />
                                    <label htmlFor="list">
                                        <div className="list">{t("select_carriage.options.list")}</div>
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

export default translate('common')(OptionView);