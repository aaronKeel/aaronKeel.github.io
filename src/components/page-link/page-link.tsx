import React from 'react';
import { Typography, Link } from '@material-ui/core';

export interface PageLinkProps {
    title: string;
    onClick: () => void;
}

export function PageLink(props: PageLinkProps): JSX.Element {
    const { onClick, title } = props;

    return (
        <Typography>
            <Link component="button" color="inherit" onClick={onClick}>{title}</Link>
        </Typography>
    );
}
