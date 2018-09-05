import React from 'react';
import Base from '../../../core/Base';
import { translate } from 'react-i18next';
import "../css/Promotion.css"
import HeaderSubPage from '../header/HeaderSubPage';
var promotions = [];
var index = 0;


class Promotion extends Base {
    constructor(props) {
        super(props);
        promotions = [
            {
                "image": "assets/images/promotions/aleale.jpg",
                "des": "",
                "code": "CHUNGXEFLAS"
            },
            {
                "image": "assets/images/promotions/aleale.jpg",
                "des": "",
                "code": "CHUNGXEFLAS"
            },
            {
                "image": "assets/images/promotions/aleale.jpg",
                "des": "",
                "code": "CHUNGXEFLAS"
            },
            {
                "image": "assets/images/promotions/aleale.jpg",
                "des": "",
                "code": "CHUNGXEFLAS"
            },
            {
                "image": "assets/images/promotions/aleale.jpg",
                "des": "",
                "code": "CHUNGXEFLAS"
            }
        ]
        this.state = ({
            promotions: promotions
        })

    }



    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderFounder = (data) => {

    }

    render() {
        var n = 0;
        const t = this.props.t;
        const data = this.state.promotions;
        return (
            <div>
                <div className="container-page-sub" style={{ backgroundColor: "#f5f5f5" }}>
                    <HeaderSubPage title="KHUYẾN MẠI" />

                    <div className="body-child" style={{ paddingBottom: "50px", backgroundColor: "#f5f5f5" }}>
                        {Object.keys(data).map((key) => {
                            index++;

                            return (

                                <div className="item-promotion" key={data[key] + index}>
                                    <img src={"" + data[key].image} alt="" className="img-promotion" />
                                    <button className="btn-item-promotion">Xem chi tiết</button>
                                    <button className="copy-code-promotion">Copy mã</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default translate('common')(Promotion);



