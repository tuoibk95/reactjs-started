import React from 'react';
import './App.css'
import { translate } from 'react-i18next';
import './App.css';
import Base from './core/Base';
import Main from './templates/Main';
import Header from './templates/Header';
import Footer from './templates/Footer';
import { AuthProvider, AuthConsumer } from 'react-check-auth';
import { reactLocalStorage } from 'reactjs-localstorage';
import { BASE_URL } from '../actions/constants';
import TypeApi from '../actions/api/vehicle/TypeApi';
import CityApi from '../actions/api/partner/CityApi';

class App extends Base {
    constructor(props) {
        super(props);
        this.state = {}
    }
    async componentWillMount() {
        this.handleChangeLanguage();
        if(reactLocalStorage.get("menu_default") == undefined){
            reactLocalStorage.set("menu_default", 0);
        }
        
        await CityApi.getAll().then(data => {
            console.log(data);
            reactLocalStorage.setObject("config.cities", data);
        })
    }

    handleChangeLanguage = () => {
        var token = reactLocalStorage.get("user.token");
        var languageUser = reactLocalStorage.get("user.language");
        var languagePage = reactLocalStorage.get("language");
        var lang = token ? languageUser : languagePage;

        lang = (lang === undefined || lang == "vi") ? "vi" : "en";

        this.props.i18n.changeLanguage(lang);
        reactLocalStorage.set("language", lang);
    }

    render() {

        var token = reactLocalStorage.get("user.token", "");
        var user = reactLocalStorage.getObject("user.info", null);
        var authUrl = user ? BASE_URL + "/users/" + user.id : "";
        var reqOptions = token && {
            'method': 'GET',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
        var isLogged = false;

        return (
            <AuthProvider authUrl={authUrl} reqOptions={reqOptions}>
                <AuthConsumer>
                    {({ isLoading, userInfo, error }) => {
                        if (isLoading) {
                            return (
                                <div className="layout-theme" style={{ backgroundColor: "#f5f5f5" }}>
                                    <div id="preloader">
                                        <div className="row loader">
                                            <img src="assets/images/favicon.png" />
                                            <div className="loader-icon"></div>
                                        </div>
                                    </div>
                                </div>);
                        }
                        if (error) {
                            isLogged = false;
                            console.log("Error")
                            reactLocalStorage.setObject("user.info", null);
                            reactLocalStorage.set("user.token", "");

                        } else if (userInfo) {
                            isLogged = true;
                            reactLocalStorage.setObject("user.info", userInfo);
                            reactLocalStorage.set("user.token", token);

                        }

                        return (

                            <div className="layout-theme" style={{ backgroundColor: "#f5f5f5" }}>
                                <Header {...isLogged} />
                                <Main />
                                <Footer />
                            </div>
                        );
                    }}
                </AuthConsumer>
            </AuthProvider>

        );
    }
}

export default translate('common')(App);