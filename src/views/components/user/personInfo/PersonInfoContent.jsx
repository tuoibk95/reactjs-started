import React from 'react';
import HistoryRentalList from './historyRental/HistoryRentalList';
import PaymentInfo from './PaymentInfo';
import ProfileDetail from './userInfo/ProfileDetail';
import ChangePassword from './ChangePassword';
import {reactLocalStorage} from 'reactjs-localstorage'

const PersonInfoContent = ({ match }) => {
    var value = match.params ? match.params.accountId :"";
    var  index = {"history" : 0, "payment": 1, "profile_detail":2, "change_password": 3 }
    var page = index[value];

    return (
        <div>
            {(page === 0) && <HistoryRentalList />}
            {(page === 1) && <PaymentInfo />}
            {(page === 2) && <ProfileDetail />}
            {(page === 3) && <ChangePassword />}
        </div>
)};
export default PersonInfoContent;