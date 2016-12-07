import React from 'react';

const renderInputField = ( {input, label, type, meta: { touched, error, warning, invalid }} ) => (
    <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
        <label htmlFor={label} className={touched && invalid ? 'text-danger' : ''}>{label}</label>
        <input {...input} className="form-control" id={label} type={type} placeholder={`${label}...`} />
        { touched && ((error && <p className="text-danger fwb-fz1m">{error}</p>) || (warning && <span className="text-warning fwb-fz1m">{warning}</span>)) }
    </div>
);

export default renderInputField;