import React, { useState, useEffect } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
import { Grid, CircularProgress } from '@material-ui/core';

import { vStore } from '../../../services/victory';
import { QuarterEarnings } from '../../../services/victory/store';

export function VC(): JSX.Element {
    const [data, setData] = useState<QuarterEarnings[][] | null>(null);

    useEffect(() => {
        if (!data) vStore.fetchData().then(d => {
            setData(d);
        });
    }, [data]);

    if (!data) {
        return (
            <Grid container item xs={8}>
                <CircularProgress />
            </Grid>
        );
    }

    return (
        <Grid container item xs={8}>
            <Grid item xs={6}>
                <VictoryChart
                    domainPadding={20}
                    theme={VictoryTheme.material}
                >
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => (`$${x / 1000}k`)}
                    />
                    <VictoryStack>
                        {data.map((d, i) => {
                            return (
                                <VictoryBar
                                    key={`v-${i}`}
                                    data={d}
                                    x="quarter"
                                    y="earnings"
                                />
                            );
                        })}
                    </VictoryStack>
                </VictoryChart>
            </Grid>
            <Grid item xs={6}>
                CONTROL
            </Grid>
        </Grid>
    );
}
