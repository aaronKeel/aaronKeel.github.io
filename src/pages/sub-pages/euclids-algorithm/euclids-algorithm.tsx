import React, { useState } from 'react';
import { PageWrapper } from '../../../components/page-wrapper';
import { Typography, TextField, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function getOnChange(cb: (n: number | '') => void): (event: React.ChangeEvent<HTMLInputElement>) => void {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (value === '') {
            cb('');
        }
        else {
            const x = Number(value);
            if (x === Math.floor(x) && x >= 0) {
                cb(Number(event.target.value));
            }
        }
    };
}

function printEuclidsAlgorithm(a: number | '', b: number | ''): JSX.Element | null {
    if (a === '' || b === '' || !(a >= 0) || !(b >= 0)) return null;

    return (
        <Box p={1}>
            <Typography>{`${a}, ${b}`}</Typography>
            {b === 0 ? (<Typography>{`gcd: ${a}`}</Typography>) : (printEuclidsAlgorithm(b, a % b))}
        </Box>
    );
}

export function EuclidsAlgorithm(): JSX.Element {
    const classes = useStyles();
    const [integerA, setIntegerA] = useState<number | ''>('');
    const [integerB, setIntegerB] = useState<number | ''>('');

    return (
        <PageWrapper>
            <Typography>
                {'Euclid\'s Algorithm'}
            </Typography>
            <Box>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-number" label="integer a" type="number" onChange={getOnChange(setIntegerA)} value={integerA} />
                    <TextField id="standard-number" label="integer b" type="number" onChange={getOnChange(setIntegerB)} value={integerB} />
                </form>
                {printEuclidsAlgorithm(integerA, integerB)}
            </Box>
        </PageWrapper>
    );
}
