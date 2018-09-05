import React from 'react';
import Base from '../../core/Base';

class DatetimePicker extends Base {
    constructor(props) {
        super(props);
    }

    handleFocus = () => {

    }

    render() {
        const {id, placeholder} = this.props
        return (
            <div className="controls input-append date form_datetime"
                data-date-format="dd/mm/yyyy - hh:ii"
                data-link-field="dtp_input2"
                data-link-format="yyyy-mm-dd hh-ii">
                <input size="16" type="text" defaultValue={rentalDate} style={styles.input_datatime} id="qb_rentalDatetime"
                    placeholder={placeholder} onFocus={this.handleFocus} />
                <span className="add-on"><i className="icon-remove"></i></span>
                <span className="add-on"><i className="icon-th"></i></span>
            </div>
        );
    }
}

const styles= {
    input_datatime: {
        paddingLeft: '45px'
    }
}