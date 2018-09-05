import React from 'react';
import Base from '../core/Base';
import {translate} from 'react-i18next';
import {Link} from 'react-router-dom'
import ButtonMenu from './menu/ButtonMenu';
import MainMenu from './menu/MainMenu';

class Header extends Base {
    

    render() {
   
        return (
            <header id="header" className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="logo" className="logo">
                                <Link to="/" title="Chung xe">
                                <img src="assets/images/logo.png" alt="" />
                                </Link>
                            </div>
                            <div className="navigation">
                                <ButtonMenu/>
                                <MainMenu/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }


}

export default translate('common')(Header);