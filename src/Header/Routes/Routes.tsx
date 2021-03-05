import {Route} from "react-router-dom";
import React from "react";
import {pages} from "./Path";
import {InputComponent} from "../../BasicComponents/InputComponent";
import {BasicButton} from "../../BasicComponents/BasicButton";
import {CheckBoxComponent} from "../../BasicComponents/CheckBoxComponent";

export const Routes = () => {
    return (

        <div className="App">

            <div>
                <Route path={'/allComponents'} render={() => <InputComponent/>}/>
                <Route path={'/allComponents'} render={() => <BasicButton/>}/>
                <Route path={'/allComponents'} render={() => <CheckBoxComponent/>}/>
            </div>
            {pages.map(t => {
                    return (
                        <Route exact key={t.id} path={t.path} render={() => t.page}/>
                    )
                }
            )}

        </div>
    );
}