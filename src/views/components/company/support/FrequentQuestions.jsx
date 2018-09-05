import React from 'react';
import Base from '../../../core/Base';
import {translate} from 'react-i18next';
import "../css/FrequentQuestions.css";
import HeaderSubPage from '../header/HeaderSubPage';

class FrequentQuestions extends Base {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        const t = this.props.t;
        return (
                <div className="container-page-sub">
                    <div className="row">
                        <HeaderSubPage title="CÂU HỎI THƯỜNG GẶP" />
                        <div style = {{height:"400px"}}></div>
                        <div className="questions-frequently">
                            <div className="des-questions"> {t('questions.frequently.l1')} <br /><br />{t('questions.frequently.l2')}</div>
                        </div>
                        
                    </div>

                    <div className="body-questions">
                        <img src="assets/images/about/pexels-photo.jpg" alt="" style={{ width: "50%", marginRight: "3%", height: "100%" }} />
                        <div className="child-right">
                            <p className="title-child-questions">Tại sao nên trở thành đối tác của chúng tôi</p>
                            <p className="text-why">{t('questions.why-do.l1')}</p>
                            <p className="text-why">{t('questions.why-do.l2')}</p>
                            <p className="text-why">{t('questions.why-do.l3')}</p>
                            <p className="text-why">{t('questions.why-do.l4')}</p>
                            <p className="text-why">{t('questions.why-do.l5')}</p>
                            <p className="title-child-questions">Cách tham gia cộng đồng Chung Xe</p>
                            <p className="text-why">{t('questions.why-do.l6')}</p>
                            <p className="text-why">{t('questions.why-do.l7')}</p>
                            <p className="text-why">{t('questions.why-do.l8')}</p>
                            <p className="title-child-questions">Điều kiện tham gia</p>
                            <p className="text-why">{t('questions.why-do.l9')}</p>

                        </div>
                    </div>

                    <div className="body-questions">
                        <div className="child-right">
                            <p className="title-child-questions">Chung Xe có thu phí giao dịch không?</p>
                            <p className="text-why">{t('questions.why-do.l10')}</p>
                            <p className="title-child-questions">Chung Xe có chịu trách nhiệm gì về giao dịch thuê xe không?</p>
                            <p className="text-why">{t('questions.why-do.l11')}</p>
                            <p className="title-child-questions">Nếu tôi đang chạy xe và xe bị hư thì tôi phải làm sao?</p>
                            <p className="text-why">{t('questions.why-do.l12')}</p>
                            <p className="title-child-questions"> Làm thế nào khi chủ xe bắt đền các hư hại của xe mà không phải do tôi gây ra lúc trả xe?</p>
                            <p className="text-why">{t('questions.why-do.l13')}</p>
                        </div>
                        <img src="assets/images/about/pexels-photo-862734.jpg" alt="" style={{ width: "40%", marginLeft: "10%", height: "100%" }} />

                    </div>

                    <div className="body-questions">
                        <img src="assets/images/about/pexels-photo.jpg" alt="" style={{ width: "50%", marginRight: "3%", height: "100%" }} />
                        <div className="child-right">
                            <p className="title-child-questions">Chung Xe có chịu trách nhiệm gì về giao dịch thuê xe không?</p>
                            <p className="text-why">{t('questions.why-do.l14')}</p>
                            <p className="title-child-questions">Làm sao để đảm bảo xe của tôi an toàn khi khách thuê?</p>
                            <p className="text-why">{t('questions.why-do.l15')}</p>
                            <p className="text-why">{t('questions.why-do.l16')}</p>
                            <p className="text-why">{t('questions.why-do.l17')}</p>
                            <p className="text-why">{t('questions.why-do.l18')}</p>
                            <p className="text-why">{t('questions.why-do.l19')}</p>
                            <p className="text-why">{t('questions.why-do.l20')}</p>
                            <p className="title-child-questions">Nếu xe tôi bị hư hỏng thì xử lý như thế nào?</p>
                            <p className="text-why">{t('questions.why-do.l21')}</p>

                        </div>
                    </div>
                </div>

        );
    }


}

export default translate('common')(FrequentQuestions);