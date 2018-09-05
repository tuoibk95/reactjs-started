import React from 'react';

const VehicleItems = {
    displayStar: (star_num) => {
        var stars = [];
        for (var i = 0; i < star_num; i++) {
            stars.push(<img src="assets/images/icon/star-on.png" alt="vehicle" key={i} />)
        }
        if (star_num < 5)  
        for (var i = 5; i > star_num; i--) {
            stars.push(<img src="assets/images/icon/star-off.png" alt="vehicle" key={i} />)
        }
        return stars;
    },
    displayPayment: (payments) => {
        var disPays = [];
        if (payments.length > 0) {
            payments.map(pay => disPays.push( <span style={{marginRight: 5}} key={pay.pay_meth_name}><img style={{width: 20}} src={ pay.pay_meth_ico} alt="payment"  /> {pay.pay_meth_name}</span>))
        }
        return disPays;
    }
}

export default VehicleItems;