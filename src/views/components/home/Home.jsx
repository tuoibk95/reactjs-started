import React from 'react';
import Base from '../../core/Base';
import BackgroundArea from './backgroudArea/BackgroundArea';
import UsefulArea from './UsefulArea';
import ProductArea from './ProductArea';
import HowitWorkArea from './HowitworkArea';
import MediaArea from './MediaArea';
import PartnerArea from './PartnerArea';
import BookingFix from './BookingFix';

export default class Home extends Base {

    render() {
        return (
            <div>
                <BackgroundArea/>
                <BookingFix/>
                <UsefulArea/>
                <ProductArea/>
                <HowitWorkArea/>
                <MediaArea/>
                <PartnerArea/>
            </div>
        );
    }
}