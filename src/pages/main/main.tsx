import React, { useState } from 'react';
import { Typography, Grid, Paper, Box, Link } from '@material-ui/core';

import { VC } from '../sub-pages/victory';

interface Views {
    vc: () => JSX.Element;
    foo: () => JSX.Element;
    bar: () => JSX.Element;
}

function Foo() { return (<Typography>Foo</Typography>); }
function Bar() { return (<Typography>Bar</Typography>); }

export function Main(): JSX.Element {
    const [selectedView, setSelectedView] = useState<keyof Views>('foo');

    return (
        <Grid container>
            <Grid item xs={4}>
                <Paper>
                    <Box p={2}>
                        <Typography>
                            Aaron Keel
                        </Typography>
                        <Typography>
                            <Link component="button" color="inherit" onClick={() => { setSelectedView('vc'); }}>Victory</Link>
                        </Typography>
                        <Typography>
                            <Link component="button" color="inherit" onClick={() => { setSelectedView('foo'); }}>Foo</Link>
                        </Typography>
                        <Typography>
                            <Link component="button" color="inherit" onClick={() => { setSelectedView('bar'); }}>Bar</Link>
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
            {selectedView === 'foo' && <Foo/>}
            {selectedView === 'bar' && <Bar/>}
            {selectedView === 'vc' && <VC/>}
        </Grid>
    );
}
