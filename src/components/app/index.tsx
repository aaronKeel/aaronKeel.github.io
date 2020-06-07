import * as React from 'react';

import { Hello } from '../hello';
import { Thrashard, YouthAndLust, LyricsWrapperProps } from '../lyrics';
import { GlobalHealthSpending, ChartWrapperProps } from '../chart';

import './style.scss';

export interface ContentLookup {
    'global-health-spending': ({ className }: ChartWrapperProps) => JSX.Element;
    'youth-and-lust': ({ className }: LyricsWrapperProps) => JSX.Element;
    'thrashard': ({ className }: LyricsWrapperProps) => JSX.Element;
}

export const content = {
    'global-health-spending': GlobalHealthSpending,
    'youth-and-lust': YouthAndLust,
    'thrashard': Thrashard,
};

export const App = (): JSX.Element => {
    const [contentKey, setContentKey] = React.useState<keyof ContentLookup>('global-health-spending');

    const menuCB = (d: keyof ContentLookup) => setContentKey(d);

    return (
        <div className='grid-container'>
            <Hello className='grid-item' menu={Object.keys(content)} menuCB={menuCB} />
            {content[contentKey]({ className: 'grid-item' })}
            <div className='grid-item'></div>
        </div>
    );
};
