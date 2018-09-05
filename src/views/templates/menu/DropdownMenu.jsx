import React from 'react';
import Base from '../../core/Base';
import { translate } from 'react-i18next';
import { reactLocalStorage } from 'reactjs-localstorage';
import { logout } from '../../../actions/handleApi';
import { Link,Redirect } from 'react-router-dom'

class DropdownMenu extends Base {
    constructor(props) {
        super(props)
        this.state = ({ value: reactLocalStorage.get("menu_default"), redirect: false })
    }

    handleLogout = async () => {
        var isLogout = await logout();
        isLogout ? this.props.handleLogout() : null;
    }

    handleRedirect = () => {
        this.setState({redirect: true})
    }

    render() {
        const t = this.props.t;
        if (this.state.redirect)
            return <Link  to="/person_info/#/abc" />
        return (
            <div className="dropdown-menu">
                <a className="dropdown-item" onClick={this.handleRedirect}>
                    {/* <Link to="/person_info/#/abc"> */}
                    <i className="fa fa-folder-open"></i>{t('menu.account.history')}
                    {/* <p style={{ color: '#000', display: 'contents' }}> </p>*/}
                    {/* </Link> */}
                </a>
                <a className="dropdown-item">
                    <i className="fa fa-money"></i> {t('menu.account.payment')}
                </a>
                <div className="dropdown-item">
                    <i className="fa fa-user"></i> {t('menu.account.info')}
                </div>
                <div className="dropdown-item">
                    <i className="fa fa-gear"></i> {t('menu.account.password')}
                </div>
                <div className="dropdown-item" onClick={this.handleLogout.bind(this)}>
                    <i className="fa fa-sign-out"></i> {t('menu.account.exit')}
                </div>
            </div>
        );
    }
}

export default translate('common')(DropdownMenu);