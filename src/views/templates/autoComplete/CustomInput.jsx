import React from 'react';
import { control } from 'react-validation';
import AutoCompleteInput from './AutoCompleteInput';
import { i18next } from '../../../actions/i18n';

const Input = ({ error, isChanged, isUsed, ...props }) => (
    <div>
        {console.log({error, isChanged, isUsed, ...props})}
        <AutoCompleteInput {...props} />
        {isChanged && isUsed && error ? <span className="form-error is-visible">{i18next.t('common:validate.required')}</span>: ""}
    </div>
);

const CustomInput = control(Input);

export {CustomInput}; 
