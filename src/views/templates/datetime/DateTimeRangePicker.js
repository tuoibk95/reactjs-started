import React from 'react';
import Base from '../../core/Base';

var $ = window.$ = window.jQuery;

class DateTimeRangePicker extends Base {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var options = {
            parentEl: "",
            startDate: new Date(),
            endDate: "",
            minDate: new Date(),
            maxDate: "",
            autoApply: true,
            singleDatePicker: false,
            showDropdowns: false,
            showWeekNumbers: false,
            showISOWeekNumbers: false,
            timePicker: true,
            timePicker24Hour: false,
            timePickerIncrement: 5,
            timePickerSeconds: false,
            dateLimit: false,
            ranges: false,
            locale: false,
            rtl: false,
            alwaysShowCalendars: false,
            linkedCalendars: true,
            autoUpdateInput: true,
            showCustomRangeLabel: false,
            opens: "right",
            drops: "down",
            buttonClasses: "btn btn-sm",
            applyClass: "btn-success",
            cancelClass: "btn-default"
        }

        options.locale = {
            direction: 'rtl', // : 'ltr'
            format: 'dd/mm/yyyy - HH:mm',
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
        };
        $('#config-demo').daterangepicker(options);

    }

    handleClick(e) {
        console.log(e)
        var options = {}
        $('#config-demo').daterangepicker(options, function (start, end, label) { console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')'); }).click();;
        // this.props.handleClick();
    }

    render() {
        return (
            <input type="text" id="config-demo" className="form-control" onFocus={this.handleClick} />

        );
    }
}

export default DateTimeRangePicker;
