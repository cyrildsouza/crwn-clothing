import React from 'react';
import './formInputStyle.scss';

interface Props {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    value: string;
    type: string;
    required: boolean;
}

const FormInput: React.FunctionComponent<Props> = ({ handleChange, label, ...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps}/>
            { 
                label ?
                    <label className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>{label}</label>
                    :null
            }
        </div>
    );
};

export default FormInput;
