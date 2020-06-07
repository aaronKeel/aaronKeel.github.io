import * as React from 'react';

export interface HelloProps { className: string; }

export const Hello = ({ className }: HelloProps): JSX.Element => (
    <div className={className}>
        <span>Use your head.</span>
        <br></br>
        <span>aaronKeel.github.io</span>
    </div>
);
