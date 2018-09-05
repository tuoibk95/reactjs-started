import React from 'react';
import Base from '../../../core/Base';
import { translate } from 'react-i18next';
import DatePicker from 'react-datepicker'

class CustomDatePicker extends Base {

    constructor (props){
        super(props);
        this.state={
            date: ""
        }
    }

    handleChange = () => {
        alert("hi")
    }


    render () {
        return (
                <DatePicker 
                onChange={this.handleChange} 
                placeholder="Placeholder" 
                value={this.state.date} 
                id="change_handler_example" />
        );

    }
}

export default translate("common")(CustomDatePicker);