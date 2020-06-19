import React, { useState } from 'react';
import { Typography, Grid, Paper, Box, Link } from '@material-ui/core';

import { VC } from '../sub-pages/victory';

interface Views {
    vc: () => JSX.Element;
    foo: () => JSX.Element;
    bar: () => JSX.Element;
}

const views: Views = {
    vc: VC,
    foo: function Foo() { return (<div>Foo</div>); },
    bar: function Bar() { return (<div>Bar</div>); },
};

export const Main: React.FunctionComponent = () => {
    const [selectedView, setSelectedView]  = useState<keyof Views>('vc');

    return (
        <Grid container>
            <Grid item xs={4}>
                <Paper>
                    <Box p={2}>
                        <Typography>
                            <Box>
                                Aaron Keel
                            </Box>
                            <Box>
                                <Link component="button" color="inherit" onClick={() => { setSelectedView('vc'); }}>Victory</Link>
                            </Box>
                            <Box>
                                <Link component="button" color="inherit" onClick={() => { setSelectedView('foo'); }}>Foo</Link>
                            </Box>
                            <Box>
                                <Link component="button" color="inherit" onClick={() => { setSelectedView('bar'); }}>Bar</Link>
                            </Box>
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
            {views[selectedView]()}
        </Grid>
    );
};
