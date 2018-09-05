import React from "react";
import {translate} from 'react-i18next';
import Tabs, {TabPane}from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import SwipeableInkTabBar from 'rc-tabs/lib/SwipeableInkTabBar';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'rc-tabs/assets/index.css';
import '../css/Tabs.css'
import Base from "../../../core/Base";
import Register from "./Register";
import Login from "./Login";

class MyTabs extends Base {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: props.isLogged
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        this.props.handleCloseMomal(null);
    }

    render() {
        const t = this.props.t
        var {isOpenMomal} = this.props;
        // isOpenMomal = true;
        return (
            <div>
                <Modal isOpen={isOpenMomal} toggle={this.toggle} style={{width: '378px', height: '600px'}}>
                    <ModalHeader toggle={this.toggle} style={{display: 'none'}}>
                    </ModalHeader>

                    <ModalBody>
                        <Tabs
                            defaultActiveKey="2"
                            renderTabBar={() => <SwipeableInkTabBar pageSize={2}/>}
                            renderTabContent={() => <TabContent />}
                        >
                            <TabPane tab="Đăng ký" key="1" > <Register handleCloseMomal = {this.props.handleCloseMomal}/> </TabPane>
                            <TabPane tab="Đăng nhập" key="2"> <Login handleCloseMomal = {this.props.handleCloseMomal}/> </TabPane> 
                        </Tabs>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default translate('common')(MyTabs);