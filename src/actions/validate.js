import React from 'react'
import {isEmail, isAlpha, isMobilePhone} from 'validator';
import {i18next} from './i18n';
const validates = {
    maxLength: 8,
    minLengthPass: 6,
    minAddress: 3
};
const required = (value, props) => {
    if (!value || (props.isCheckable && !props.checked)) {
        return <span className="form-error is-visible">{i18next.t('common:validate.required')}</span>;
    }
};

const email = (value, props) => {
    if (!isEmail(value,{ 'allow_utf8_local_part': false})) {
        return <span className="form-error is-visible">{i18next.t('common:validate.email')}</span>;
    } else return false
};

const phone = (value) => {
    if (!isMobilePhone(value, 'vi-VN')) {
        return <span className="form-error is-visible">{i18next.t('common:validate.phone')}</span>;
    } return false
};

const password = (value) => {
    if (value.toString().trim().length < validates.minLengthPass) {
        return <span className="form-error is-visible">{i18next.t('common:validate.password')}</span>;
    } return false
};

const emailAndPhone = (value) => {
    if (phone(value) && email(value)) return <span className="form-error is-visible">{i18next.t('common:validate.email_phone')}</span>;
}

const confirm = (value, props, components) => {
    const bothUsed = components.password[0].isUsed && components.confirm[0].isUsed;
    const bothChanged = components.password[0].isChanged && components.confirm[0].isChanged;
  
    if (bothChanged && bothUsed && components.password[0].value !== components.confirm[0].value) {
      return <span className="form-error is-visible">{i18next.t('common:validate.confirm')}</span>;
    }
  };

const address = (value) => {
    if (value.toString().trim().length < validates.minAddress) {
        return <span className="form-error is-visible">{i18next.t('common:validate.required')}</span>;
    } return false
}

const alpha = (value) => {
    if (!isAlpha(value)) {
        return <span className="form-error is-visible">{value} không đúng định dạng alpha.</span>;
    }
}
const lt = (value, props) => {
    var lengthValue = value.toString.length;
    if (lengthValue > props.maxLength || lengthValue < props.minLength) {
        return <span className="error">Mật khẩu từ {props.minLength} - {props.maxLength} kí tự</span>
    }
};


export {
    required,
    email,
    password,
    alpha,
    lt,
    phone,
    confirm,
    emailAndPhone,
    address
}
