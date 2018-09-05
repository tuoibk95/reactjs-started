import React from 'react'
import Base from '../../../../core/Base'
import { translate } from 'react-i18next';
import { reactLocalStorage } from 'reactjs-localstorage';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import '../../css/UserInfo.css'
import { IconButton } from 'material-ui';
import DialogChangeInfo from './DialogChangeInfo';
import VarConf from '../../../../core/VarConf';
import icEdit from '../../icon/ic-pen.png'

class ProfileDetail extends Base {

    constructor(props) {
        super(props);

        this.state = ({
            isOpenMomal: false,
            user: reactLocalStorage.getObject("user.info")

        })

    }

    componentWillMount(){
        reactLocalStorage.get("menu_default", 2);
    }

    handleCloseChangeInfo = () => {
        this.setState({
            isOpenMomal: false
        })
    }

    handleOpenChangeInfo = () => {
        this.setState({
            isOpenMomal: true
        })
    }
    render() {
        const t = this.props.t
        const { isOpenMomal, user } = this.state;


        return (
            <div>
                <DialogChangeInfo
                    isOpenMomal={isOpenMomal}
                    handleCloseMomal={this.handleCloseChangeInfo.bind(this)}
                />
                <div className="right-content">
                    <div className="group">
                        <div className="row form-right">
                            <p className="title-top">{t('user_info.title')}</p>
                            <div style={{ marginTop: '28px', display: 'inherit', width: '100%' }}>
                                <img className="image-user" src="assets/images/avatar.jpg" />
                                <div style={{ marginLeft: '24px' }}>
                                    <p className="title-info">{t('user_info.name')}</p>
                                    {/* <p style={{ marginBottom: '10px' }}>{user.username}</p> */}
                                    <p style={{ marginBottom: '10px' }}></p>

                                    <p className="title-info">{t('user_info.phone')}</p>
                                    {/* <p style={{ marginBottom: '10px' }}>{user.phone}</p> */}
                                    <p style={{ marginBottom: '10px' }}></p>

                                    <p className="title-info">{t('user_info.email')}</p>
                                    {/* <p style={{ marginBottom: '10px' }}>{user.email}</p> */}
                                    <p style={{ marginBottom: '10px' }}></p>
                                </div>
                                <button className="btn-edit" onClick={this.handleOpenChangeInfo.bind(this)}>
                                    <div style={{ margin: '0 auto', display: 'inherit' }}>
                                        <img src={icEdit} height="13" className="ic-edit" />
                                        <p className="text-edit">{t('user_info.edit')}</p>
                                    </div>
                                </button>
                            </div>

                            <p className="title-info" style={{ marginTop: '30px' }}>{t('user_info.license')}</p>
                            <div style={{ marginTop: '14px', display: 'inherit', width: '100%' }}>
                                <button className="frames-image">
                                    <img src="assets/images/icon/ic-add.png" height='18' className="ic" />
                                   
                                    <label htmlFor="upload-photo"> {t('user_info.add_license')}</label>
                                    <input type="file" name="photo" id="upload-photo" />
                                    
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default translate('common')(ProfileDetail);