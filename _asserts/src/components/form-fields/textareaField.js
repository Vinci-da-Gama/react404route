import React from 'react';

const renderTextAreaField = ({ input, label, type, meta: { touched, error, invalid } }) => (
    <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
        <label htmlFor={label} className={touched && invalid ? 'text-danger' : ''}>{label}</label>
        <textarea {...input} className="form-control minheight-100px" id={label} placeholder={`${label}...`} />
        {touched && error && <p className="text-danger fwb-fz1m"><i className="glyphicon glyphicon-remove-circle"></i> {error}</p>}
    </div>
);

export default renderTextAreaField;