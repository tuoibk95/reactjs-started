import React from 'react';
import Base from '../../core/Base';
import { translate } from 'react-i18next';
import { setScriptProductArea } from '../../../actions/handleScript';
import VehicleApi from '../../../actions/api/vehicle/VehicleApi';
import MyUtil from '../../../actions/format';
import VehicleItems from '../vehicle/VehicleItems';
import {Redirect} from 'react-router-dom';

class ProductArea extends Base {

    constructor(props) {
        super(props);
        this.state = ({
            listProducts: [],
            isNext: false,
            product: null
        })

    }

    async componentDidMount() {
        await VehicleApi.getVehicles().then(
            vehicles => this.setState({ listProducts: vehicles })
        );
        setScriptProductArea();
    }

    handleClickDetail = (product) => {
        this.setState({isNext: true, product})
    }

    renderProduct = (t, product) => {
        if (product) return (
            <li key={product.vhc_part_id}>
                <div className="top-product">
                    <div className="info-left">
                        <div className="product-name">
                            {product.vhc_part_name}
                        </div>
                        <span className="stars">
                            {VehicleItems.displayStar(product.vhc_part_star)}
                        </span>
                    </div>
                    <div className="info-right">
                        <div className="info">
                            {product.vhc.vhc_seat_num !== undefined &&
                                <div className="seat">{product.vhc.vhc_seat_num + " chỗ"}</div>}
                            {product.vhc.vhc_fuel_name !== undefined &&
                                <div className="station">{product.vhc.vhc_fuel_name}</div>}
                            {product.vhc.vhc_seat_num !== undefined && product.vhc.vhc_fuel_name !== undefined &&
                                <div className="clr"></div>}
                            {product.vhc.vhc_egin_num !== undefined &&
                                <div className="engine">{product.vhc.vhc_egin_num}</div>}
                            {(product.vhc.vhc_seat_num === undefined || product.vhc.vhc_fuel_name === undefined) &&
                                <div className="clr"></div>}
                            {product.vhc.vhc_tms_name !== undefined &&
                                <div className="ac">{product.vhc.vhc_tms_name}</div>}

                        </div>
                    </div>
                    <div>
                        <img src={product.vhc.vhc_imgs[0].vhc_img_link} alt="" />
                    </div>
                    <div className="bt">
                        <div className="btn btn-block" onClick={() => this.handleClickDetail(product)}><b>{t("featured_products.only")} {MyUtil.currencyFormat(product.vhc_part_defa_prie)} {t("featured_products.unit")}</b></div>
                    </div>
                </div>

            </li>
        );
    }

    render() {
        const t = this.props.t;
        const {isNext, product} = this.state;
        if (isNext) return <Redirect push to={{
            pathname: "/chi-tiet-xe/" + MyUtil.formatVehicleName(product.vhc_part_name),
            state: { vehicle: product }
          }} />
        return (
            <section className="product-area  bg-default">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="title">{t('products.title')}</h3>
                            <ul className="product-slide owl-carousel-product" data-columns='3'>

                                {this.state.listProducts.map((product) =>
                                    this.renderProduct(t, product)
                                )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default translate('common')(ProductArea);
