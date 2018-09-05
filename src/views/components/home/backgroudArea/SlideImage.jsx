import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Slides.css';
import Base from '../../../core/Base';
import { translate } from 'react-i18next';


class SlideImage extends Base {

    constructor(props) {
        super(props);

        this.state = {
            listParner: [
                { image: "assets/images/banner1.jpg" },
                { image: "assets/images/banner2.jpg" },
                { image: "assets/images/banner3.jpg" }
            ]
        };
    }

    componentWillUnmount = () =>{
        this.setState({listParner: []})
    }

    render() {
        const t = this.props.t
        return (
            <Carousel 
                showThumbs={false}
                showArrows={false}
                infiniteLoop={true}
                swipeScrollTolerance={6}
                autoPlay={true}
                interval={5000}
                showStatus={false}
                onChange={this.onChange}
                onClickItem={this.onClickItem}
                onClickThumb={this.onClickThumb}>

                {this.state.listParner.map((slide) =>
                    <div id="slider" key={slide.image}>
                        <div id="slider-img">
                            <ul  className="slides">
                                <li><img src={slide.image} alt={slide.image} width="100%" style={{ minHeight: '100px' }} /> </li>
                            </ul>
                        </div>
                    </div>
                )}
            </Carousel>
        );
    }
}
export default translate("common")(SlideImage)