import React from 'react';
import {BasicButton} from "../../BasicComponents/BasicButton";
import {CheckBoxComponent} from '../../BasicComponents/CheckBoxComponent';
import {InputComponent} from "../../BasicComponents/InputComponent";


export const AllComponents = () => {
    return (
        <div className="App">
            <BasicButton/>
            <CheckBoxComponent/>
            <InputComponent/>
        </div>
    );
}


