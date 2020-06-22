import React, { useState } from 'react';
import { Typography, Grid, Paper, Box } from '@material-ui/core';

// COMPONENTS
import { PageLink } from '../../components/page-link';

// PAGES
import { Introduction } from '../sub-pages/introduction';
import { EuclidsAlgorithm } from '../sub-pages/euclids-algorithm';

interface Pages {
    introduction: () => JSX.Element;
    euclidsAlgorithm: () => JSX.Element;
}

export function Main(): JSX.Element {
    const [selectedPage, setSelectedPage] = useState<keyof Pages>('euclidsAlgorithm');

    return (
        <Grid container>
            <Grid item xs={2}>
                <Paper>
                    <Box p={2}>
                        <Typography>
                            Aaron Keel
                        </Typography>
                        <PageLink title="Introduction" onClick={() => { setSelectedPage('introduction'); }} />
                        <PageLink title="Euclid's Algorithm" onClick={() => { setSelectedPage('euclidsAlgorithm'); }} />
                    </Box>
                </Paper>
            </Grid>
            {selectedPage === 'introduction' && <Introduction/>}
            {selectedPage === 'euclidsAlgorithm' && <EuclidsAlgorithm/>}
        </Grid>
    );
}
