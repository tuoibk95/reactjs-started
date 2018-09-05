import React from 'react';
import { translate } from 'react-i18next';
import MyTabs from '../../components/user/tabs/MyTabs';
import DropdownMenu from './DropdownMenu';
import Language from './Language';
import Base from '../../core/Base';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Link } from 'react-router-dom'

class MainMenu extends Base {

    constructor(props) {
        super(props);
        var menuActive = [true, false, false, false, false]

        var user = reactLocalStorage.getObject("user.info", null);
        var userName = user ? user['username'] : null
        this.state = ({
            isOpenMomal: false,
            userInfo: user,
            userName: userName,
            menuActive: menuActive
        });
    }

    componentDidMount() {
        var menuActive = [true, false, false, false, false]

        var path = window.location.href;
        var n1 = path.search("promotions");
        console.log(n1)
        if (n1 !== -1) {
            menuActive = [false, false, false, true, false]
        }
        this.setState({ menuActive: menuActive })
    }
    handleCloseMenuMobile = () => {
        var menuMobile = document.getElementById("main-menu-mobi");
        console.log("menuMobile", menuMobile.style)
        if (menuMobile) {
            // menuMobile.hidden = true;
            menuMobile.style["0"] = ''
        }
    }

    componentWillReceiveProps = () => {

        var user = reactLocalStorage.getObject("user.info", null);
        var userName = user ? user['username'] : null
        this.setState({ userInfo: user, userName: userName })


        var menuActive = [true, false, false, false, false]

        var path = window.location.href;
        var n1 = path.search("promotions");
        console.log(n1)
        if (n1 !== -1) {
            menuActive = [false, false, false, true, false]
        }
        this.setState({ menuActive: menuActive })
    }


    handleOpenLogin = () => {
        this.setState({ isOpenMomal: true });

    };

    handleCloseLogin = (userInfo) => {
        var userName = userInfo ? userInfo['username'] : null
        this.setState({
            isOpenMomal: false,
            userInfo: userInfo,
            userName: userName
        });
    }

    handleLogout = () => {
        reactLocalStorage.set("user.token", "")
        reactLocalStorage.setObject("user.info", null)
        this.setState({
            userInfo: ""
        })
    }

    render() {
        const { t } = this.props;
        const { userInfo, isOpenMomal, menuActive } = this.state;
        console.log(menuActive[3] ? "active" : "")
        return (
            <div id="main-menu" className="main-menu">
                <MyTabs
                    isOpenMomal={isOpenMomal}
                    handleCloseMomal={this.handleCloseLogin.bind(this)}

                />
                <ul className="menu-responsive">
                    <div className="btn">{t("menu.btn")}</div>

                    <li className={menuActive[0] ? "active" : ""}>
                        <Link to="/">
                            <p style={{ color: "#000" }} title="">{t("menu.home")}</p>
                        </Link>
                    </li>

                    <li>
                        <a title="">{t("menu.support")}</a>
                    </li>
                    <li>
                        <a title="">{t("menu.search")}</a>
                    </li>
                    <li>
                        <Link to="/promotions" style={{ color: "#000" }} className={this.state.menuActive[3] ? "active" : ""} title="">{t("menu.promotion")}</Link>
                    </li>
                    {this.state.userInfo ?
                        <li className="hidden-md user">
                            <div>
                                <button type="button" className="" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    {this.state.userName} <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </button>
                                <DropdownMenu handleLogout={this.handleLogout.bind(this)} />
                            </div>
                        </li> : <li> <a onClick={this.handleOpenLogin.bind(this)}>{t("login.btn_login")}</a> </li>
                    }
                    <li className="lang hidden-md">
                        <Language />
                    </li>
                </ul>
            </div>
        );
    }
}

export default translate('common')(MainMenu);