import React from 'react';
import { Typography } from '@material-ui/core';

// COMPONENTS
import { PageWrapper } from '../../../components/page-wrapper';

export function Introduction(): JSX.Element {

    return (
        <PageWrapper>
            <Typography>
                Developer in Seattle, WA.
            </Typography>
        </PageWrapper>
    );
}
