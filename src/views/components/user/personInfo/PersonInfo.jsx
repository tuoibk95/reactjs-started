import React from 'react';
import Base from '../../../core/Base';
import { translate } from 'react-i18next';
import { reactLocalStorage } from 'reactjs-localstorage';
import MenuLeft from './MenuLeft';
import ChangePassword from './ChangePassword';
import History from './historyRental/HistoryRentalList'
import HistoryRental from './historyRental/HistoryRental'
import ProfileDetail from './userInfo/ProfileDetail'
import PaymentInfo from './PaymentInfo'
import { Redirect } from 'react-router-dom'
import { Route, Switch, Link } from "react-router-dom";
import HistoryRentalList from './historyRental/HistoryRentalList';
import PersonInfoContent from './PersonInfoContent';


class PersonInfo extends Base {

    constructor(props) {
        super(props);

        this.state = ({
            value: reactLocalStorage.get("menu_default"),
            // isLogin: reactLocalStorage.get("user.token") ? true : false
        })
    }

    componentDidMount() {
        var path = this.props.location.pathname;
        var index = {
            "/person_info": 0,
            "/person_info/history": 0,
            "/person_info/payment": 1,
            "/person_info/profile_detail": 2,
            "/person_info/change_password": 3
        }
        reactLocalStorage.set("menu_default", index[path]);
        this.setState({ value: reactLocalStorage.get("menu_default") })

    }

    handleChangeTab = (value) => {
        this.setState({ value: value });
        reactLocalStorage.set("menu_default", value);
    }

    render() {
        const { t, match } = this.props
        const { value, isLogin } = this.state;
        console.log(this.props.match)

        // if (!isLogin)
        //     return <Redirect push to="/" />

        return (
            <div className="container">
                <div className="row mt-xlg mb-md">
                    <div className="col-lg-4 col-md-12">
                        <MenuLeft value={this.state.value} handleChangeTab={this.handleChangeTab} match={match} />

                    </div>
                    <div className="col-lg-8 col-md-12">
                        <Route exact path={match.url} render={() =>
                            <HistoryRentalList />} />
                        <Route path={`${match.url}/:accountId`} component={PersonInfoContent} />
                    </div>
                </div>
            </div>

        );
    }
}

export default translate('common')(PersonInfo);