import * as React from 'react';

export interface HelloProps { compiler: string; framework: string; }

export const Hello = ({ compiler, framework }: HelloProps): JSX.Element => (
    <div>
        <p>Use your head.</p>
        <p>aaronKeel.github.io</p>
        <p>{compiler}</p>
        <p>{framework}</p>
    </div>
);
