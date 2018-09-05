import React from 'react';
import { Route, Switch } from "react-router-dom";
import { translate } from 'react-i18next';

import Base from '../core/Base';
import Home from '../components/home/Home';
import CustomerInfo from '../components/customerInfo/CustomerInfo';
import Complete from '../components/complete/Complete';
import VehicleList from '../components/vehicleList/List';
import VehicleDetail from '../components/vehicleDetail/VehicleDetail';
import PaymentInfo from '../components/user/personInfo/PaymentInfo';
import InsurancePolicy from '../components/company/policy/InsurancePolicy';
import Incident from '../components/company/policy/Incident';
import PartnerPolicy from '../components/company/policy/PartnerPolicy';
import ServicePolicy from '../components/company/policy/ServicePolicy';
import Company from '../components/company/introducation/InfoCompany';
import InfoPartner from '../components/company/introducation/InfoPartner';
import InfoRecruitment from '../components/company/introducation/InfoRecruitment';
import News from '../components/company/introducation/News';
import RentalGuide from '../components/company/support/RentalGuide';
import UseGuide from '../components/company/support/UseGuide';
import FrequentQuestions from '../components/company/support/FrequentQuestions';
import TravelHandbook from '../components/company/support/TravelHandbook';
import PersonInfo from '../components/user/personInfo/PersonInfo';
import ProfileDetail from '../components/user/personInfo/userInfo/ProfileDetail';
import Promotion from '../components/company/promotion/Promotion';


class Main extends Base {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route exact path="/tim-xe" component={() => <VehicleList />} />
                    <Route path="/tim-xe/:typeId/:brandId/:rentalDate/:returnDate" component={() => <VehicleList />} />
                    <Route exact path="/chi-tiet-xe/:name" component={VehicleDetail} />
                    <Route exact path="/thong-tin-khach-hang" component={() => <CustomerInfo />} />
                    <Route exact path="/hoan-thanh" component={() => <Complete />} />
                    <Route path="/person_info" component={PersonInfo} />
                    <Route exact path="/promotions" component={(value) => <Promotion/>} />
                    <Route exact path="/introduction/about" component={(value) => <Company />} />
                    <Route exact path="/introduction/partner" component={(value) => <InfoPartner />} />
                    <Route exact path="/introduction/recruitment" component={(value) => <InfoRecruitment />} />
                    <Route exact path="/introduction/news" component={(value) => <News />} />
                    <Route exact path="/policy/insurance" component={(value) => <InsurancePolicy />} />
                    <Route exact path="/policy/partner" component={(value) => <PartnerPolicy />} />
                    <Route exact path="/policy/service" component={(value) => <ServicePolicy />} />
                    <Route exact path="/policy/incident" component={(value) => <Incident />} />
                    <Route exact path="/support/car_rental" component={(value) => <RentalGuide />} />
                    <Route exact path="/support/use" component={(value) => <UseGuide />} />
                    <Route exact path="/support/questions" component={(value) => <FrequentQuestions />} />
                    <Route exact path="/support/handbook" component={(value) => <TravelHandbook />} />
                    <Route component={NoMatch} />

                </Switch>
            </main>
        );
    }
}

const NoMatch = ({ location }) => (
    <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
);
export default translate('common')(Main);