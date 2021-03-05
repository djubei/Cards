import React from 'react';
import {Links} from "../Links/Links";
import {Route, Switch} from 'react-router-dom';
import {pages, PageType} from "../Routes/Path";


const mappedRoutes = pages.map((p: PageType) => (
    <Route
        key={p.id}
        path={p.path}
        render={() => p.page}
    />
));

export const Header = () => {
    return (
        <div className="App">
            <Links/>
            <Switch>
                {mappedRoutes}
            </Switch>

        </div>
    );
}


