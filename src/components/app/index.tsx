import * as React from 'react';

import { Hello } from '../hello';
import { Thrashard, YouthAndLust, LyricsWrapperProps } from '../lyrics';

import './style.scss';

export interface ContentLookup {
    'youth-and-lust': ({ className }: LyricsWrapperProps) => JSX.Element;
    'thrashard': ({ className }: LyricsWrapperProps) => JSX.Element;
}

export const content = {
    'youth-and-lust': YouthAndLust,
    'thrashard': Thrashard,
};

export const App = (): JSX.Element => {
    const [contentKey, setContentKey] = React.useState<keyof ContentLookup>('youth-and-lust');

    const menuCB = (d: keyof ContentLookup) => setContentKey(d);

    return (
        <div className='grid-container'>
            <Hello className='grid-item' menu={Object.keys(content)} menuCB={menuCB} />
            {content[contentKey]({ className: 'grid-item' })}
            <div className='grid-item'></div>
        </div>
    );
};
