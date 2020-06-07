import * as React from 'react';

import './style.scss';

export interface LyricsWrapperProps { className: string; }
export interface LyricsProps extends LyricsWrapperProps { lyrics: string; }

export const Lyrics = ({ className, lyrics }: LyricsProps): JSX.Element => {

    const text = lyrics.split('\n').map((d, i, a) => {
        if (i === 0 || a[i - 1] === '') {
            return (
                <React.Fragment key={`line-${i}`}>
                    <span className='heavy'>{d}</span>
                    <br></br>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment key={`line-${i}`}>
                <span className='light'>{d}</span>
                <br></br>
            </React.Fragment>
        );
    });

    return (
        <div className={className}>
            {text}
        </div>
    );
};
