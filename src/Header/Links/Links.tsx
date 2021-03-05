import React from 'react';
import {NavLink} from 'react-router-dom'
import {pages} from "../Routes/Path";


export const Links = () => {
    return (
        <div className="App">
            {pages.map(t => {
                return (
                    <NavLink style={{margin: '10px', display: "inline-block"}} key={t.id} to={t.path}>{t.title}</NavLink>
                )
            })}
        </div>
    );
}