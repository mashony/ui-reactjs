import React from 'react';
import classNames from 'classnames';
import InlineError from './inlineError';
import Label from './label';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Input } from './inputs';

const StaffSelectValue = (props) => {

    const {readOnly} = props;

    const StaffSelectValueClass = classNames({
        'Select-value': true,
        'userselect__value': true,
        'readonly--inline': props.readOnly === 'inline',
        'readonly': props.readOnly
    });

    const errorImage = (ev) => {
        console.log("User image not existing");
        //ev.target.src = 'some default image url'
    }

    return (
        <div className={StaffSelectValueClass}>
         {props.value &&
                <div className="Select-value-label">
                    {!readOnly &&
                        <div className="userselect__value__text">{props.value.last_name}, {props.value.first_name}</div>
                    }
                    <div className="userselect__value__extended">
                        <img onError={errorImage} src={`http://gtd.wfp.org/media/pictures/auto/${props.value.email}.jpg`} />
                        {readOnly ? (
                            <div className="userselect__description">
                                <div className="userselect__value__text">
                                    {props.value.last_name}, {props.value.first_name}
                                </div>  
                                <span>{props.value.position_title}</span>
                                <span>{props.value.division}</span>
                            </div>
                        ):(
                            <div className="userselect__description">
                                <span>Job title: {props.value.position_title}</span>
                                <span>Org unit: {props.value.org_unit_name}</span>
                                <span>Duty station: {props.value.country}, {props.value.duty_station}</span>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    );
};

StaffSelectValue.propTypes = {
    children: PropTypes.node,
    value: PropTypes.object
};

const StaffSelect = (props) => {

    const { input, value, label, type, disabled, readOnly, loadOptions, disableEmpty} = props;

    const handleChange = (value) => {
        if (value || disableEmpty !== true) {
            input.onChange(value);
        }
    }

    if (!readOnly) {
        return (
            <InlineError {...props}>
                <Label>{label}</Label>
                <div className="userselect__wrapper">
                    <Select.Async
                        autoFocus
                        className="userselect__select"
                        id="state-select"
                        labelKey="text"
                        loadOptions={loadOptions}
                        name="selected-state"
                        onChange={handleChange}
                        placeholder="Enter last name to select employee"
                        searchable={true}
                        value={input.value}
                        valueComponent={StaffSelectValue}
                        valueKey="indexno"
                    />
                </div>
            </InlineError>
        )
    }
    else {
        return (
            <InlineError {...props}>
                <Label>{label}</Label>
                <StaffSelectValue readOnly={readOnly} value={value ? value : input ? input.value : undefined} />
            </InlineError>
        )
    }
};

StaffSelect.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    loadOptions: PropTypes.func,
    meta: PropTypes.object
};

export default StaffSelect;
