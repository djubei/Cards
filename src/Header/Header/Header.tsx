import React from 'react';
import {Routes} from "../Routes/Routes";
import {Links} from "../Links/Links";
import {Switch} from 'react-router-dom';


export const Header = () => {
    return (
        <div className="App">
            <Links/>
            <Switch>
                <Routes/>
            </Switch>

        </div>
    );
}


