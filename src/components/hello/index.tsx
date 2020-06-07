import * as React from 'react';

import './style.scss';

export interface HelloProps {
    className: string;
    menu: string[];
    menuCB: (d: string) => void;
}

export const Hello = ({ className, menu, menuCB }: HelloProps): JSX.Element => (
    <div className={className}>
        <span>Use your head.</span>
        <br></br>
        <span>aaronKeel.github.io</span>
        {menu.map(d => (<p className='menu-item' key={d} onClick={() => menuCB(d)}>{d}</p>))}
    </div>
);
