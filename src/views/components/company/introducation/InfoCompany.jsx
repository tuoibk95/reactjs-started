import React from 'react';
import Base from '../../../core/Base';
import { translate } from 'react-i18next';
import "../css/InfoCompany.css";
import { Player } from 'video-react';
import HeaderSubPage from '../header/HeaderSubPage';
var listFounder = []


class Company extends Base {
    constructor(props) {
        super(props);

        listFounder = [
            {
                "name": "Hoàng Hồng Minh",
                "position": "CEO - Founder",
                "img": "assets/images/about/founder.jpg"
            },
            {
                "name": "Nguyễn Thành Nam",
                "position": "Chief Operation Officer",
                "img": "assets/images/about/founder.jpg"
            },
            {
                "name": "Vũ Đại Thắng",
                "position": "Product Owner",
                "img": "assets/images/about/founder.jpg"
            },
            {
                "name": "Nguyễn Văn Hùng",
                "position": "Chief Technical Officer",
                "img": "assets/images/about/founder.jpg"
            }
        ]

        this.state = ({
            founders: listFounder
        })

    }



    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderFounder = (data) => {

    }



    render() {
        const t = this.props.t;
        const data = this.state.founders;
        return (
            <div>
                <div className="container-page-sub">
                    <HeaderSubPage title="VỀ CHÚNG TÔI" />
                    <div style={{ height: "400px" }}></div>
                    <div className="about-compapy">
                        <div className="des-company"> {t('about.company.l1')} <br /><br />{t('about.company.l2')}<br /><br />{t('about.company.l3')}</div>
                        <div className="video-company">
                            <Player

                                playsInline
                                poster="assets/images/about/about.jpg"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            />
                        </div>
                    </div>
                    <div className="body-about">
                        <img src="assets/images/about/pexels-photo.jpg" alt="" style={{ width: "40%", marginRight: "10%", height: "100%" }} />
                        <div className="child-right">
                            <p className="title-child-about">Tại sao chúng tôi </p>
                            <p className="text-why">{t('about.why-do.l1')}</p>
                            <p className="text-why">{t('about.why-do.l2')}</p>
                            <p className="text-why">{t('about.why-do.l3')}</p>
                            <p className="text-why">{t('about.why-do.l4')}</p>

                        </div>
                    </div>

                    <div className="body-about">

                        <div className="child-right">
                            <p className="title-child-about">Phương thức hoạt động </p>
                            <p className="text-why">{t('about.operating')}</p>
                        </div>
                        <img src="assets/images/about/pexels-photo-862734.jpg" alt="" style={{ width: "40%", marginLeft: "10%", height: "100%" }} />
                    </div>
                    <div className="body-about founders">
                        <div className="title-child-about" style={{ paddingLeft: "45%", width: "100%" }}>Đội ngũ</div>
                        <div style={{ display: "inline-flex", paddingBottom: "58px" }}>
                            {Object.keys(data).map((key) => {
                                return (
                                    <div className="item-founder">
                                        <img src={"" + data[key].img} alt="" style={{ width: "90%", height: "180px" }} />
                                        <p className="name-founder">{data[key].name}</p>
                                        <p className="position-founder">{data[key].position}</p>
                                    </div>)
                            })}
                        </div>

                    </div>

                </div>
            </div>

        );
    }


}

export default translate('common')(Company);