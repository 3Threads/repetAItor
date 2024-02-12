import React, {useState} from 'react';

interface CustomSwitchProps {
    checked: boolean;
    setChecked: (checked: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({checked, setChecked}) => {

    return (
        <div className={`custom-switch ${checked ? 'checked' : ''}`} onClick={() => setChecked(!checked)}>
            <div className="switch-slider"/>
            <div className="switch-text">
                <span className="monthly" style={{paddingLeft: '8px'}}>Monthly</span>
                <span className="annually" style={{paddingRight: '8px'}}>Annually</span>
            </div>
        </div>
    );
};

export default CustomSwitch;
