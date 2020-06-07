import * as React from 'react';

import { Hello } from '../hello';
import { Thrashard } from '../lyrics';

import './style.scss';

export const App = (): JSX.Element => {
    return (
        <div className='grid-container'>
            <Hello className='grid-item' />
            <Thrashard className='grid-item' />
            <div className='grid-item'></div>
        </div>
    );
};
