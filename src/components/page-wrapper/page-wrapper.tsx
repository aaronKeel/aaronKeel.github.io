import React from 'react';
import { Grid, Box } from '@material-ui/core';

export interface PageWrapperProps {
    children: JSX.Element[] | JSX.Element
  }

export function PageWrapper(props: PageWrapperProps): JSX.Element {
    return (
        <Grid container item xs={10}>
            <Box p={2}>
                {props.children}
            </Box>
        </Grid>
    );
}
